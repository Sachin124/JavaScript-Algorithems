/**
 * ********** BINARY SEARCH **********
 * This function accepts a sorted array and a value.
 * Create a left pointer at the start of the array, and a right pointer at the end of the array.
 * While the left pointer comes before the right pointer:
 *  * Create a pointer in the middle
 *      * If you find the value you want, return the index
 *      * If the value is too small, move the left pointer up
 *      * If the value is too large, move the right pointer down
 * If you never find the value, return -1
 * 
 * binarySearch([1,2,3,4,5],2) // 1
 * binarySearch([1,2,3,4,5],3) // 2
 * binarySearch([1,2,3,4,5],5) // 4
 * binarySearch([1,2,3,4,5],6) // -1
 * binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 10) // 2
 * binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 95) // 16
 * binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 100) // -1
 */

function binarySearch(arr, number) {

    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== number && start <= end) {
        number < arr[middle] ? end = middle -1 : start = middle + 1;
        middle = Math.floor((start + end)/2);
    }

    return arr[middle] === number ? middle : -1;
}


console.log(binarySearch([2, 5, 8, 11, 15], 16));
console.log(binarySearch([2, 5, 8, 11, 15], 0));
console.log(binarySearch([2, 5, 8, 11, 15], 11));