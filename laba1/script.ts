//1 задание
function createPhoneNumber(arr: number[]): string {
    if(arr.length != 10){
        console.log(`Неверный формат номера телефона`);
    }
    return String("(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]);
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//2 задание
class Challenge {
    static solution(number: number){
        if(number < 0){
            return 0;
        }
        let sum:number = 0;
        for(let i = 0; i < number; i++){
            if(i % 3 == 0 || i % 5 == 0){
                sum += i;
            }
        }
        return sum;
    }
}
console.log(Challenge.solution(10));

//3 задание
function cycleArr(arr: number[], k: number): number[] | null {
    if (k < 0) {
        return null;
    }
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop()!);
    }
    return arr;
}
console.log(cycleArr([1, 2, 3, 4, 5, 6, 7], 3));

//4 задание
function findMiddleUnionArrys(arr1: number[], arr2: number[]): number {
    let arr3:number[] = arr1.concat(arr2);
    arr3.sort((a, b) => a - b);
    let middle:number = Math.floor(arr3.length / 2);
    if(arr3.length % 2 != 0){
        return arr3[middle];
    }
    return (arr3[middle - 1] + arr3[middle]) / 2;
}
console.log(findMiddleUnionArrys([1,3], [2]));
console.log(findMiddleUnionArrys([1,2], [3,4]));
