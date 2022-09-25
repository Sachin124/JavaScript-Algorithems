/**
 * DIVIDE AND CONQUER
 * 
 * This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
 * 
 * This pattern can tremendously decrease time complexity!
 * 
 * * An Example **
 * Given a sorted array of integers, write a function called search, that accepts a value and return the index where the value passed
 * to the function is located. If the value is not found, return -1.
 * 
 * search([1,2,3,4,5,6,], 4) // 3
 * search([1,2,3,4,5,6,], 6) // 5
 * search([1,2,3,4,5,6,], 11) // -1
 * 
 */

function search(arr, digitToSearch) {
    
    let done = false;

    while (!done) {
        done = true;

        for (let i = 0; i < arr.length; i++) {            
            if (arr[i -1] > arr[i]) {
                done = false;
                let temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
            }            
        }
    }

    let min = 0;
    let max = arr.length -1;

    while (min <= max) {
        let middle = Math.floor((min+max)/ 2);
        let currentElement = arr[middle];

        if (arr[middle] < digitToSearch) {
            min = middle + 1;
        }else if(arr[middle] > digitToSearch){
            max = middle - 1;
        }else{
            return middle
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6], 4));