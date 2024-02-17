function play() {
    addClass("start", "hidden");
    removeClass("play", "hidden");
    addClass("final", "hidden");

    removeBackgroundColor();
    setNewVal("lifeId", 5);
    setNewVal("scoreId", 0);

    continueGame();
}

function continueGame() {
    generateRandomAlphabet();
    setBackgroundColor();
}

document.addEventListener('keyup', function matchingKey(e) {
    let pressedKey = e.key;
    console.log(pressedKey);

    if (currentVal("randomAlphabet").toLowerCase() === pressedKey) {
        let previousScore = getNumVal("scoreId");
        let updatedScore = previousScore+1;
        setNewVal("scoreId", updatedScore);
        removeBackgroundColor();
        generateRandomAlphabet();
        setBackgroundColor();
        document.getElementById("resultSpan").innerText = updatedScore;
        

    }else{
        let previousLife = getNumVal("lifeId");
        let updatedLife = previousLife-1;
        setNewVal("lifeId", updatedLife);
        if (updatedLife === 0) {
            addClass("play", "hidden");
            removeClass("final", "hidden");
        }
    }

    if (pressedKey === "Escape") {
        addClass("play", "hidden");
        removeClass("start", "hidden");
        addClass("final", "hidden");
    }
});