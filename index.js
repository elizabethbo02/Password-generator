const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = "";
let copyPassOneEl = document.querySelector("#password-one");
let copyPassSecondEl = document.querySelector("#password-two");
let passwordLengthEl = document.querySelector("#passLength-el");

function generatePassword() {
    copyPassOneEl.value = generateCombination(passwordLengthEl.value);
    copyPassSecondEl.value = generateCombination(passwordLengthEl.value);
}

copyPassOneEl.addEventListener('click', function() {
    copyText(copyPassOneEl);
});

copyPassSecondEl.addEventListener('click', function() {
    copyText(copyPassSecondEl);
});


function copyText(element) {
    element.focus();
    element.select();
    navigator.clipboard.writeText(element.value);
    alert("Copied: " + element.value);
}


function generateCombination(length) {
    password = "";
    for(let i = 0; i < length; i++) {
        let passwordIndex = Math.floor(Math.random() * characters.length);
        password += characters[passwordIndex];
    }
    return password;
}

const openBtn = document.getElementById ("openModal");
const closeBtn = document-getElementById ("closeModal");
const modal = document.getElementsByClassName ("modal");

openBtn.addEventListener("click",() => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click",() => {
    modal.classList.remove("open");
});


