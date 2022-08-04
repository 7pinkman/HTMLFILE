/*
let name1={
    fname:'Kaustav',
    lname:'Paul'
}

let name2={
    fname:'Dan',
    lname:'Thompson'
}

let printName=function(city){
    console.log(this.fname+ " "+this.lname+" from "+ city);
}
printName.call(name1,'Kolkata');//here first argument is the object name,2nd argument is the parameter we passing to the function,so
// we passed the function argument as comma separated

//in apply we pass the function parameters as a list
printName.apply(name2,['delhi']);

//bind is used to copy of a method and we can invoke it later
let print_name=printName.bind(name1,'jaipur');
console.log(print_name);
print_name();
//call method is used to invoke a function directly by passing in the reference which points to this variable in the function.
//apply() method is same as call,except it takes the function parameter in a list
//bind method is not used to invoke a method,it gives you a copy of the method which can be invoked later.

let student ={
    age:20
}
let getAge=function(){
    console.log(this.age);
}
const t=getAge.bind(student);
t();






////////CURRYING

//here we make a copy of any method and we create more method out of it by presetting some argument in the function

//using bind()

let multiply=function(x,y){
    console.log(x * y);
}

let multiplyByTwo= multiply.bind(this,2);
multiplyByTwo(3);//here x=2 and y=3

let multiplyByThree=multiply.bind(this);
multiplyByThree(3,4);//x=3,y=4

//using closure

let multiuply1=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo1=multiuply1(2);
multiplyByTwo1(3);//x=2,y=3


*/
/*
function x() {
    //let b=0;
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i * 1000);
    }
    console.log('JS');
}
x();

/*
function fun(){

    var a =30;
    
    let b = 20;
    
    let c = 30;
    {
        console.log(b);
    }
    
    }
    
    fun();
    
    //console.log(a)
    */

/*
for(let i=1;i<=5;i++)
{
    console.log(i);
}

*/
/*
function y(){
    for(var i=1;i<6;i++)
    {
        setTimeout(() => console.log(i), i*1000)
    }
    console.log('js')
}
y();
*/
/*

function y(){
    for(let i=1;i<6;i++)
    {
        setTimeout(() => console.log(i),i * 1000)

    }
    console.log('Done Coding');
}
y();
*/

/*

const name1 = (arr) =>{
    var count=0;
    return () => {
        console.log('hello '+arr[count])
        count++;
    }
}
const fun=name1(['ram','shyam'])
fun();
fun();


*/
/*

//a()

//b()



function a(){

console.log('inside a');

}



var b = function (){

console.log('inside b');

}

*/

//currying- one function return another function






///////////CURRYING
//currying basically when you have one function returning another function and we need to call both of them

/*
function a(const1)//const1=15
{
    const1=const1+20;
    return (const2) => { //const2=2
        return (const3) => const2+const1+const3; //const3==5
    }
    
   
}
//var c=a(15);
//var d=c(2);
//console.log(d(5))
//or 
console.log(a(15)(2)(5));

*/
/*
///'this' used in global scope 
this.a=3;
//console.log(window.a);

var t={
    n:5
};
console.log(this.t.n);
//this.t.n;

let s={
    p:3
};
console.log(s.p);


/////'this' used in method

this.garage= {
    table: 'garage table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};

this.garage.cleanTable();  

let johnsRoom={
    table: 'johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};

johnsRoom.cleanTable();

//this used in function

this.table='window table';

const cleanTable = function() {
    console.log(`cleaning ${this.table}`)
};

//cleanTable();//it will not work and throw a error as inside a function it does not know what 'this.table',i.e,'this' is as it is not a object 

//call function to rescue

cleanTable.call(this);//execute the function as if it's a method of 'this','this' hear is global object

*/
//'this' inside a inner function
/*
this.table='window table';
//1st way:
const cleanTable1= function(soap){
    const innerFunction = function(_soap){
        console.log(`cleaning ${this.table} using ${_soap}`);
    } 
    innerFunction.call(this,soap);
}
cleanTable1.call(this,'some soap');

*/
//2nd way:
/*
this.table='window table';
const cleanTable1= function(soap){
    var that=this;
    const innerFunction = function(_soap){
        console.log(`cleaning ${that.table} using ${_soap}`);//as innerFunction form a closer with its parent function,so it can access 'that'
    } 
    innerFunction(soap);
}
cleanTable1.call(this,'some soap');
*/


//3rd Way:
/*
this.table='window table';
const cleanTable1= function(soap){
    const innerFunction = function(_soap){
        console.log(`cleaning ${this.table} using ${_soap}`);
    } 
    innerFunction.bind(this)(soap);
}
cleanTable1.call(this,'some soap');
*/

//arrow function does not have his own 'this',so it takes the reference of 'this' from its parent

