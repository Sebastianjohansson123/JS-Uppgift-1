window.addEventListener("DOMContentLoaded",main);

function main() {
    setAllConstants();
    loadStartScreen();
}
let body
let h2
let h2v2
let input;
let inputbutton;
let inputdiv;
let message;
let readybutton;
let weapons;
let axe;
let bazooka;
let savedInput;
let timeoutRef;
let bazookagubbe;
// let divbody;


function setAllConstants() {
    body = document.getElementById("body")
    // divbody = document.getElementById(div-body)
    h2 = document.getElementById("h2")
    h2v2 = document.getElementById("h2v2")
    input = document.getElementById("input")
    inputbutton = document.getElementById("inputbutton")
    inputdiv = document.getElementById("input-div");
    message = document.getElementById("message")
    readybutton = document.getElementById("readybutton")
    weapons = document.getElementById("weapons")
    axe = document.getElementById("axe")
    bazooka = document.getElementById("bazooka")
    bazookagubbe = document.getElementById("bazookagubbe")
}

function loadStartScreen() {
    body.classList.add("blackbackground")
    h2.addEventListener("click", scene1);
}


function scene1() {
    // h2.style.webkitAnimationPlayState= "paused";
    h2.classList.add("hiddenheight")
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
    h2v2.classList.add("hiddenheight")
    message.textContent = "You may now choose the weapon that you think will be the most efficient for the upcoming task"
    readybutton.classList.add("hidden")
    axe.classList.remove("display-none")
    bazooka.classList.remove("display-none")
}



function chooseWeapon() {
    message.classList.add("message-no-margin")
    weapons.classList.remove("hidden")
    axe.addEventListener("click", loadAxeScene);
    bazooka.addEventListener("click", loadBazookaScene);
}
//------------------------- ALL OF THE AXE SCENE --------------------
function loadAxeScene() {
    pig.classList.remove("display-none")
    weapons.classList.add("hidden")
    timeoutRef = setTimeout(youWithAxe, 1000);
}
//------------------------- ALL OF THE AXE SCENE --------------------






//------------------------- ALL OF THE BAZOOKA SCENE --------------------
function loadBazookaScene() {
    pig.classList.remove("display-none")
    bomb.classList.remove("display-none")
    bazooka.classList.add("hidden")
    axe.classList.add("hidden")
    message.classList.add("message2");
    message.textContent = "Ohh The Bazooka, what a great choice! Lets get on with it!"
    timeoutRef = setTimeout(youWithBazooka, 3000);
}
function youWithBazooka() {
    message.textContent = "LOOK THERE HE IS!! Aim with your mouse and try to finish this fucker once and for all!"
    bazookagubbe.classList.remove("hidden")
    pig.classList.remove("hidden")
    bomb.classList.remove("hidden")
    body.classList.add("aim")
    pig.addEventListener("click", bazookaOnPig);
    bomb.addEventListener("click", bazookaOnBomb);
}

function bazookaOnPig() {
    message.textContent = "Oh no, it seems like you didn't damage him enough.. LOOK OUT HERE HE COMES!!!"
    timeoutRef = setTimeout(pigGoesBerserk, 3000);
}

function pigGoesBerserk() {
    pig.classList.add("piganimation")
    timeoutRef = setTimeout(youGotKilled, 1200);
}

function youGotKilled() {
    bazookagubbe.classList.add("streckgubbe-animation")
    timeoutRef = setTimeout(youDiedScreen, 2000);
}

function youDiedScreen() {
    youdiedvideo.classList.remove("display-none");
    youdiedvideo.play();
    bazookagubbe.classList.add("hidden")
    timeoutRef = setTimeout(playAgain, 3000)
    body.classList.remove("aim")
}

function playAgain() {
    playagainbutton.classList.remove("display-none")
}


// explosion.addEventListener('click', play(explosion);


//------------------------- ALL OF THE BAZOOKA SCENE --------------------