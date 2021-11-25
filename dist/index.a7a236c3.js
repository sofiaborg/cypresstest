let taskOne = new Todos("jump");
let taskTwo = new Todos("run");
let taskThree = new Todos("climb");
window.onload = function() {
    // lägger till en input-box
    document.getElementById("input");
    let newTodoBtn = document.getElementById("newTodoBtn");
    newTodoBtn.addEventListener("click", handleNewTask);
    newTodoBtn.className = "newTodoBtnStyle";
    //läggger till sort och sort-funktion
    let sortTasks = document.createElement("span");
    sortTasks.title = "Sort by task status";
    sortTasks.className = "fas fa-sort";
    document.getElementById("form").appendChild(sortTasks);
    sortTasks.addEventListener("click", handleSort);
    printTodos();
};
let listItem = [
    taskOne,
    taskTwo,
    taskThree
];
let ulList = document.createElement("ul");
ulList.className = "ulStyle";
let container = document.getElementById("task-container");
let completeContainer = document.getElementById("complete-container");
//en funktion för att skriva ut array
function printTodos() {
    //gör innehållet tomt innan loopen för att inte allt ska skrivas ut dubbelt
    ulList.innerHTML = "";
    for(let i = 0; i < listItem.length; i++){
        let li = document.createElement("li");
        li.innerHTML = listItem[i].uppgift;
        li.className = "liStyle";
        //skapar en checkbox för att klarmarkera tasks
        let completeBtn = document.createElement("input");
        completeBtn.type = "checkbox";
        completeBtn.className = "checkboxStyle";
        //skapar en remove-knapp för att ta bort tasks
        let removeBtn = document.createElement("p");
        removeBtn.className = "fas fa-times";
        // skapar en div som jag lägger knapparna i
        let btnDiv = document.createElement("div");
        btnDiv.appendChild(completeBtn);
        btnDiv.appendChild(removeBtn);
        // lägger in knapp-divarna ihop med li-elementen
        li.appendChild(btnDiv);
        //om task är markerad, låt den vara markerad och lägg till class "markcomplete"
        if (listItem[i].status == true) {
            li.className = "markcomplete";
            completeBtn.checked = true;
        }
        //skapa klickhändelse när man klickar i checkbox
        completeBtn.addEventListener("click", ()=>{
            btnClick(i);
        });
        //skapa klickhändelse när man klickar på remove-knapp
        removeBtn.addEventListener("click", ()=>{
            remove(i);
        });
        ulList.appendChild(li);
    } //for-loop slutar
    container.appendChild(ulList);
}
function btnClick(i) {
    listItem[i].status = !listItem[i].status;
    if (listItem[i].status == true) this.checked = true;
    printTodos();
}
function remove(i) {
    listItem.splice(i, 1);
    printTodos();
}
function handleNewTask() {
    event.preventDefault();
    if (input.value.trim() != "") {
        let newTask = new Todos(input.value);
        listItem.push(newTask);
        input.value = "";
        printTodos();
    }
}
function handleSort() {
    listItem.sort(function(a, b) {
        return a.status - b.status;
    });
    printTodos();
}

//# sourceMappingURL=index.a7a236c3.js.map
