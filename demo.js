
//document.title='kp123';
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.innerText='good';//it does  consider style tag and do not diplay text under span 
//headerTitle.textContent='ola';//it does not consider style tag and  diplay text under span 
//headerTitle.innerHTML='<h3>hi</h3>';
//headerTitle.style.borderBottom='solid 3px #000';
var items=document.getElementsByClassName('list-group-item');
console.log(items);
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
items[2].style.backgroundColor='green';

for(var i=0; i< items.length ; i++)
{
    items[i].style.fontWeight='bold';
}
