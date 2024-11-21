const wrongDiv = document.getElementById("wrongAnswer");
const answers = JSON.parse(localStorage.getItem("answers")) || [];


document.addEventListener("load", init());

function init() {
    printQuest();
}

function printQuest() {
    answers.forEach((elem, index) => {
        if(elem.number === 0){
            let h2 = document.createElement("h2");
            let h4 = document.createElement("h4");
            let p = document.createElement("p");
            h2.classList.add("h2Extra");
            h4.classList.add("h4Extra");
            p.classList.add("pExtra");
            h2.innerHTML = `Domanda ${index + 1}`;
            h4.innerHTML = `${elem.question}`;
            p.innerHTML = `<span class="spanExtra">Non hai risposto a questa domanda</span>`;
            wrongDiv.appendChild(h2);
            wrongDiv.appendChild(h4);
            wrongDiv.appendChild(p);
        }else if(elem.question){
            let h2 = document.createElement("h2");
            let h4 = document.createElement("h4");
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            h2.classList.add("h2Extra");
            h4.classList.add("h4Extra");
            p.classList.add("pExtra");
            p2.classList.add("pExtra");
            h2.innerHTML = `Domanda ${index + 1}`;
            h4.innerHTML = `${elem.question}`;
            p.innerHTML = `<span class="spanExtra">Hai risposto:</span> ${elem.selectedAnswer}`;
            p2.innerHTML = `<span class="spanExtra">Avresti dovuto rispondere:</span> ${elem.correctAnswer}`;
            wrongDiv.appendChild(h2);
            wrongDiv.appendChild(h4);
            wrongDiv.appendChild(p);
            wrongDiv.appendChild(p2);
        }
    });
}