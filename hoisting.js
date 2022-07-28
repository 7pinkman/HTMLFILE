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


