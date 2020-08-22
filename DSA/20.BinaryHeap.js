/**
 * Binary Heap is simillar to of binary search tree. 
 *      In max binary heap parent node is always larger than child nodes but there are no guarantees between sibling nodes.    
 *      In min binary heap parents node is always smaller than child nodes.
 *      A binary heap is as compact as possible. All the children of each node are as full as they can be and 
 * Left childern are always filled out first.
 *      Binary Heaps are used to implement Priority Queues.
 * 
 *  e.g. 1. Max binary heap
 *                 41 
 *               /    \
 *             39      33
 *            /  \    /  \
 *           18  27 12
 * 
 *      2. Min Binary Heap
 *                  1
 *                /   \
 *               17    19
 *              /   \
 *             25   100
 * 
 *  When a binary heap is represented using an array or a list
 *      then for any index n, the left child is stored at 2n + 1
 *      the right child is stored at 2n + 2
 *  For any child node at index n, its parent is at index floor((n-1)/2) 
 *  
 */




class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    /**
     * Insert Psudocode
     * - Push the value into the values property on the heap 
     * - Bubble up
     *      - Create a variable called index which is the length of the values property - 1
     *      - Create a variable called parrentIndex which is the floor of (index - 1)/2
     *      - Keep looping as long as values element at the parentIndex is less than the values element at the child index
     *          - Swap the value of the values element at the parentIndex with the value of the element property at the child index
     *          - Set the index to be the parentIndex and start over!
     */
    insert(value){
        this.values.push(value);
        this.bubbleUp();
    }
    
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    /**
     * Removing (also called extractMax)
     * 
     * - Swap the first value in the values property with last one
     * - Pop from the values property, so you can return the value at the end 
     * - Have the new root "sink down" to the correct spot...
     *      - Your parent index starts at 0 (the root)
     *      - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
     *      - Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
     *      - If the left or right child is greater than the element... swap if both left and right children are larger,
     *          swap with the largest child.
     *      - The child index your swapped to now becomes the new parent index
     *      - Keep looping and swapping until neigther child is larger than the element
     *      - Return the old root
     */

     extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
         
         if(this.values.length > 0){
             this.values[0] = end;
             this.sinkDown();
         }
         return max;
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
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
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


let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

