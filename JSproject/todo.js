const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODO_LS = "to_do"
let todo = [];

function saveTodo () {
    localStorage.setItem(TODO_LS, JSON.stringify(todo));
}

function deleteTodo (event) {
    const btn = event.target;
    const delLi = btn.parentNode;
    todoList.removeChild(delLi); 
    const cleanTodo = todo.filter(function (todo){
        return todo.id !== parseInt(delLi.id);
    });
    todo = cleanTodo;
    saveTodo();
}

function writeTodo (text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todo.length+1;

    delBtn.innerText= "❌";
    delBtn.addEventListener("click",deleteTodo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id: newId
    };
    todo.push(todoObj);
    saveTodo();
}  

function submitEvent (event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    writeTodo(currentValue);
    todoInput.value = "";
}

function getTodo() {
    const loadedTodo = localStorage.getItem(TODO_LS);
    if(loadedTodo !== null){
        const parsedTodo = JSON.parse(loadedTodo);
        parsedTodo.forEach(function (todo) {
            writeTodo(todo.text);
        });
    }
    else{
        
    }
}

function init() {
    getTodo();
    todoForm.addEventListener("submit",submitEvent)

}

init();