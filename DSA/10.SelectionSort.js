selectionSort = arr => {
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        // swap 
        [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
    }
    return arr;
}

selectionSort([14, 23, 54, 76, 2, 32]);

// Time Complexity - O(n^2)