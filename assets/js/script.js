const form = document.getElementById("footerForm");
const checkBox = document.getElementById("welcomeCheckBox");
const advert = document.getElementById("advert");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if(!checkBox.checked){
       advert.innerText = "Check the box";
       return;
    }
    form.submit();
})