/**
 * This pattern uses objects or sets to collect values/frequencies of values
 * 
 * Que. -> Write a function called same, which accepts two arrays. The function should return true if every value in the 
 * array has it's corresponding values squared in the second array. The frequency of the values must be the same.
 */

 same = (arr1, arr2) => {
     if(arr1.length !== arr2.length) return false;

     let frequencyCounter1 = {};
     let frequencyCounter2 = {};

     for(let val of arr1){
        //  if current key is present, increment by 1. if not present then set to 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
     }

     for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
     }

     for(let key in frequencyCounter1){
         if(!(key ** 2 in frequencyCounter2)) return false;

         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
     }

     return true;
 }

 same([1, 3, 2, 5], [4, 1, 25, 9]);
