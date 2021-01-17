const form = document.querySelector(".js-form");
  input = form.querySelector("input")
  greeting = document.querySelector(".js-greeting");

const USER = "currentUser",
    SHOWING_CN ="showing";

function submitEvent (event) {
    event.preventDefault();
    const currentValue = input.value;
    writeGreeting(currentValue);
    saveName(currentValue);
}

function saveName(text) {
    localStorage.setItem(USER, text);

}

function askName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", submitEvent);
}

function writeGreeting (text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function getName () {
    const currentUser = localStorage.getItem(USER);
    if (currentUser === null) {
        askName();
    }
    else {
        writeGreeting(currentUser);
    }
}

function init(){
    getName();

}

init();