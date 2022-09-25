/**
 * ********** BUBBLE SORT **********
 * 
 * A sorting algorithm where the largest values bubble up to the top
 *  
 * BEFORE WE SORT, WE MUST SWAP
 * 
 * Many sorting algorithms involve some type of swapping functionlity (e.g swapping to numbers to put them in order)
 */

/** ES5 */

// function swap(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

/** ES2015 */

// const swap = (arr, idx1, idx2)=>{
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }



/**
 * ********** BubbleSort Pseudocode  **********
 * Start looping from with a variable called i the end of the array towards the beginning
 * Start an inner loop with a variable called j from the beginning until i-1
 * If arr[j] is greater than arr[j+1], swap those two values!
 * Return the sorted arr
 */


function bubbleSort(arr) {
    
    let done = false;

    while (!done) {
        done = true;

        for (let i = 1; i < arr.length; i+=1) {
            
            if (arr[i -1] > arr[i]) {
                done = false;
                let temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
            }
            
        }
    }
    return arr;
}

console.log(bubbleSort([6, 4, 15, 10]));