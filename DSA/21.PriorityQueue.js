/**
 * Priority Queue is data structure where each element has a priority.
 *  Elements with higher priorities are served before elements with lower priorities.
 * 
 * We can use any data structure to implement priority queues likes lists or arrays. 
 * But since it requires to compare priorities of each element, heaps are convinient.
 * 
 */
//Implementation of priority queue using min binary heap

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        let newNode = new Node(value, priority); 
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
         
         if(this.values.length > 0){
             this.values[0] = end;
             this.sinkDown();
         }
         return min;
     }
 
     sinkDown(){
        let parentIdx = 0;
        const element = this.values[parentIdx];
        const length = this.values.length;

        while(true){
            let leftChildIdx = 2 * parentIdx + 1;  
            let rightChildIdx = 2 * parentIdx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[parentIdx] = this.values[swap];
            this.values[swap] = element;
            parentIdx = swap;
        }
    }
}



let pq = new PriorityQueue();
pq.enqueue('task 1', 5);
pq.enqueue('task 2', 3);
pq.enqueue('task 3', 1);
pq.enqueue('task 4', 4);
pq.enqueue('task 5', 2);




