// const bubbleSort = arr => {
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 // Swap
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// Optimized bubble sort 
// If there are no swap in previous iteration that means array is sorted and no need for further iterations.
const bubbleSort = arr => {
    let noSwap = true;
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                // Swap
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

bubbleSort([14, 23, 54, 76, 2, 32]);


// Time Complexity - O(n^2)