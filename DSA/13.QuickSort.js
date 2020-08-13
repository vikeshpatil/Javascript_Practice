partition = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIdx = start;
    for(let j = start + 1; j <= end; j++){
        if(arr[j] < pivot){
            swapIdx++;
            [arr[j], arr[swapIdx]] = [arr[swapIdx], arr[j]]; 
        }
    }
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

    return swapIdx;
}


quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right){
        let pivotIndex = partition(arr, left, right);
        // sort left
        quickSort(arr, left, pivotIndex - 1);
        // sort right
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

quickSort([14, 23, 54, 76, 2, 32]);



/**
 * Time Complexity 
 *      Best and Average Case- O(nlog(n))
 *      Worst Case - O(n^2) (When pivot we choose is always smallest or largest and when array is already sorted)
 */