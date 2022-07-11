var submitButton=document.getElementById('submit');
/*document.addEventListener("DOMContentLoaded", () => {
    localStorage.getItem();
});*/




if(document.readyState === "loading"){
    var keys=Object.keys(localStorage);//taking out all the keys that are there in the local storage
    var i=keys.length;
    Object.keys(localStorage).forEach((key) => {
        if(key.match(/user/g)){
            var stringDetailOfPeople = localStorage.getItem(key);
            console.log(stringDetailOfPeople);
            var ObjDetailOfPeople= JSON.parse(stringDetailOfPeople);
            addNewLineElement(ObjDetailOfPeople);
        }
    });

}
submitButton.addEventListener("click", (e) => {

    e.preventDefault();
    var nameId=document.getElementById('name').value;
    var emailId=document.getElementById('email').value;

    if(nameId.length > 0 && emailId.length >0 )
    {
        const obj={
            nameId:nameId,
            emailId:emailId
        };
        localStorage.setItem('user'+emailId , JSON.stringify(obj));
        //console.log(nameId);
        addNewLineElement(obj);
    }
    //console.log(nameId.value);
    
});

function addNewLineElement(obj)
{
    const ul=document.getElementById('listofpeople');
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(obj.nameId + '    '+obj.emailId));
    ul.appendChild(li);
   // console.log(obj.nameId + '    '+obj.emailId);

}