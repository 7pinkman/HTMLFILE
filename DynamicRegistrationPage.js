
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

/*
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

Promise.all([createPost(),updateLastUserActivityTime()]).then(values => console.log(values));//You should pass the promise returned from that function
//promise are better than callback as it makes the code simple and easy to understand,and later point of time if we want to add any property 
//then promises help us to write more efficient code than callback.

*/
////////////////////////////////------ASYNC WAIT---------------///////////////////

/*
console.log('person1 : shows ticket');

const promisewifeBringingTickets = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket');
    },3000)
});

const getPopcorn = promisewifeBringingTickets.then((t) =>{
    console.log('wife: i have the '+t);
    console.log('husband: we should go in');
    console.log('wife: let"s eat popcorn');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) =>{
    console.log('husband: ok!  ');
    console.log('wife: no i need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`));
});

const getColdDriks = getButter.then((t) => {
    console.log('husband:I want cold drinks')
    return new Promise((resolve,reject) => resolve(`${t} cold Drinks`))
})

getColdDriks.then((t) => console.log(t));

console.log('person2 : shows ticket')

//above code can be written using async by more efficient wahy

/*
We all know that JavaScript is Synchronous in nature which means that it has an event loop that allows you to queue up an action that won’t take place until the 
loop is available sometime after the code that queued the action has finished executing.
But there’s a lot of functionalities in our program which makes our code Asynchronous and one of them is the Async/Await functionality. Async/Await is the 
extension of promises which we get as a support in the language. 
Async: It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. 
It operates asynchronously via the event-loop. Async functions will always return a value. It makes sure that a promise is returned and 
if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result.
It only makes the async block wait.


*/
/*
const preMovie = async() => 'preMovie'//unlike normal function async function always return a promise,by using async keyword we can make
// a async function,the function return 'preMovie'
preMovie().then((m) => console.log(m));
*/

/*

console.log('person1 : shows ticket');

const preMovie = async() => {
    const promisewifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));

    const addButter = new Promise((resolve,reject) => resolve(`butter`));

    const addColdDrinks = new Promise((resolve,reject) => resolve('cold Drinks'));

    let ticket = await promisewifeBringingTickets;//whatever resolve by promisewifeBringingTickets,we will get here
    //await function only works inside async function
    //inside the async function you can tell the promise execution to wait for the next execution to happen,wait works by using awaits keyword   
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: let"s eat popcorn');

    let popcorn=await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in  ');
    console.log('wife: no i need butter on my popcorn');
    
    let butter = await addButter;

    console.log(`husband: i got some ${butter} on popcorn `);
    console.log('husband: we should go in  ');

    let coldDrinks = await addColdDrinks;
    lconsole.log('husband:I want cold drinks');

    return ticket;

    
}

preMovie().then((m) => console.log(`person2 : shows ${m}`));

console.log('person3 : shows ticket');



*/

//when no dependency is present for all the promises,and one at a time we need to execute all the promises

/*
const preMovie = async() => {
    const promisewifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));

    const getCandy = new Promise((resolve,reject) => resolve(`candy`));

    const getCoke = new Promise((resolve,reject) => resolve('coke'));

    let ticket= await promisewifeBringingTickets;

    let [popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke]);//as it return 3 value,so we need a array to store it

    console.log(`${popcorn} ,${candy} ,${coke}`);



    return ticket;

    
}

preMovie().then((m) => console.log(`person3 : shows ${m}`));

*/

//let's say there is some error happened when calling the promises,then in async wait we can't catch error 
//like the previous way,so here we can use normal try catch block to handle error

const preMovie = async() => {
    const promisewifeBringingTickets = new Promise((resolve,reject) => {
        setTimeout(() => reject('ticket'), 3000);
    });

    let ticket;

    try{
        ticket=await promisewifeBringingTickets;
    }
    catch(e){
        ticket='sad face';
    }



    return ticket;
}
preMovie().then((m) => console.log(`person3 : shows ${m}`));

//////////////////////////////////////////////////////////////////////////////
/*
callback vs promise vs async Wait

in callback we need to disturb other function,this problem is solved by promises.
async wait is better than promises as async wait use promises in background,basically async wait is used to do better way of writing code.
*/