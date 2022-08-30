/*
var submitExpenceId=document.getElementById('addExpences');
submitExpenceId.addEventListener('click', (e) => {
    e.preventDefault();
    var expenceId = document.getElementById('expence').value;
    var descId = document.getElementById('desc').value;
    var typeId = document.getElementById('type').value;
    console.log(typeId);
    //if(expenceId.length > 0 && descId.length > 0 && typeId.length >0)
    //{
        const obj = {
            expenceId:expenceId,
            descId:descId,
            typeId:typeId
        };
        localStorage.setItem(descId,JSON.stringify(obj));
        showNewUserOnScreen(obj);
    //}
});

function showNewUserOnScreen(obj)
{
    var parentNode=document.getElementById('listofpeople');
    var childHtml=`<li id =${obj.descId}> ${obj.expenceId} - ${obj.descId} - ${obj.typeId}
                    <button onclick = editUser('${obj.expenceId}','${obj.descId}','${obj.typeId}') > Edit Expences  </button>
                    <button onclick = deleteUser('${obj.descId}') > Delete Expences </button>
                    </li> 
                    `;
    parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

function editUser(expenceId,descId,typeId)
{
    
    document.getElementById('expence').value = expenceId;
    document.getElementById('desc').value = descId;
    document.getElementById('type').value = typeId;
    localStorage.removeItem(descId);
    const parentNode = document.getElementById('listofpeople');
    const childNode = document.getElementById(descId);
    parentNode.removeChild(childNode);

}

function deleteUser(descId)
{
    localStorage.removeItem(descId);
    const parentNode = document.getElementById('listofpeople');
    const childNode = document.getElementById(descId);
    parentNode.removeChild(childNode);
}

window.addEventListener('DOMContentLoaded', () => {
    const localStorageObj = localStorage;
    const localstoragekeys = Object.keys(localStorageObj);
    if(localstoragekeys.length != 0 ){
        for( var i =0 ;i< localstoragekeys.length ; i++)
        {
            const key = localstoragekeys[i];
            const localObjString = localStorageObj[key];
            const localObj = JSON.parse(localObjString);
            showNewUserOnScreen(localObj);
        }
    }
});

*/


/////////USING API CALL

var submitExpenceId=document.getElementById('addExpences');
submitExpenceId.addEventListener('click', (e) => {
    e.preventDefault();
    var expenceId = document.getElementById('expence').value;
    var descId = document.getElementById('desc').value;
    var typeId = document.getElementById('type').value;
    console.log(typeId);
    if(expenceId.length > 0 && descId.length > 0 && typeId.length >0)
    {
        const obj = {
            expenceId:expenceId,
            descId:descId,
            typeId:typeId
        };
        axios.post("https://crudcrud.com/api/9e283281ad7146afb6b312ccad75f6f3/appointmentData",obj)
        .then((response) => {
            showNewUserOnScreen(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
        
    }
});

function showNewUserOnScreen(obj)
{
    var parentNode=document.getElementById('listofpeople');
    var childHtml=`<li id =${obj._id}> ${obj.expenceId} - ${obj.descId} - ${obj.typeId}
                    <button onclick = editUser('${obj._id}','${obj.expenceId}','${obj.descId}','${obj.typeId}') > Edit Expences  </button>
                    <button onclick = deleteUser('${obj._id}') > Delete Expences </button>
                    </li> 
                    `;
    parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

function editUser(p_id,expenceId,descId,typeId)
{
    
    document.getElementById('expence').value = expenceId;
    document.getElementById('desc').value = descId;
    document.getElementById('type').value = typeId;
    axios.delete(`https://crudcrud.com/api/9e283281ad7146afb6b312ccad75f6f3/appointmentData/${p_id}`)
    .then((responce) => {
        const parentNode = document.getElementById('listofpeople');
        const childNode = document.getElementById(p_id);
        parentNode.removeChild(childNode);
    })



}

function deleteUser(descId)
{
    axios.delete(`https://crudcrud.com/api/9e283281ad7146afb6b312ccad75f6f3/appointmentData/${descId}`)
    .then((responce) => {
        const parentNode = document.getElementById('listofpeople');
        const childNode = document.getElementById(descId);
        parentNode.removeChild(childNode);
    })
    
}

window.addEventListener('DOMContentLoaded', () => {
    const localStorageObj = localStorage;
    const localstoragekeys = Object.keys(localStorageObj);
    if(localstoragekeys.length != 0 ){
        for( var i =0 ;i< localstoragekeys.length ; i++)
        {
            const key = localstoragekeys[i];
            const localObjString = localStorageObj[key];
            const localObj = JSON.parse(localObjString);
            showNewUserOnScreen(localObj);
        }
    }

    axios.get("https://crudcrud.com/api/9e283281ad7146afb6b312ccad75f6f3/appointmentData")
    .then((response) => {
        for(var i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i]);
        }
    })
});
