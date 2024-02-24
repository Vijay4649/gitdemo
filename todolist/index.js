const inputBox=document.getElementById("input_box");
const listContainer=document.getElementById("list_container");


// this funcion get excuted when we click on add button 
function addTask(){
    if(inputBox.value===''){
        alert("you must add task first");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="&#x274C";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

//  now we add click event on list so that it will chekced 

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

//  now we store data in browser 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showtask();