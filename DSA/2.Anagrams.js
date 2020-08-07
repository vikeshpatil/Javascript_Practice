/** Another example of frequency counter
 * Que. Given two strings, write a function to determine if the second string is an anagram of first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed form iceman
 * 
 * e.g. validAnagram('', '')  --> true
 *      validAnagram('aaz', 'azz')  --> false
 *      validAnagram('qwerty', 'qeywrt')  --> true
 *      validAnagram('awesome', 'awesom')   --> false
 */

 validAnagram = (str1, str2) => {
     if(str1.length !== str2.length) return false;

     let frequencyCounter1 = {}; 
     
     for(let i = 0; i < str1.length; i++){
         let letter = str1[i];
        //  if letter exist then increment by 1 otherwise set to 1
        frequencyCounter1[letter] ? frequencyCounter1[letter] += 1 : frequencyCounter1[letter] = 1;
     }

     for(let i = 0; i < str2.length; i++){
        let letter = str2[i];

        // if can't find letter or letter is 0 then it's not an anagram
        if(!frequencyCounter1[letter]){
            return false;
        }else{
            frequencyCounter1[letter] -= 1;
        }
    } 

    return true;
 }

 validAnagram('', '');
 validAnagram('aaz', 'azz');
 validAnagram('qwerty', 'qeywrt');
 validAnagram('awesome', 'awesom');
 