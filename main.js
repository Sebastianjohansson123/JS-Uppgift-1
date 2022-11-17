window.addEventListener("DOMContentLoaded",main);

function main() {
    loadStartScreen();
    setAllConstants();
    typing();
}

function setAllConstants() {
    const body = document.getElementById(".body")
    const h2 = document.getElementById("h2")
    const h2v2 = document.getElementById("h2v2")
    const input = document.getElementById("input")
    const inputbutton = document.getElementById("inputbutton")
    const inputdiv = document.getElementById("input-div");
    const message = document.getElementById("message")
    const readybutton = document.getElementById("readybutton")
    const weapons = document.getElementById("weapons")
    const axe = document.getElementById("axe")
    const bazooka = document.getElementById("bazooka")
}
let savedInput;

function loadStartScreen() {
    body.classList.add("blackbackground")
    h2.addEventListener("click", scene1);
}


function scene1() {
    h2.classList.add("hidden")
    h2v2.classList.remove("before-animation")
    h2v2.classList.add("hidden-from-right")
    input.classList.remove("hidden")
    inputbutton.classList.remove("hidden")
    inputbutton.addEventListener("click", scene2)
    inputbutton.addEventListener("click", clearInput)
}

function clearInput() {
input.innerHTML = "";
}


let timeoutRef;
function scene2() {
    savedInput = document.getElementById("input").value;
    h2v2.textContent = "Welcome " + (savedInput) + "_Haxxor_1337!";
    input.classList.add("hidden")
    inputbutton.classList.add("hidden")
    document.getElementById("input").value = "";
    message.classList.remove("hidden")
    message.classList.remove("display-none")
    readybutton.classList.remove("hidden")
    readybutton.addEventListener("click", scene3);
}

function scene3() {
    timeoutRef = setTimeout(chooseWeapon, 1000);
    h2v2.classList.add("hidden")
    message.textContent = "You may now choose the weapon that you think will be the most efficient for the upcoming task"
    readybutton.classList.add("hidden")
}



function chooseWeapon() {
    weapons.classList.remove("hidden")
    axe.addEventListener("click", loadAxeScene);
    bazooka.addEventListener("click", loadBazookaScene);
}

function loadAxeScene() {
bazooka.classList.add("hidden")
axe.classList.add("hidden")
timeoutRef = setTimeout(youWithAxe, 1000);
}

function loadBazookaScene() {
    bazooka.classList.add("hidden")
    axe.classList.add("hidden")
    message.textContent = "Ohh The Bazooka, what a great choice! Lets get on with it!"
    timeoutRef = setTimeout(youWithBazooka, 3000);
}
function youWithBazooka() {
    message.textContent = "LOOK THERE HE IS!! Aim with your mouse and try to finish this fucker once and for all!"
}
