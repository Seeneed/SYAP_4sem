//1 задание
const array: Person[] = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]
interface Person {
    id: number;
    name: string;
    group: number;
}
array.forEach(person => {
    console.log(`ID: ${person.id}, Имя: ${person.name}, Группа: ${person.group}`);
})

//2 задание
interface CarsType {
    manufacturer: string;
    model: string;
}
let car: CarsType = {
    manufacturer: "Italy",
    model: "Ferrari",
};
console.log(`Страна-производитель: ${car.manufacturer}, Модель: ${car.model}`);

//3 задание
interface ArrayCarsType {
    cars: CarsType[];
}
const car1: CarsType = {
    manufacturer: "Germany",
    model: "Audi",
}
const car2: CarsType = {
    manufacturer: "Japan",
    model: "Nissan",
}
const arrayCars: Array<ArrayCarsType> = [{
    cars: [car, car2]
}];
for(let i = 0; i < arrayCars.length; i++){
    for(let j = 0; j < arrayCars[i].cars.length; j++){
        console.log(`ID: ${j}, Страна-производитель: ${arrayCars[i].cars[j].manufacturer}, Марка автомобиля: ${arrayCars[i].cars[j].model}`);
    }
}

//4 задание
type MarkFilterType = 1|2|3|4|5|6|7|8|9|10;
type DoneType = boolean;
type GroupFilterType = 1|2|3|4|5|6|7|8|9|10|11|12;
type MarkType = {
    subject: string,
    mark: MarkFilterType,
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType,
    marks: Array<MarkType>,
}
type GroupType = {
    students: StudentType[];
    studentsFilter: (group: number) => Array<StudentType>;
    marksFilter: (mark: number) => Array<StudentType>;
    deleteStudent: (id: number) => void;
    mark: MarkFilterType;
    group: GroupFilterType;
}
const student1: StudentType = {
    id: 1,
    name: "Vasya",
    group: 3,
    marks: [{ subject: "Math", mark: 7, done: true }]
};
const student2: StudentType = {
    id: 2,
    name: "Ivan",
    group: 5,
    marks: [{ subject: "English", mark: 9, done: true }]
};
const group: GroupType ={
    students: [student1, student2],
    studentsFilter: (filterGroup) => group.students.filter(student => student.group === filterGroup),
    marksFilter: (mark) => group.students.filter(student => student.marks.some(m => m.mark === mark)),
    deleteStudent: (id) => {
        group.students = group.students.filter(student => student.id !== id);
    },
    mark: 5,
    group: 1,
};
group.students.forEach(student => {
    console.log(`ID: ${student.id}, Имя: ${student.name}, Группа: ${student.group}`);
    student.marks.forEach(mark => {
        console.log(`Предмет: ${mark.subject}, Оценка: ${mark.mark}, Выполнение: ${mark.done}`);
    });
});