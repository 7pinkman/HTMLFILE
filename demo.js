
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

//when we have object type  nodelist then directly we can directly manupulate,we  manupulate by indexwise
//if we have a object type htmlCollection then directly we can't manupulate,first we need to convert it to arraytype,then we  can do array operations.

//   TRAVERSING DOM   //

//var itemList = document.querySelector('#items');

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
/*
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


//new html is added

 var form=document.getElementById('addForm');
 var itemList=document.getElementById('items');

 //form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);

// Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem=document.getElementById('item').value;

    var newItemArray=newItem.split('.');
    //console.log(newItemArray);
    var newItemName=newItemArray[0];
    var newItemDesc=newItemArray[1];
    
    //console.log(newConcatItem);
    var div=document.createElement('div');
    div.appendChild(document.createTextNode(newItemDesc));
    
    // Create a new li element
    var li=document.createElement('li');

    //Add a class
    li.className= 'list-group-item';


    //Add text node with input value
    li.appendChild(document.createTextNode(newItemName));
    li.appendChild(div);

    // Create delete button element
    var deleteBtn= document.createElement('button');

    //Add classes to del button
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));


    //create a edit button
    var editBtn=document.createElement('button');

    //add a class
    editBtn.className='btn btn-danger btn-sm float-right edit mr-1';//mr -1 give space b/w two button

    //append text node
    editBtn.appendChild(document.createTextNode('E'));

    //apped del and edit button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);



    //append li to ul
    itemList.appendChild(li);

}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//when we have object type  nodelist then directly we can directly manupulate,we  manupulate by indexwise
//if we have a object type htmlCollection then directly we can't manupulate,first we need to convert it to arraytype,then we  can do array operations.


//Filter Items

var filter=document.getElementById('filter');

filter.addEventListener('keyup',filterItems);


function filterItems(e){

    //convert text to lowercase
    var text=e.target.value.toLowerCase();

    //get lis
    var items=document.getElementsByTagName('li');

    //console.log(items);
    //as items is HTMLCOLLECTION,so we are converting it array to do the operations

    //Convert to an array
    Array.from(items).forEach(function(item){
        console.log(item);
        var itemName=item.firstChild.textContent;
        var itemdesc=item.children[0].textContent;

        console.log(itemName);
        console.log(itemdesc);
        if(itemName.toLowerCase().indexOf(text) != -1 || itemdesc.toLowerCase().indexOf(text) != -1){//if both of them does not match then it returns -1
            item.style.display='block';
        }else{
            item.style.display='none';
        }

    })


}




