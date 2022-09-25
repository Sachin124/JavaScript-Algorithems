


// let arr1 = [-5, -2, -7, 0, 1, 12];

// let arr2 = [-9, -5, -2, 3, 7, 15];


function demo(arr1, arr2) {

    // first merge the array

    let start = arr1.length;

    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        arr1[start++] = element;
    }

    console.log(arr1);

    // remove duplicates

    // sort reverse the array using bubble sort

    let done = false;

    while (!done) {
        done = true;
        for (let i = 1; i < arr1.length; i+=1) {
            if (arr1[i - 1] < arr1[i]) {
                done = false;
                let temp = arr1[i - 1];
                arr1[i - 1] = arr1[i];
                arr1[i] = temp;
            }

        }
    }

    return [...new Set(arr1)];

}

console.log(demo([-5, -2, -7, 0, 1, 12], [-9, -5, -2, 3, 7, 15]));


// 15, 12, 7, 3, 1, 0, -2, -5, -7, -9
