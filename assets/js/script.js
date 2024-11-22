//richiamo all' HTML
const form = document.getElementById("footerForm");
const checkBox = document.getElementById("welcomeCheckBox");
const advert = document.getElementById("advert");
const logo = document.getElementById("headerLogo");

//funzione evento che ti obbliga a fare check sul quadratino per proseguire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if(!checkBox.checked){
       advert.innerText = "Check the box";
       return; //impedisce alla funzione di andare avanti
    }
    form.submit(); //esegue l'evento
})

logo.addEventListener("click", function() {
    alert("Hey dove pensi di andare? FAI IL TEST!");
});