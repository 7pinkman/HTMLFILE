var submitButton=document.getElementById('submit');
/*document.addEventListener("DOMContentLoaded", () => {
    localStorage.getItem();
});*/




window.addEventListener("DOMContentLoaded", () => {
    /*
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        console.log(userDetailsString);
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
    */

    axios.get("https://crudcrud.com/api/9e283281ad7146afb6b312ccad75f6f3/appointmentData")
            .then((responce) => {
                //console.log(responce);//you can see its a array of objects
                for(var i=0; i< responce.data.length ; i++){
                    showNewUserOnScreen(responce.data[i]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    //after calling get(),let's say we  got responce after 1 min and in our application 4 get call is there,so is it like 4 min wasted?No,as js waits
    //for none,its a async call,so after 1 sec the responce came in microstack queue and then event loop do its job,same old concept.
    //if we write  const data =axios.get("https://crudcrud.com/api/9e283281ad7146afb6b312ccad75f6f3/appointmentData")
    //and do console.log(data),then in console we only got promise,we did not got any data.
});
    

function showNewUserOnScreen(user)
{
    const parentNode=document.getElementById('listofpeople');
    const childHtml=`<li id = ${user._id}> ${user.nameId} - ${user.emailId}
                        <button onclick=deleteUser('${user._id}') > Delete User </button>
                        <button onclick=editUser('${user.emailId}','${user.nameId}') >Edit User </button>
                        </li>`;
    parentNode.innerHTML=parentNode.innerHTML+childHtml;
                        
}

function deleteUser(id)
{
    axios.delete(`https://crudcrud.com/api/9e283281ad7146afb6b312ccad75f6f3/appointmentData/${id}`)
    .then((responce) => {
        console.log(responce);
        removeFromScreen(id);
    })
    .then((error) => {
        console.log(error);
    })
    //localStorage.removeItem(emailId);
    

}
function removeFromScreen(id)
{
    const parentNode=document.getElementById('listofpeople');
    const childNode=document.getElementById(id);
    parentNode.removeChild(childNode);
}

function editUser(emailId,nameId)
{
    //console.log(JSON.parse(localStorage.getItem(emailId)).nameId);
    localStorage.removeItem(emailId);
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
        //localStorage.setItem(emailId , JSON.stringify(obj));
        //console.log(nameId);
       // addNewLineElement(obj);
       axios.post("https://crudcrud.com/api/9e283281ad7146afb6b312ccad75f6f3/appointmentData",obj)
       .then((responce) => { 
        console.log(responce);//check the responce in console
        showNewUserOnScreen(responce.data);
       })
       .catch((err) => {
        console.log(err);
       })
       //showNewUserOnScreen(obj);
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