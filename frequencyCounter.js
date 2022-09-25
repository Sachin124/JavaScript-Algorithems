/**
 * Frequency Counter - sameFrequency
* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

* Your solution MUST have the following complexities:

* Time: O(N)

* Sample Input:

* sameFrequency(182,281) // true
* sameFrequency(34,14) // false
* sameFrequency(3589578, 5879385) // true
* sameFrequency(22,222) // false
 */


function sameFrequency(num1, num2) {
    if (num1.toString().length !== num2.toString().length) {
        return false
    }
    let num1Sum = 0;
    let num2Sum = 0;
    num1 = num1.toString();
    num2 = num2.toString();

    for (let i = 0; i < num1.length; i++) {
        num1Sum += Number(num1[i]);
        num2Sum += Number(num2[i]);    
    }

    if (num1Sum === num2Sum) {
            return true;
    }else{
        return false;
    }
}

console.log('Is sameFrequency:' + sameFrequency(182,282));


// function sameFrequency(num1, num2){
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if(strNum1.length !== strNum2.length) return false;
    
//     let countNum1 = {};
//     let countNum2 = {};
    
//     for(let i = 0; i < strNum1.length; i++){
//       countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }
    
//     for(let j = 0; j < strNum1.length; j++){
//       countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }
    
//     for(let key in countNum1){
//       if(countNum1[key] !== countNum2[key]) return false;
//     }
   
//     return true;
//   }