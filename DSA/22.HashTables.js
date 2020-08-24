/**
 * Hash Tables are used to store key-value pairs. They are like arrays but keys are not ordered.
 *  Unlike arrays, hash tables are fast for all of the following operations: finding values,
 *  Adding new values, and removing values.
 * 
 * 
 */

 /**
  * When we get same hash result from multiple hash keys, collision occurs.
  * Two strategies that we can use to resolve the collission includes
  *     1. Separate chaining: With Separate chaining, at each index in our array we store
  *         values using a more sophisticated data structure(e.g. an array or a linked list)
  *     
  *     2. Linear Probing: With linear probing, when we find a collision, we search through 
  *         the array to find the next empty slot and place the value there. Unlike separate chainning
  *         this allows us to store a   single key-value at each index.
  * 
  * 
  */

  class HashTable {
      constructor(size=53){
          this.keyMap = new Array(size);
      }

      _hash(key){
        let total = 0;
        let WEIRED_PRIME = 31;
   
        for(let i=0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRED_PRIME + value) % this.keyMap.length;
        }
        return total;
      }

/**
 * Set()
 * 1. Accepts a key and a value
 * 2. Hashes the key
 * 3. Stores the key-value pair in the hash table array via separate chainning
 */
      set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
      }
/**
 * Get()
 * 1. Accepts a key
 * 2. Hashes the key
 * 3. Retrieves the key-value pair in the hash table
 * 4. If the key isn't found, returns undefined. 
 * 
 */
      get(key){
            let index = this._hash(key);
            if(this.keyMap[index]){
                for(let i=0; i< this.keyMap[index].length; i++){
                    if(this.keyMap[index][i][0] === key){
                        return this.keyMap[index][i][1];
                    }
                }
            }
            return undefined;
      }


      keys(){
        let keysArr = [];
        for(let i= 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
              for(let j = 0; j < this.keyMap[i].length; j++){
                 if(!keysArr.includes(this.keyMap[i][j][0])) keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
            return keysArr;
        }

      values(){
          let valuesArr = [];
          for(let i= 0; i < this.keyMap.length; i++){
              if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                   if(!valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1]);
                  }
              }
          }
          return valuesArr;
    }
}


let ht = new HashTable();






/**
 * Time Complexity
 * 
 *  In general, time complixity of Insertion, Deletion and Access in average and best case is O(1)
 * 
 */