const nameForm = document.querySelector(".js-userForm");
const nameInput = nameForm.querySelector("input");
const span = document.querySelector(".js-gretting");
const secondeForm = document.querySelector(".js-toDoForm");
const SHOWING = "showing";
const CURRENTUSER = "currentUser";

function handleSubmit(event) {
    event.preventDefault();
    const userValue = nameInput.value
    localStorage.setItem(CURRENTUSER, userValue);
    paintName(userValue);
    secondeForm.classList.add("showing");
}

function askForName() {
    nameForm.classList.add(SHOWING);
    nameForm.addEventListener("submit", handleSubmit);
}

function paintName(text) {
    nameForm.classList.remove(SHOWING);
    span.classList.add(SHOWING);
    span.innerHTML = `Hello ${text}`
}

function loadname() {
    const currentUser = localStorage.getItem(CURRENTUSER);
    if (currentUser === null) {
        askForName();
    } else {
        paintName(currentUser);
        secondeForm.classList.add("showing")
    }
}

function init() {
    loadname();
}

init();