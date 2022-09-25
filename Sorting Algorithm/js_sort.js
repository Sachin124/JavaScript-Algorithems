/**
 * In JavaScript sort method will not sort the numberic numbers properly
 * Eg. let arr = [6,4,15,10];
 * console.log(arr.sort()); // [ 10, 15, 4, 6 ]
 */

let arr = [6, 4, 15, 10];

function numberCompare(num1, num2) {
    return num1 - num2;
}

console.log(arr.sort(numberCompare));