window.addEventListener("DOMContentLoaded",main);

function main() {
    loadStartScreen();
    setAllConstants();
}

function setAllConstants() {
    const body = document.getElementById(".body")
    const h2 = document.getElementById("h2")
    const h2v2 = document.getElementById("h2v2")
    const input = document.getElementById("input")
    const inputbutton = document.getElementById("inputbutton")
    const inputdiv = document.getElementById("input-div");
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


function scene2() {
    savedInput = document.getElementById("input").value;
    h2v2.textContent = "Welcome " + (savedInput) + "_1337_haXXor!";
    input.classList.add("hidden")
    inputbutton.classList.add("hidden")
    document.getElementById("input").value = "";
}





// + (savedInput) + "_1337_haXXor I hope you're ready!!!"