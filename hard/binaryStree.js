class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinrarySearchTree{
    constructor(){
        this.root =null;
    
}

insert(value){
    const newNode = new Node(value);
    if(this.root === null){
        this.root = newNode;
        return;
    }
    let current = this.root;
    while(true){
     if (value === current.value) return; 
     if(value < current.value){
         if(current.left === null){
             current.left = newNode;
             return;
         }
         current = current.left;
     }else{
         if(value > current.value){
             current.right = newNode;
             return;
         }
         current = current.right;
     }
    }
}
    search(value){
        let current = this.root;
        while(current !== null){
            if(value === current.value) return true;
            if(value < current.value) current = current.left;
            else current = current.right
        }
        return false;
    }
    
    inorder(node = this.root){
        if(node !== null){
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }
    }
}
const bst = new BinrarySearchTree();
bst.insert(69)
bst.insert(45)
bst.insert(34)
bst.insert(22)
console.log("this is the represenation of bst: ")
bst.inorder();









