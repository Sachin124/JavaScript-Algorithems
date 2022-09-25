/**
 * countUniqueValues
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
 * There can be negative numbers in the array, but it will always be sorted.
 * 
 * countUniquevalues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) //0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 * 
 */

/*-  MY SOLUTION
function countUniqueValues(numbers) {
    
    let uniques = {};

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];

        if (!uniques.hasOwnProperty(element)) {
            uniques[element] = element;
        }
        
    }

    console.log(Object.keys(uniques).length);
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) 
*/

/** SOLUTION 2 */


// function countUniqueValues(arr) {

//     let i= 0;

//     for (let j = 1; j < arr.length; j++) {
//        if (arr[i] !== arr[j]) {
//         i++;
//         arr[i] = arr[j];
//        }        
//     }
//     console.log(i+1);    
// }

// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) 




