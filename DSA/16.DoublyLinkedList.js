class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;        
        return this;
    }

    pop(){
        if(!this.head && !this.tail) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;

        return poppedNode;
    }

    shift(){
        if(!this.head) return undefined;

        let removeNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removeNode.next;
            this.head.prev = null;
            removeNode.next = null;
        }
        
        this.length--;
        return removeNode;
    }

    unshift(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let current, counter;
        if(index <= this.length/2){
            current = this.head;
            counter = 0;
            while(counter !== index){
                current = current.next;
                counter++;
            }

        }else{
            current = this.tail;
            counter = this.length - 1;
            while(counter !== index){
                current = current.prev;
                counter--;
            }
        }

        return current;
    }

    set(index, value){
        let updateNode = this.get(index);
        if(updateNode){
            updateNode.value = value;
            return true;
        } 
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;

        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        
        let prevNode = this.get (index - 1);
        let newNode = new Node(value);
        
        newNode.next = prevNode.next;
        prevNode.next.prev = newNode;
        newNode.prev = prevNode;
        prevNode.next = newNode;

        this.length++;

        return true;
    }

    delete(index){
        if(index < 0 || index >= this.length) return undefined;

        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removeNode = this.get(index);

        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;

        this.length--;

        return removeNode;
    }
}


let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);




/**
 * Time Complexity
 *      Insertion - O(1)
 *      Removal - O(1)
 *      Searching - O(N)
 *      Access - O(N)
 */