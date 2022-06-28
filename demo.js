
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
submit.value='SEND';

//var item= document.querySelector('.list-group-item');
//item.style.color='red';//by default it change the first li item

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';//last li text is changed

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='yellow';//it changes the 2nd element of li

var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
thirdItem.style.color='#fff';
*/
//  QUERYSELECTORALL

var titles = document.querySelectorAll('.title');
//console.log(titles);//two items we have here

titles[0].textContent = 'Hello';//it changes the first element

var odd= document.querySelectorAll('li:nth-child(odd)');//it takes the odd li
var even=document.querySelectorAll('li:nth-child(even)');//it takes the even li

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}

var secondChild=document.querySelectorAll('.list-group-item');
console.log(secondChild);
secondChild[1].style.color="red";

/*var secondChild=document.querySelectorAll('li:nth-child(2)');
console.log(secondChild);*/

















