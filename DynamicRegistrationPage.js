
//In JS push=> insert a elemet in an array
//shift=>pop one element from the front of a array,like first in first out
//pop=> pop one elemet from backward of a array,like first in last out
//Implement a Stack
/*
class Stack {
    constructor()
    {
        this.items = [];
    }
    push(element)
    {
        this.items.push(element);
    }
    pop()
    {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    peek()
    {
        return this.items[this.items.length - 1];
    }
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
    

}


var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

*/
//--------------------------------------------------------------------------------------------------------------------------------------

///Implement a queue
/*
class Queue{
    constructor(){
        this.queue=[];
        this.minpos=0;
        this.maxpos=0;
    }
    push(val){
        this.queue.push(val);
        this.maxpos=this.maxpos+1
    }
    displayQueue(){
        console.log('queue--->'+this.queue);
        console.log('maxpos '+this.maxpos);
        console.log('minpos'+this.minpos);

    }
    pop(){
        if(this.minpos<this.maxpos)
        {
            const valueToPop=this.queue[this.minpos];
            this.queue[this.minpos]=undefined;
            this.minpos=this.minpos+1;
            return valueToPop;

        }
        else{

            return 'Array is empty';
        }
    }
}

const q1 = new Queue();
q1.displayQueue();
q1.push(1);
q1.push(2);
q1.displayQueue();
console.log(q1.pop());
console.log(q1.pop());
console.log(q1.pop());

*/

/////Implement stack using queue

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
/*
class QueueStack{
    constructor(){
        this.q1 = [];
        this.q2=[];
        this.minpos=0;
        this.maxpos=0;
    }
   
    
    //Function to push an element into stack using two queues.
    push(x){
        // code here
        this.q1.push(x);
    }
    
   
    //Function to pop an element from stack using two queues. 
    pop(){
        // code here
        
        var pop1;
        if(this.q1.length!=0)
        {
            while(this.q1.length!=1)
            {
                this.q2.push(this.q1.shift());
            }
        
            pop1=this.q1.shift();
            while(this.q2.length!=0){
                this.q1.push(this.q2.shift());
            }
        }
        return pop1;
    }
    
    displayQueue(){
        console.log('queue--->'+this.q1);

    }
    
}
var qs=new QueueStack();
qs.push(1);
qs.push(2);
qs.push(3);
qs.push(4);
qs.displayQueue();
console.log(qs.pop());
*/

////---------------------------------------------------------------------------------------------

//new date() will give you cuurrenty date and current timestamp
//new Date().getTime() will give you current time in millisecond,you can check it in console of browser also
const posts=[
    {title:'Post one',body:'This is post one',CreatedAt:new Date().getTime()},
    {title:'Post two',body:'this is post two',CreatedAt:new Date().getTime()}
];
let intervalId;
function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval (() => {//setInterval is called 2 times when two times 
        let output = '';
        posts.forEach((post) => {
            output+=`<li>${post.title} - last updated ${(new Date().getTime() - post.CreatedAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML=output;
    },1000);
    
}

function createPost(post,callback){
    setTimeout(() => {
        posts.push({...post,CreatedAt: new Date().getTime()});//spread operator
        callback();

    },2000);
}

createPost({title:'Post three',body:'this is post three'},getPosts);//getpost is a callback function here

//delivarable 2
/*
function create4thPost(post,callback) {
   callback(post,getPosts);
}
*/

function create4thPost(post,callback) {
    setTimeout(() => {
        posts.push({...post,CreatedAt: new Date().getTime()});
        callback();
    },6000);
}
create4thPost({title:'Post four',body:'this is post four'},getPosts)

//delivarable 3

