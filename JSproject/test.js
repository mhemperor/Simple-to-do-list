const clockDiv = document.querySelector(".js-clock"),
    clockTitle = clockDiv.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds= date.getSeconds();
    clockTitle.innerText=`${hours}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`;


}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();