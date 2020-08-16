/**
 * Queue is a FIFO (First In First Out) data structure where first element inserted is removed first.
 * 
 */

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return ++this.size;
    }

    dequeue(){
        if(!this.head) return undefined;
        let removeNode = this.head;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }
        this.head = removeNode.next;
        removeNode.next = null;

        this.size--;
        return removeNode;
    }
}

/**
 * Time Complexity
 *      Insertion - O(1)
 *      Removal - O(1)
 *      Searching - O(N)
 *      Access - O(N)
 */
