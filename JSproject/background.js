const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage (imgNum){
    const image = new Image();
    image.src = `images/${imgNum+1}.jpg`;
    image.classList.add("bgImg");
    body.appendChild(image);
}

function genRand () {
    const num = Math.floor(Math.random() * IMG_NUMBER);
    return num;
}

function init() {
    const randNum = genRand();
    paintImage(randNum);
}

init();