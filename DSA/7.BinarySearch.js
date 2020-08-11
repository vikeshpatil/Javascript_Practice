biSearch = (arr, key) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while(arr[middle] !== key && left <= right){
        console.log(left, middle, right);
        
        if(key < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === key ? middle : -1; 
}

biSearch([2, 12, 23, 56, 67, 98], 23);


// Time Complexity - log(n)