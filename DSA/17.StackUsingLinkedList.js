/**
 * Stacks LIFO(Last In First Out) data structures where the last item added is removed first.
 * 
 */



class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Same as shift in singly linked list. since shift takes constant time 
    push(value){
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        return ++this.size;
    }

    // Same as unshift in singly linked list. since unshift takes constant time 
    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.head;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }
        this.head = poppedNode.next;
        poppedNode.next = null;
        this.size--;

        return poppedNode;
    }
}


/**
 * Time Complexity
 *      Insertion - O(1)
 *      Removal - O(1)
 *      Searching - O(N)
 *      Access - O(N)
 */

