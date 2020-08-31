/** Dijkstra's Algorithm
 * Finds the shortest path between two vertices on a graph
 * 
 */

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

// Using priority queue implemented with binary heap
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
 class WeightedGraph{
    constructor(){
       this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    /**
    * Dijkstra's Pseudocode
    * 
    * - The function should accept a starting and ending vertex
    * - Create an object (we'll call it distances) and set each key to be every vertex
    *     in the adjacency list with a value of infinity, except for the starting vertex which 
    *     should have a value of 0.
    * - After setting a value in distances object, add each vertex with a priority of
    *     infinity to the priority queue, except the starting vertex, which should have priority of 
    *     0 because that's where we begin
    * - Create another object called previous and set each key to be every vertex in the adjacency 
    *     list with a value of null
    * - Start looping as long as there is anything in the priority queue
    *     - dequeue a vertex from the priority queue
    *     - if the vertex is the same as the ending vertex - we are done!
    *     - Otherwise loop through each value in the adjacency list at that vertex 
    *         - calculate the distance to that vertex from the starting vertex
    *         - if the distance is less than what is currently stored in our distances object
    *             - update the distances object with new lower distance
    *             - update the previous object to contain that vertex
    *             - enqueue the vertex with the total distance from the start node
    * 
    */
    dijkstraAlgo(startVertex, endVertex){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = []; //to return at the end

        //Build up initial state 
        for(let vertex in this.adjacencyList){
            if(vertex === startVertex){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
    // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().value;
            if(smallest === endVertex){
                // We are done
                //Build up path to return at the end
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    //Calculate new distance to neighboring node
                    let newDistance = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(newDistance < distances[nextNeighbor]){
                        // Updating new smallest distance to neighbor
                        distances[nextNeighbor] = newDistance
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueu in priority queue with new priority
                        nodes.enqueue(nextNeighbor, newDistance);

                    }
                }
            }
        }

        return path.concat(smallest).reverse();
        
    }
}
 
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.dijkstraAlgo("A", "E");
// ["A", "C", "D", "F", "E"]