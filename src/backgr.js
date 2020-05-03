const body = document.querySelector("body");
const IMG_NUM = 4;


function paintImage(imageNumber) {
    const image = new Image();
    image.src = `images/${imageNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image)
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();