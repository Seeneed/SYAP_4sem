//1 задание
let myPromise = new Promise(function (resolve, reject) {
    let value: number = Math.random();
    setTimeout(() => resolve(value), 3000);
});
myPromise.then((value) => { console.log(value); });

//2 задание
function generateNumberAfterDelay(delay: number): Promise<number> {
    return new Promise(function (resolve) {
        setTimeout(() => {
            let value: number = Math.random();
            resolve(value);
        }, delay);
    });
}
function secondTask(delay: number): Promise<number[]> {
    return Promise.all([
        generateNumberAfterDelay(delay),
        generateNumberAfterDelay(delay),
        generateNumberAfterDelay(delay)
    ]);
}
secondTask(3000).then((values: number[]) => {
    console.log(values);
});

//3 задание
let pr = new Promise((res, rej) => {
    rej('ku')
});
pr.then(() => console.log(1))
.catch(() => console.log(2))
.catch(() => console.log(3))
.then(() => console.log(4))
.then(() => console.log(5))

//4 задание
let prom = new Promise<number>(function(resolve, reject) {
    setTimeout(() => resolve(21), 1000);
})
.then(function(result) {
    console.log(result);
    return result;
})
.then(function(result) {
    console.log(result * 2);
    return result * 2;
});

//5 задание
async function f(){
    let prom = new Promise<number>(function(resolve, reject) {
        setTimeout(() => resolve(21), 1000);
    })
    .then(function(result) {
        console.log(result);
        return result;
    })
    .then(function(result) {
        console.log(result * 2);
        return result * 2;
    });
    let result = await prom;
    console.log(result);
}
f();

//6 задание
let promiseOne = new Promise((res, rej) => {
    res('Resolved promise - 1');
});
promiseOne.then((res) => {
    console.log("Resolved promise - 2");
    return "OK";
})
.then((res1) => {
    console.log(res1);
});

//7 задание
let promiseTwo = new Promise((res, rej) => {
    res('Resolved promise - 1');
});
promiseTwo.then((res) => {
    console.log(res);
    return "OK";
})
.then((res1) => {
    console.log(res1);
});

//8 задание
let promiseThird = new Promise((res, rej) => {
    res('Resolved promise - 1');
})
promiseThird.then((res) => {
    console.log(res);
    return res;
})
.then((res1) => {
    console.log('Resolved promise - 2');
});

//9 задание
let promiseFourth = new Promise((res, rej) => {
    res('Resolved promise - 1');
})
promiseFourth.then((res) => {
    console.log(res);
    return res;
})
.then((res1) => {
    console.log(res1);
})

//10 задание
let promiseFifth = new Promise((res, rej) => {
    res('Resolved promise - 1');
})
promiseFifth.then((res) => {
    console.log(res);
})
.then((res1) => {
    console.log(res1);
})