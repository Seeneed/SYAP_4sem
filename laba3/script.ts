//1 задание
abstract class BaseUser{
    id:number;
    name:string;
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    abstract getRole() : string;
    abstract getPermissions() : string[];
}
class Guest extends BaseUser{
    getRole(): string {
        return "Гость";
    }
    getPermissions(): string[] {
        return ["Просмотр контента"];
    }
}
class User extends BaseUser{
    getRole(): string {
        return "Пользователь";
    }
    getPermissions(): string[] {
        return ["Просмотр контента", "Может оставлять комментарии"];
    }
}
class Admin extends BaseUser{
    getRole(): string {
        return "Администратор";
    }
    getPermissions(): string[] {
        return ["Просмотр контента", "Добавление комментариев", "Удаление комментариев", "Управление пользователями"];
    }
}
const guest = new Guest(1, "Аноним");
console.log(guest.getRole());
console.log(guest.getPermissions());
const user = new User(2, "Денис");
console.log(user.getRole());
console.log(user.getPermissions());
const admin = new Admin(3, "Даниил");
console.log(admin.getRole());
console.log(admin.getPermissions());

//2 задание
interface IReport{
    title:string;
    content:string;
    generate();
}
class HTMLReport implements IReport{
    title:string;
    content: string;
    constructor(title:string, content:string){
        this.title = title;
        this.content = content;
    }
    generate() {
        return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
}
class JSONReport implements IReport{
    title:string;
    content:string;
    constructor(title:string, content:string){
        this.title = title;
        this.content = content;
    }
    generate() : string[] {
        return [`title: ${this.title}, content: ${this.content}`];
    }
}
const report1 = new HTMLReport("Отчёт 1", "Содержание отчёта");
console.log(report1.generate())
const report2 = new JSONReport("Отчёт 2", "Содержание отчёта");
console.log(report2.generate());

//3 задание
class CachE<T>{
    private cache: { [key: string]: { value: T, time: number} } = {};
    add(key:string, value: T, ttl: number) {
        const currentTime = Date.now();
        const time = currentTime + ttl;
        this.cache[key] = {value, time};
        setTimeout(() => {
            delete this.cache[key];
        }, ttl);
    }
    get(key:string) : T | null {
        const currentTime = Date.now();
        if(this.cache[key] && this.cache[key].time > currentTime){
            return this.cache[key].value;
        }
        else{
            delete this.cache[key];
            return null;       
        }
    }
    clearExpired() {
        const currentTime = Date.now();
        for(const key in this.cache){
            if(this.cache[key].time <= currentTime){
                delete this.cache[key];
            }
        }
    }
}
const cache = new CachE<number>();
cache.add("price", 100, 5000);
console.log(cache.get("price"));
setTimeout(() => console.log(cache.get("price")), 6000);

//4 задание
function createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T {
    return new cls(...args);
}
class Product {
    constructor(public name: string, public price: number){}
}
const p = createInstance(Product, "Телефон", 50000);
console.log(p);

//5 задание
type LogEntry = [Date, LogLevel, message: string];
enum LogLevel{
    INFO = "Info",
    WARNING = "Warning",
    ERROR = "Error",
};
function LogEvent(event: LogEntry){
    console.log(event);
}
console.log(LogEvent([new Date(), LogLevel.INFO, "Система запущена"]));

//6 задание
enum HttpStatus{
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    InternalServerError = 500,
}
type ApiResponse<T> = [status: HttpStatus, data: T | null, error?: string];
function success<T>(data: T) : ApiResponse<T> {
    return[HttpStatus.OK, data];
}
function error(message: string, status: HttpStatus) : ApiResponse<null> {
    return[status, null, message];
}
const res1 = success({user: "Андрей"});
console.log(res1);
const res2 = error("Ошибка сервера", HttpStatus.InternalServerError);
console.log(res2);