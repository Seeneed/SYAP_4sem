var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//1 задание
var BaseUser = /** @class */ (function () {
    function BaseUser(id, name) {
        this.id = id;
        this.name = name;
    }
    return BaseUser;
}());
var Guest = /** @class */ (function (_super) {
    __extends(Guest, _super);
    function Guest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guest.prototype.getRole = function () {
        return "Гость";
    };
    Guest.prototype.getPermissions = function () {
        return ["Просмотр контента"];
    };
    return Guest;
}(BaseUser));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.getRole = function () {
        return "Пользователь";
    };
    User.prototype.getPermissions = function () {
        return ["Просмотр контента", "Может оставлять комментарии"];
    };
    return User;
}(BaseUser));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.getRole = function () {
        return "Администратор";
    };
    Admin.prototype.getPermissions = function () {
        return ["Просмотр контента", "Добавление комментариев", "Удаление комментариев", "Управление пользователями"];
    };
    return Admin;
}(BaseUser));
var guest = new Guest(1, "Аноним");
console.log(guest.getRole());
console.log(guest.getPermissions());
var user = new User(2, "Денис");
console.log(user.getRole());
console.log(user.getPermissions());
var admin = new Admin(3, "Даниил");
console.log(admin.getRole());
console.log(admin.getPermissions());
var HTMLReport = /** @class */ (function () {
    function HTMLReport(title, content) {
        this.title = title;
        this.content = content;
    }
    HTMLReport.prototype.generate = function () {
        return "<h1>".concat(this.title, "</h1><p>").concat(this.content, "</p>");
    };
    return HTMLReport;
}());
var JSONReport = /** @class */ (function () {
    function JSONReport(title, content) {
        this.title = title;
        this.content = content;
    }
    JSONReport.prototype.generate = function () {
        return ["title: ".concat(this.title, ", content: ").concat(this.content)];
    };
    return JSONReport;
}());
var report1 = new HTMLReport("Отчёт 1", "Содержание отчёта");
console.log(report1.generate());
var report2 = new JSONReport("Отчёт 2", "Содержание отчёта");
console.log(report2.generate());
//3 задание
var CachE = /** @class */ (function () {
    function CachE() {
        this.cache = {};
    }
    CachE.prototype.add = function (key, value, ttl) {
        var _this = this;
        var currentTime = Date.now();
        var time = currentTime + ttl;
        this.cache[key] = { value: value, time: time };
        setTimeout(function () {
            delete _this.cache[key];
        }, ttl);
    };
    CachE.prototype.get = function (key) {
        var currentTime = Date.now();
        if (this.cache[key] && this.cache[key].time > currentTime) {
            return this.cache[key].value;
        }
        else {
            delete this.cache[key];
            return null;
        }
    };
    CachE.prototype.clearExpired = function () {
        var currentTime = Date.now();
        for (var key in this.cache) {
            if (this.cache[key].time <= currentTime) {
                delete this.cache[key];
            }
        }
    };
    return CachE;
}());
var cache = new CachE();
cache.add("price", 100, 5000);
console.log(cache.get("price"));
setTimeout(function () { return console.log(cache.get("price")); }, 6000);
//4 задание
function createInstance(cls) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new (cls.bind.apply(cls, __spreadArray([void 0], args, false)))();
}
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var p = createInstance(Product, "Телефон", 50000);
console.log(p);
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "Info";
    LogLevel["WARNING"] = "Warning";
    LogLevel["ERROR"] = "Error";
})(LogLevel || (LogLevel = {}));
;
function LogEvent(event) {
    console.log(event);
}
console.log(LogEvent([new Date(), LogLevel.INFO, "Система запущена"]));
//6 задание
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
function success(data) {
    return [HttpStatus.OK, data];
}
function error(message, status) {
    return [status, null, message];
}
var res1 = success({ user: "Андрей" });
console.log(res1);
var res2 = error("Ошибка сервера", HttpStatus.InternalServerError);
console.log(res2);
