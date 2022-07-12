var submitButton=document.getElementById('submit');
/*document.addEventListener("DOMContentLoaded", () => {
    localStorage.getItem();
});*/




window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        console.log(userDetailsString);
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
});

function showNewUserOnScreen(user)
{
    const parentNode=document.getElementById('listofpeople');
    const childHtml=`<li id = ${user.emailId}> ${user.nameId} - ${user.emailId}
                        <button onclick=deleteUser('${user.emailId}') > Delete User </button>
                        <button onclick=editUser('${user.emailId}','${user.nameId}') >Edit User </button>
                        </li>`;
    parentNode.innerHTML=parentNode.innerHTML+childHtml;
                        
}

function deleteUser(emailId)
{
    localStorage.removeItem(emailId);
    removeFromScreen(emailId);
}
function removeFromScreen(emailId)
{
    const parentNode=document.getElementById('listofpeople');
    const childNode=document.getElementById(emailId);
    parentNode.removeChild(childNode);
}

function editUser(emailId,nameId)
{
    //console.log(JSON.parse(localStorage.getItem(emailId)).nameId);
    document.getElementById('name').value=nameId;
    document.getElementById('email').value=emailId;
    const parentNode=document.getElementById('listofpeople');
    const childNode=document.getElementById(emailId);
    parentNode.removeChild(childNode);
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
        localStorage.setItem(emailId , JSON.stringify(obj));
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