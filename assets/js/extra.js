//richiamo delle variabili
const wrongDiv = document.getElementById("wrongAnswer");
const answers = JSON.parse(localStorage.getItem("answers")) || []; //estraiamo l'array dal localStorage
const btnBack = document.getElementById("welcomeBack");


document.addEventListener("load", init());

function init() {
    printQuest();
}

function printQuest() { //controlla per ogni elemento se la risposta è sbagliata e non è stata data
    answers.forEach((elem, index) => {
        if(elem.number === 0){ //se la risposta non è stata data inserisce la domanda e p 
            let h2 = document.createElement("h2"); 
            let h4 = document.createElement("h4");
            let p = document.createElement("p");
            h2.classList.add("h2Extra");
            h4.classList.add("h4Extra");
            p.classList.add("pExtra");
            h2.innerHTML = `Question ${index + 1}`;
            h4.innerHTML = `${elem.question}`;
            p.innerHTML = `<span class="spanExtra">You didn't answer to this question</span>`;
            wrongDiv.appendChild(h2);
            wrongDiv.appendChild(h4);
            wrongDiv.appendChild(p);
        }else if(elem.question){ //se la risposta è stata data sbagliata stampa la domanda, la risposta selezionata e la risposta corretta
            let h2 = document.createElement("h2");
            let h4 = document.createElement("h4");
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            h2.classList.add("h2Extra");
            h4.classList.add("h4Extra");
            p.classList.add("pExtra");
            p2.classList.add("pExtra");
            h2.innerHTML = `Question ${index + 1}`;
            h4.innerHTML = `${elem.question}`;
            p.innerHTML = `<span class="spanExtra">You answered:</span> ${elem.selectedAnswer}`;
            p2.innerHTML = `<span class="spanExtra">You should have answered:</span> ${elem.correctAnswer}`;
            wrongDiv.appendChild(h2);
            wrongDiv.appendChild(h4);
            wrongDiv.appendChild(p);
            wrongDiv.appendChild(p2);
        }
    });
}

btnBack.addEventListener("click", welcomePage);

function welcomePage() {
    location.href = "welcome.html";
}