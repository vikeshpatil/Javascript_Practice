// Search for a string or word in a longer string

searchNaiveString = (str, key) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < key.length; j++){
            if(str[i + j] !== key[j]) break;
            if(j === key.length - 1) count++;
        }
    }
    return count;
}

searchNaiveString('lorie loled', 'lol');