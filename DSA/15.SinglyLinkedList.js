class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

// Insert item at the end
    push(value){
        let newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Remove end item
    pop(){
        if(!this.head) return undefined;

        if(this.head === this.tail && !this.head) {
            let popItem = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return popItem;
        }

        let current = this.head;
        let prev = null;
        
        while(current.next){
            prev = current;
            current = current.next;
        }
        this.tail = prev;        
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // remove item from the start
    shift(){
        if(!this.head) return undefined;

        if(this.head === this.tail && !this.head) {
            let popItem = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return popItem;
        }
        let temp = this.head;
        this.head = temp.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }

        return temp;
    }

    // Insert item at the beginning of the list
    unshift(value){
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        } 
        this.length++;
        return this;
    }

    // Get the item at given position starting from 0
    get(index){
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while(counter < index){
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, value){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;

        if(index === this.length) return !!this.push(value);  // !'hi' -> false     !!'hi'  -> true
        if(index === 0) return !!this.unshift(value);
        let newNode = new Node(value);
        let node = this.get(index - 1);
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
        return true;
    }

    delete(index){
        if(index < 0 || index >= this.length) return null;
        
        if(index === length - 1) return this.pop();
        if(index === 0) return this.shift();
 
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return true;

    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail  = node;
        let next = null;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next; 
        }
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(`${current.value}`);
            current = current.next;
        }
    }

}

let list = new SinglyLinkedList();
list.push('Hey');
list.push('Hello');
list.push('!');




/**
 * Time Complexity -
 *      insertion - O(1)
 *      removal - depends O(1) or O(N)
 *      Searching - O(N)
 *      Access - O(N)
 *  */ 
