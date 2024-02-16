// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AnasCoding1986/alpha-clash-self.git
// git push -u origin main

function addClass(id, addedClass) {
    let elm = document.getElementById(id);
    elm.classList.add(addedClass);
}
function removeClass(id, addedClass) {
    let elm = document.getElementById(id);
    elm.classList.remove(addedClass);
}
function generateRandomAlphabet() {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr = alphabets.split("");
    let randomNum = Math.floor(Math.random()*26);
    let alphabet = alphabetArr[randomNum];
    document.getElementById("randomAlphabet").innerHTML = alphabet;
    console.log(alphabet);
}
function setBackgroundColor() {
    let currentAlphabetDiv = document.getElementById("randomAlphabet");
    let currentAlphabetDivText = currentAlphabetDiv.innerText;
    let desiredCurrentAlphabetDivText = currentAlphabetDivText.toLowerCase();
    const kbdElements = document.querySelectorAll('.kbd');
    kbdElements.forEach(kbd => {
        const id = kbd.id;
        if (id === desiredCurrentAlphabetDivText) {
            kbd.style.backgroundColor = 'yellow'; // Change background color
        }
    });


}
