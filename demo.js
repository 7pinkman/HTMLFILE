
//document.title='kp123';
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.innerText='good';//it does  consider style tag and do not diplay text under span 
//headerTitle.textContent='ola';//it does not consider style tag and  diplay text under span 
//headerTitle.innerHTML='<h3>hi</h3>';
//headerTitle.style.borderBottom='solid 3px #000';
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent='hi';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor ='yellow';
//now if want to chanmge the background of all items,then its show a error.because items is a htmlCollection or array,to change the content 
//we need to loop through every element.
//items.style.backgroundColor='#f4f4f4'; it will through a error
/*for(var i=0; i< items.length ; i++)
{
    items[i].style.backgroundColor='#f4f4f4';
}
*/
//items[2].style.backgroundColor='green';

/*for(var i=0; i< items.length ; i++)
{
    items[i].style.fontWeight='bold';
}*/
//var li=document.getElementsByTagName('li');
//console.log(li);
/*for(let i=0;i< li.length ;i++)
{
    li[i].style.backgroundColor='red';
}*/

/////////////////////////// querySelector
/*
var items=document.querySelector('.list-group-item');//by default it takes the first li text,but it does not throw a error like getElementsByClassName.
//console.log(items);
items.style.backgroundColor='#ccc'; //by default it changes the first li text

var header=document.querySelector('#main-header');
header.style.borderBottom= ' solid 7px #111';

var input = document.querySelector('input');
input.value='kaustav paul';//it only change the first i/p

var submit= document.querySelector('input[type="submit"]');
submit.value='SEND'

//var item= document.querySelector('.list-group-item');
//item.style.color='red';//by default it change the first li item

var lastItem = document.querySelector('.list-group-item:last-child');
console.log(lastItem);
lastItem.style.color='blue';//last li text is changed

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='yellow';//it changes the 2nd element of li

var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
thirdItem.style.color='#fff';

//  QUERYSELECTORALL

var titles = document.querySelectorAll('.title');// as titles is a nodelist  we can use array fun to it.
//console.log(titles);//two items we have here

titles[0].textContent = 'Hello';//it changes the first element

var odd= document.querySelectorAll('li:nth-child(odd)');//it takes the odd li
var even=document.querySelectorAll('li:nth-child(even)');//it takes the even li

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}

var secondChild=document.querySelectorAll('.list-group-item');
//console.log(secondChild);
secondChild[1].style.color="red";

/*var secondChild=document.querySelectorAll('li:nth-child(2)');
console.log(secondChild);//its a nodelist
secondChild.style.color='blue';//it will not work as secondChild is a nodelist,we need to do upper method to change it*/

//when we have nodelist then directly we cant directly manupulate,we need manupulate by indexwise



//   TRAVERSING DOM   //

var itemList = document.querySelector('#items');

//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);


//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);


// parentNode and parentElement is almost same thing.

// childNodes

//console.log(itemList.childNodes);//here with the child item we also got text like blank space
//like that-
/*
NodeList(9) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text]
0: text
1: li.list-group-item
2: text
3: li.list-group-item
4: text
5: li.list-group-item
6: text
7: li.list-group-item
8: text
length: 9
[[Prototype]]: NodeList
*/


//it's not recommened,in place of that we can use children.
//  children

//console.log(itemList.children);//we only got li items
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor ='yellow';


//  firstChild

//console.log(itemList.firstChild);//it returns the text node also which we saw in childNode,it kinda useless



//  firstElementChild

//console.log(itemList.firstElementChild);//it returns the first li tag 

//itemList.firstElementChild.textContent='HELLLLLOOOO';




//  lastChild

//console.log(itemList.lastChild);//it returns the text node also which we saw in childNode,it kinda useless



//  lastElementChild

//console.log(itemList.lastElementChild);//it returns the last li tag 

//itemList.lastElementChild.textContent='HELLLLLOOOO';

//nextSibling
//console.log(itemList.nextSibling);//it returns the text node also which we saw in childNode
//nextElementSibling
//console.log(itemList.nextElementSibling);//it returns the next sibling element


//previousSibling
//console.log(itemList.previousSibling);//it returns the text node also which we saw in childNode
//previousElementSibling
//console.log(itemList.previousElementSibling);//it returns the previous sibling element
//itemList.previousElementSibling.style.color= 'green';


//createElement

//create div
var newDiv=document.createElement('div');

// Add class
newDiv.className='hello';

//add id

newDiv.id = 'hello1';

//add attr
newDiv.setAttribute('title','Hello Div');

//create text node
var newDivText= document.createTextNode('hello world');

// add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newDiv,h1);//this methopd put the newDiv before h1
/*
var container=document.querySelector('.list-group');
var h1=document.querySelector('.list-group-item');
console.log(container);
container.insertBefore(newDiv,h1);

*/




