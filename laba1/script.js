function createPhoneNumber(arr) {
    if (arr.length != 10) {
        console.log("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
    }
    return String("(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]);
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 0; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(10));
function cycleArr(arr, k) {
    if (k < 0) {
        return null;
    }
    for (var i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(cycleArr([1, 2, 3, 4, 5, 6, 7], 3));
function findMiddleUnionArrys(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    arr3.sort(function (a, b) { return a - b; });
    var middle = Math.floor(arr3.length / 2);
    if (arr3.length % 2 != 0) {
        return arr3[middle];
    }
    return (arr3[middle - 1] + arr3[middle]) / 2;
}
console.log(findMiddleUnionArrys([1, 3], [2]));
console.log(findMiddleUnionArrys([1, 2], [3, 4]));
