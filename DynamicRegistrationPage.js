
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

////--------------------------------------------------CALLBACK-------------------------------------------

//new date() will give you cuurrenty date and current timestamp
//new Date().getTime() will give you current time in millisecond,you can check it in console of browser also
/*
const posts=[
    {title:'Post one',body:'This is post one',CreatedAt:new Date().getTime()},
    {title:'Post two',body:'this is post two',CreatedAt:new Date().getTime()}
];
let intervalId;
function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval (() => {//setInterval is called 2 times when two times getPosts is called,it runs like a a eternal loop in every 1 sec
                                        // interval ,you can try on console log,by using clearInterval() we are deleting old intervalId,i.e,
                                        //when 2nd time getPosts() is called ,it clears the intervalId which was created first time.
                                        //.each 
                                        //time setInterval() is called,it create a intervalId

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
/*
function create4thPost(post,callback) {
    setTimeout(() => {
        posts.push({...post,CreatedAt: new Date().getTime()});
        callback();
    },6000);
}
create4thPost({title:'Post four',body:'this is post four'},getPosts)
*/
//delivarable 3

///-------------------PROMISE---------------------



//When you want to resolve a promise successfully,you need to call resolve,when there is some error occurs,you call reject
/*
const posts=[
    {title:'Post one',body:'This is post one'},
    {title:'Post two',body:'this is post two'}];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output+=`<li> ${post.title}</li>`;

        });
        document.body.innerHTML=output;
    },1000);
}
//getPosts();


function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error=false;
            if(!error)
            {
                resolve();
            }
            else{
                reject('Error:something went wrong');
            }
        },1000);
    });
}

//createPost({title:'Post three',body:'This is post three'}).then(getPosts).catch(err => console.log(err));

function deletePost(){
    var error=false;
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.pop();
            if(posts.length==0)
            error=true;
        
            if(!error)
            {
                resolve();
            }
            else{
                reject('Array is empty now');
            }
        },3000);
      
    });
    
}
/*

function getPosts() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let output = '';
            posts.forEach((post) => {
                output+=`<li> ${post.title}</li>`;
    
            });
            document.body.innerHTML=output;
            var error=false;
            if(!error){
                resolve();
            }
            else
            {
                reject();
            }
        });
    });

}
*/
//getPosts();
//deletePost().then(getPosts).catch(err => console.log(err));
//deletePost().then(getPosts).catch(err => console.log(err));
//deletePost().then(getPosts).catch(err => console.log(err));

////4)Try creating a post and deleting at the same time, how would you do it(Think!!!)

/*
createPost({title:'Post three',body:'This is post three'}).then(() => {
    getPosts();
    
    deletePost().then(() => {
        getPosts();
    })
    
})

*/

////let's see when we have to use lots of promises the how we can tackle it
/*
const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve,2000,'Goodbye')
);

Promise.all([promise1,promise2,promise3]).then(values => console.log(values));//you can see after 2 sec all put in console,for last promises 
//all promises need to wait,promiss.all is basically used when all the promises is resolved then it use the 'then' part.
*/


const user = {
    name:'Kaustav',
    time:'0'
}


const createPost = function() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //posts.push(post);
            const error=false;
            if(!error)
            {
                resolve(user.name);
            }
            else{
                reject('Error:something went wrong');
            }
        },1000);
    });
}

const updateLastUserActivityTime = function(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            user.time = new Date().getTime();
            resolve(user.time)
        },1000)
    })
}

Promise.all([createPost(),updateLastUserActivityTime()]).then(values => console.log(values));