const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoUl = document.querySelector(".js-ul");

let toDos = [];

function handleClick(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoUl.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        //console.log(toDo.id, li.id)
        return toDo.id !== li.id;
    });
    //console.log(cleanToDos)
    toDos = cleanToDos;
    localStorage.setItem("toDoList", JSON.stringify(toDos));
}

function createList(text) {
    const li = document.createElement("li")
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = `${toDos.length + 1}`
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", handleClick);
    span.innerHTML = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoUl.appendChild(li)
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    localStorage.setItem("toDoList", JSON.stringify(toDos));
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value = "";
    createList(currentValue);
}

function loadTodo() {
    const check = localStorage.getItem("toDoList")
    if (check !== null) {
        const parsetodos = JSON.parse(check);
        parsetodos.forEach(function (toDo) {
            createList(toDo.text)
        })
    }
}

function init() {
    loadTodo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();