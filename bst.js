
class Node {
    constructor(item){
        this.key = item;
        this.left=null;
        this.right=null;
    }
}
var root=null;

function insert(key){
    root=insertRec(root,key);
}
function insertRec(root,key){
    if(root ==null){
        root=new Node(key);
        return root;

    }

    if(key<root.key){
        root.left=insertRec(root.left,key);
    }
    else if(key>root.key)
        root.right=insertRec(root.right,key);

    return root;
}

function inorder(){
    inorderRec(root);
}

function inorderRec(root){
    if(root!=null){
        inorderRec(root.left);
        console.log(root.key);
        inorderRec(root.right);
    }
}

function preorder(){
    inorderRec(root);
}

function preorderRec(root){
    if(root!=null){
        console.log(root.key);
        preorderRec(root.left);
        preorderRec(root.right);
    }
}

insert(5);
insert(3);
insert(2);
insert(4);
insert(7);
insert(6);
insert(8);

//inorder();
preorder();






/*

class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
 
var root = null;
function iterativePreorder(node){

    if(node == null){
        return;
    }
    var nodestack = [];
    nodestack.push(node);
    while(nodestack.length > 0){
        var mynode=nodestack[nodestack.length -1];
        console.log(mynode.data);
        nodestack.pop();
        if(mynode.right != null)
        {
            nodestack.push(mynode.right);
        }
        if(mynode.left != null)
        {
            nodestack.push(mynode.left);
        }
    }
}

root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);
 
iterativePreorder(root);


//inorder();
//iterativePreorder(root);
*/