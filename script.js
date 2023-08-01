const inputArea = document.getElementById ("input-area");
const listContainer = document.getElementById ("list-container");

function addTask(){
    if (inputArea.value === ''){
        alert("You must add your task!!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }
    inputArea.value = "";
    keepData();

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        keepData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        keepData()
    }
}, false);

function keepData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()