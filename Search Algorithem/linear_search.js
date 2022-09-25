/**
 * ******** Lener Search Pseudocode
 * 
 * This function accepts an array and a value
 * Loop through the array and check if the current array element is equal to the value
 * If it is, return the index at which the element is found
 * If the value is never found, return -1
 * 
 */

function search(arr, number) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element === number) {
            return `element index is ${i}`;
        }        
    }

    return `element index not found -1`
}

console.log(search([1,2,3,4,5,6,7,8,9], 15));

function linerSearchBIG_O(arr, number) {
    /**
     * O(1) -> BEST
     * O(n) -> AVERAGE
     * O(n) -> WORS (IF MILLIONS OF NUMBERS)
     */
}