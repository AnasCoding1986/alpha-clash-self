function play() {
    addClass("start", "hidden");
    removeClass("play", "hidden");
    continueGame();
}

function continueGame() {
    generateRandomAlphabet();
    setBackgroundColor();
}

document.addEventListener('keyup', function matchingKey(e) {
    let pressedKey = e.key;
    if (currentVal("randomAlphabet") === pressedKey) {
        console.log("you got 1 number");
    }else{
        "you are wrong"
    }
});