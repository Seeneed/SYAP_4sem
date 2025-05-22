var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//1 задание
var myPromise = new Promise(function (resolve, reject) {
    var value = Math.random();
    setTimeout(function () { return resolve(value); }, 3000);
});
myPromise.then(function (value) { console.log(value); });
//2 задание
function generateNumberAfterDelay(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var value = Math.random();
            resolve(value);
        }, delay);
    });
}
function secondTask(delay) {
    return Promise.all([
        generateNumberAfterDelay(delay),
        generateNumberAfterDelay(delay),
        generateNumberAfterDelay(delay)
    ]);
}
secondTask(3000).then(function (values) {
    console.log(values);
});
//3 задание
var pr = new Promise(function (res, rej) {
    rej('ku');
});
pr.then(function () { return console.log(1); })
    .catch(function () { return console.log(2); })
    .catch(function () { return console.log(3); })
    .then(function () { return console.log(4); })
    .then(function () { return console.log(5); });
//4 задание
var prom = new Promise(function (resolve, reject) {
    setTimeout(function () { return resolve(21); }, 1000);
})
    .then(function (result) {
    console.log(result);
    return result;
})
    .then(function (result) {
    console.log(result * 2);
    return result * 2;
});
//5 задание
function f() {
    return __awaiter(this, void 0, void 0, function () {
        var prom, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prom = new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve(21); }, 1000);
                    })
                        .then(function (result) {
                        console.log(result);
                        return result;
                    })
                        .then(function (result) {
                        console.log(result * 2);
                        return result * 2;
                    });
                    return [4 /*yield*/, prom];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/];
            }
        });
    });
}
f();
//6 задание
var promiseOne = new Promise(function (res, rej) {
    res('Resolved promise - 1');
});
promiseOne.then(function (res) {
    console.log("Resolved promise - 2");
    return "OK";
})
    .then(function (res1) {
    console.log(res1);
});
//7 задание
var promiseTwo = new Promise(function (res, rej) {
    res('Resolved promise - 1');
});
promiseTwo.then(function (res) {
    console.log(res);
    return "OK";
})
    .then(function (res1) {
    console.log(res1);
});
//8 задание
var promiseThird = new Promise(function (res, rej) {
    res('Resolved promise - 1');
});
promiseThird.then(function (res) {
    console.log(res);
    return res;
})
    .then(function (res1) {
    console.log('Resolved promise - 2');
});
//9 задание
var promiseFourth = new Promise(function (res, rej) {
    res('Resolved promise - 1');
});
promiseFourth.then(function (res) {
    console.log(res);
    return res;
})
    .then(function (res1) {
    console.log(res1);
});
//10 задание
var promiseFifth = new Promise(function (res, rej) {
    res('Resolved promise - 1');
});
promiseFifth.then(function (res) {
    console.log(res);
})
    .then(function (res1) {
    console.log(res1);
});
