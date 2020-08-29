/**
 * A Graph Data Structure consists of a finite set of vertices or nodes or points,
 * together with a set of unordered pair of these vertices for an undirected graph or
 * a set of ordered pair for a directed graph.
 * 
 * Types:
 *      1) Undirected Graph
 *      2) Directed Graph
 * 
 * Representing Graph:
 *      1) Adjacency Matrix
 *      2) Adjacency List
 * 
 * Differences and Big O
 * 
 *  |V| - number of vertices
 *  |E| - number of edges
 *  _____________________________________________________
 *  |    Operation  | Adjacency List | Adjacency Matrix |
 *  |---------------------------------------------------|
 *  | Add Vertex    |   O(1)         | O(|V^2|)         |
 *  | Add Edge      |   O(1)         | O(1)             |
 *  | Remove Vertex |   O(|V| + |E|) | O(|V^2|)         |
 *  | Remove Edge   |   O(|E|)       | O(1)             |
 *  | Query         |   O(|V| + |E|) | O(1)             |
 *  | Storage       |   O(|V| + |E|) | O(|V^2|)         |
 *  |---------------------------------------------------|
 */


 class Graph{
     constructor(){
         this.adjacencyList = {};
     }

     addVertex(vertex){
         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
     }

     addEdge(vertex1, vertex2){
         this.adjacencyList[vertex1].push(vertex2);
         this.adjacencyList[vertex2].push(vertex1);
     }

     removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1), 1);
        this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex1), 1);
     }

    //  removeEdge(vertex1, vertex2){
    //     this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2);
    //     this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1);
    //  }

     removeVertex(vertex){
         if(this.adjacencyList[vertex]){
            this.adjacencyList[vertex].forEach(v => {
                this.removeEdge(vertex, v);
            });
            delete this.adjacencyList[vertex];
         }else console.log('Vertex does no exist');
         
     }

    //  removeVertex(vertex){
    //     while(this.adjacencyList[vertex].length){
    //         const adjacentVertex = this.adjacencyList[vertex].pop();
    //         this.removeEdge(adjacentVertex, vertex);
    //     }
    //     delete this.adjacencyList[vertex];
    //  }


    /**     Depth First Traversal 1(Recursive)
     * - The function should accept a starting node
     * - Create a list to store the end result, to be returned at the very end
     * - Create an object to store visited vertices
     * - Create a helper function which accepts a vertex
     *      - The helper function should return early if the vertex is empty
     *      - The helper function should place the vertex it accepts into the visited object and push 
     *          that vertex into the result array.
     *      - Loop over all of the values in the adjacencyList for the vertex
     *      - If any of those values have not been visited, recursively invoke 
     *          the helper function with that vertex
     *  - Invoke the helper function with the starting vertex
     *  - Return the result array
     *  
     */
     deapthFirst_Recursive(startVertex){   
        const results = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function deapthFirst(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            results.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) return DFS(neighbor);
            });
        })(startVertex);

        return results;
     }

     /**
      *          Deapth First Traversal (Iterative)
      *  - The function should accept a starting node
      *  - Create a stack to help use keep track of vertices( use list/ array)
      *  - Create a list to store the end result, to be returned at the very end
      *  - Create an object to store visited vertices 
      *  - Add the starting vertex to the stack, and mark it visited 
      *  - While the stack has something in it:
      *     - Pop the next vertex from the stack 
      *     - If that vertex hasn't been visited yet:
      *         - Mark it as visited
      *         - Add it to the result list
      *         - Push all of its neighbors into the stack
      *  - Return the result array 
      *  
      */
     deapthFirst_Iterative(startVertex){
        const stack = [];
        const result = [];
        const visited = {};

        stack.push(startVertex);
        visited[startVertex] = true;

        let currentVertex;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor =>{

                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }); 
        }

        return result;
     }

     /**
      * - This function should accept a starting vertex
      * - Create a queue (you can use an array) and place the starting vertex in it
      * - Create an array to store the nodes visited
      * - Create an object to store nodes visited
      * - Mark the starting vertex as visited 
      * - Loop as long as their is anything in the queue
      * - Remove the first vertex from the queue and push it into the array that stores nodes visited
      * - Loop over each vertex in the adjacency list for the vertex you are visiting 
      * - if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex 
      * - Once you have finished looping, return the array of visited nodes 
      */

     breadthFirst(startVertex){
        const queue = [startVertex];
        const result = [];
        const visited = {};

        visited[startVertex] = true;
        let currentVertex;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
     }
}


let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');


/**
 *              A
 *           /     \
 *          B       C
 *          |       |
 *          D ----- E
 *           \     /
 *              F
 */            
g.addEdge('A', 'B');
g.addEdge('A', "C");
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
