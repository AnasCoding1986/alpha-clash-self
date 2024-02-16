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