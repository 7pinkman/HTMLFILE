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

insert(5);
insert(3);
insert(2);
insert(4);
insert(7);
insert(6);
insert(8);
inorder();
