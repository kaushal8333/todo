const todoList=document.querySelector(".todo-list");
todoList.addEventListener("click",delCheck);
const todoButton=document.querySelector(".todo-button");
todoButton.addEventListener("click",addTodo);
function addTodo(event){
    event.preventDefault();
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo=document.createElement("li");
    todoInput=document.getElementById("todoInput")
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check-circle"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value="";
}
function delCheck(e){
    const item=e.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.addEventListener("click",function(){
            console.log("Enteredntrash button");
            todo.remove();
        })
    }
    if(item.classList[0]==="complete-btn"){
        console.log("Entered complete button");
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}