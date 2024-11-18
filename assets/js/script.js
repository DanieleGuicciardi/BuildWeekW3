//Globali pagina welcome
const form = document.getElementById("footerForm");
const btnWelcome = document.getElementById("welcomeBtn");
const checkBox = document.getElementById("welcomeCheckBox");
const advert = document.getElementById("advert");

//Globali pagina questions
const timer = document.getElementById ("timer")
const questions = document.getElementById ("questions")
const answers = document.getElementsByClassName ("answers")
const counter = document.getElementById ("counter")


// Funzioni pagina welcome
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if(!checkBox.checked){
       advert.innerText = "Check the box";
       return;
    }
    form.submit();
})

//Funzioni pagina questions

