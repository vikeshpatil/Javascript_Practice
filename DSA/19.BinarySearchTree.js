class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.frequency = 1;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);

        if(!this.root) {
            this.root = newNode;
            return this; 
        }
        let current = this.root;
        while(true){
            if(value === current.value) {
                current.frequency++;
                return this;
            }

            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(value){
        if(!this.root) return false;

        let current = this.root;
        while(current !== null){
            if(value === current.value) return current;
            if(value < current.value){
                if(current.left === null) return false;
                current = current.left;
            } 
            else if(value > current.value) {
                if(current.right === null) return false;
                current = current.right;
            }
        }

        return false;
    }

// Breadth First Search
// traverse along same level
    BFS(){
        let node = this.root,
            queue = [],
            data = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return data;
    }

    // Depth First Search
    // preorder - first root then all the left branch and then all the right branch 
    DFS_Preorder(){
        let visited = [],
            current = this.root;
        
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        
        traverse(current);
        return visited;
    }
    // Postorder - First all the left then the right and at the end root
    DFS_Postorder(){
        let visited = [],
            current = this.root;
        
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(current);
        return visited;
    }

    // Inorder - First left then root and then right
    DFS_Inorder(){
        let visited = [],
            current = this.root;
        
            function traverse(node){
                if(node.left) traverse(node.left);
                visited.push(node.value);
                if(node.right) traverse(node.right);
            }
            traverse(current);

            return visited;
    }
}

let bst = new BST();

bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(8);
bst.insert(20);
bst.insert(3);
bst.insert(17);

//             10
//           /    \
//     5               15
//   /   \                \
// 3       8              20
//                       /  
//                     17

/**
 * Time Complexity - 
 *      Best and Average - O(log(n))
 */