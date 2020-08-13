getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

digitCount = num => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

mostDigits = nums =>{
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

radixSort = arr => {
    let maxDigits = mostDigits(arr);
    for(let i = 0; i < maxDigits; i++){
        // Create the slots to put the numbers according to current digit
        let digitBuckets = Array.from({length:10}, () => []); // creates an Array containing 10 arrays
        for(let j = 0; j < arr.length; j++){
            let digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

radixSort([345, 45, 1, 678, 3214, 867, 9087]);


/**
 * Time Complexity
 *      best, average and worst - O(nk)
 *          n - length of array
 *          k - number of digits(average)
 * 
 * Space Complexity - O(n+k)
 * 
 */ 