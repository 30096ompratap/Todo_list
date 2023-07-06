const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let l = document.createElement("li");
        l.innerHTML = inputBox.value;
        listContainer.appendChild(l);
        let span = document.createElement("span");
        span.innerHTML = "&#x274C";
        l.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();