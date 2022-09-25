// given two strings, write a function called validAnagram to determine if the second string is an anagram of the first. Example of input and output
/* validAnagram('','') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('anagram', 'nagaram') // true
 * validAnagram('rat', 'car') // false
 * validAnagram('awesome', 'awesom') // false
 * validAnagram('qwerty','qeywrt')// true
 * validAnagram('texttwisttime', 'timetwisttext')// true
 */

// function validAnagram(str1, str2) {

//     // to convert in array
//     str1 = [...str1];
//     str2 = [...str2];

//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let anagramCount = {};

//     for (let i = 0; i < str1.length; i++) {
//         const element = str1[i];
//         anagramCount[element] += 1;        
//     }


//     for (let j = 0; j < str2.length; j++) {
//         const element = str2[j];        
//         if (!anagramCount.hasOwnProperty(element)) {
//             return false;
//         }
//     }

//     return true;

// }


function validAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let anagramCount = {};

    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];
        anagramCount[element] ? anagramCount[element] += 1 : anagramCount[element] = 1;
    }

    for (let j = 0; j < str2.length; j++) {
        const element = str2[j];
            if (!anagramCount[element]) {
                return false;
            }else{
                anagramCount[element]-= 1;
            }
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram'));
