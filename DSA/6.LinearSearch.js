search = (arr, key) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key) return i;
    }
    return -1;
}

search([23, 56, 12, 67, 2, 98], 2);
search(["john", "jane", "mark", "shiroe", "kazuto"], "mark");


// Time Complexity - O(n)