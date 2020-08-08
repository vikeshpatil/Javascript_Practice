/**
 *      Sliding Window
 * 
 *  This pattern involves creating a window which can either be an array or number from one position or another
 *  Depending on a certain condition, the window either increases or closes (and new window is created)
 *  Very useful for keeping track of a subset of data in an array/string, etc.
 * 
 *  Ex. Write a function called maxSubArraySum which accepts an array of integers and a number called n. 
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * 
 *  e.g. maxSubArraySum([1,2,5,2,8,1,5], 2) --> 10
 *      maxSubArraySum([], 4)   --> null
 *       maxSubArraySum([1,2,5,2,8,1,5], 4) --> 17  
 *  
 */

maxSubArraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < num) return null;

    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i< arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

maxSubArraySum([1,2,5,2,8,1,5], 2);
maxSubArraySum([], 4);