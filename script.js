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

    if (currentVal("randomAlphabet").toLowerCase() === pressedKey) {
        let previousScore = getNumVal("scoreId");
        let updatedScore = previousScore+1;
        setNewVal("scoreId", updatedScore);
        removeBackgroundColor();
        generateRandomAlphabet();
        setBackgroundColor();
        

    }else{
        let previousLife = getNumVal("lifeId");
        let updatedLife = previousLife-1;
        setNewVal("lifeId", updatedLife);
        if (updatedLife === 0) {
            addClass("play", "hidden");
            removeClass("final", "hidden");
        }
    }
});