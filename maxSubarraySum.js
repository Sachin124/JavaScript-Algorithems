/**
 * maxSubarraySum
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * 
 * maxSubarraySum([1,2,5,2,8,1,5],2) // 10
 * maxSubarraySum([1,2,5,2,8,1,5],4) // 17
 * maxSubarraySum([4,2,1,6],1) // 6
 * maxSubarraySum([4,2,1,6,2],4) // 13
 * maxSubarraySum([],4) //null
 * 
 */

/** A NAIVE SOLUTION - TIME COMPLEXITY - O(N^2) */

// function maxSubarraySum(arr, digit) {
//     if (digit > arr.length) {
//         return
//     }

//     let max = -Infinity;

//     for (let i = 0; i < arr.length - digit + 1; i++) {
//         let temp = 0;
//         for (let j = 0; j < digit; j++) {
//             temp += arr[i + j];
//         }

//         if (temp > max) {
//             max = temp;
//         }
//     }

//     return max;
// }

/** A REFACTOR SOLUTION - TIME COMPLEXITY - O(N^2) */

function maxSubarraySum(arr, digit) {

    if (digit > arr.length) {
        return;
    };

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < digit; i++) {
       maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = digit; i < arr.length; i++) {
        tempSum = tempSum - arr[i- digit] + arr[i];
        maxSum = Math.max(maxSum, tempSum);        
    }

    return maxSum;
}


console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));