//4th way:
/*
this.table='window table';
const cleanTable1= function(soap){
    const innerFunction =(_soap) =>{
        console.log(`cleaning ${this.table} using ${_soap}`);
    }
    innerFunction(soap);
}
cleanTable1.call(this,'some soap');

*/

////'this' inside a constructor
/*
const cleanTable2= function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}

let createRoom = function(name){
    this.table= `${name}s table`;
}

const jillRoom=new createRoom('jill');
const johnsRoom=new createRoom('john');

cleanTable2.call(jillRoom,'some soap');
cleanTable2.call(johnsRoom,'some soap');
*/

///this inside a class
/*
class createRoom {
    constructor(name){
        this.table=`${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap} `);
    }
}

const jillsRoom = new createRoom('jill');
const johnsRoom =new createRoom('john');

jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some soap');
*/

/*
Problem:
Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.
Write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
Create 5 students with different names and age.
Write a function which keep track of the number of students created. Have you heard of static variables. Leverage that now.
*/
/*
class Student{
    static t=0;
    constructor(name,age,ph,marks)
    {
        Student.t++;
        this.name=name;
        this.age=age;
        this.ph=ph;
        this.marks=marks;
        //t++;
    }
    toCheckEligibility()
    {
        if(this.marks>40){
            console.log(`${this.name} is eligible for college`);
        }
        else
            console.log(`${this.name} is not eligible for college`);
    }
}


const john=new Student('john',23,'635356',45);
const lenin=new Student('lenin',43,'637856',22);
const urmi=new Student('urmi',13,'6356',5);
const sunny=new Student('sunny',26,'8885356',75);
const deil=new Student('deil',20,'688356',42);
const pili=new Student('pili',23,'635356',5);
const joy=new Student('joy',23,'44422',95);
john.toCheckEligibility();
lenin.toCheckEligibility();
urmi.toCheckEligibility();
sunny.toCheckEligibility();
deil.toCheckEligibility();
john.toCheckEligibility();
john.toCheckEligibility();
john.toCheckEligibility();

console.log(Student.t);

*/

////Fat Arrow Functions
/*
var getA = function(a){
    return a;
}
*/
///or 
/*
var getA = a => a;//both getA function is same,in fat arrow function  we dont need to  write return  keyword.

console.log(getA(1)); 
*/
//var getA = a => a*a;
//or 
/*
var getA = (a) =>{return  a*a};//when you use curly bracket then you need to write return
console.log(getA(2)); 
*/
/*
var a=4;
var getA = () =>{return  a*a};//use empty parenthesis when you dont pass argument
var getA = _ =>{return  a*a};//in place of () ,we can use _
console.log(getA(4)); 
*/



//fat arrow does not have his own 'this',so it will use its parent this
/*
var x = function(){
    this.val=1;
    setTimeout(() => {
        this.val++;
        console.log(this.val)
    },1)
   
};
var xx=new x();
*/
//there are time when you want to use function own 'this',then you should not use fat arrow


//fat function does not have function variable

//in normal function we can pass 'n' number of arguments without passing those arguments as a function parameter,like this-
/*
var x=function(){
    console.log(arguments[0]);
};
x(1,2,3);
*/
//if I replace this above function with fat arrow function
/*
var x=()=>{
    console.log(arguments[0]);
};
x(1,2,3);//it will throw a  reference error,as argument is not defined
*/

//solution of it is-
/*
var x=(...n)=>{//n means n number of arguments we are passing
    console.log(n[0]);
};
x(1,2,3)
*/


class Student{
    static t=0;
    
    constructor(name,age,ph,marks)
    {
        Student.t++;
        this.name=name;
        this.age=age;
        this.ph=ph;
        this.marks=marks;
        //t++;
    }
    

}

function toCheckEligibility(minMarks)
{
    var fixedAge=20;
    //var minMarks=40;
    return  (age) =>{
            if(age > fixedAge && this.marks > minMarks){
                return this.name;
            }
            else
                return ;
    }
}

var minMarks=40;
const john=new Student('john',23,'635356',15);
const lenin=new Student('lenin',43,'637856',22);
const urmi=new Student('urmi',13,'6356',5);
const sunny=new Student('sunny',26,'8885356',75);
const deil=new Student('deil',20,'688356',42);
const pili=new Student('pili',23,'635356',5);
const joy=new Student('joy',23,'44422',95);

const a1=toCheckEligibility.call(john,minMarks);
console.log(a1(22));

const a2=toCheckEligibility.call(lenin,minMarks);
console.log(a2(12));


const a3=toCheckEligibility.call(urmi,minMarks);
console.log(a3(24));


const a4=toCheckEligibility.call(sunny,minMarks);
console.log(a4(19));


const a5=toCheckEligibility.call(deil,minMarks);
console.log(a5(27));


const a6=toCheckEligibility.call(pili,minMarks);
console.log(a6(18));

const a7=toCheckEligibility.call(joy,minMarks);
console.log(a7(26));



console.log(Student.t);
