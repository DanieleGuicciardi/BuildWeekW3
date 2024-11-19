const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];


// globali timer
let timeLeft = 5;
let elem = document.getElementById('timer');
let quest = document.getElementById("questions");
let answer = document.getElementById("container")
const form = document.querySelector("form");
let counter = document.getElementById("counter");

//funzione init
document.addEventListener("load", init());

function init() {
    printQuestions();
}

// funzione timer
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        salvaRisposta();
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

function salvaRisposta() {
    location.href = "questions.html";
}

//funzione domande
function printQuestions(attempts = 0) {
    if (attempts > questions.length) {
        localStorage.clear();
        nextPage();
        return;
    }
    let casual = Math.floor(Math.random() * questions.length);//ci scusi, anche a noi sembra la cosa più brutta mai vista nella programmazione
    let risp1;let risp2;let risp3;let risp4;
    if (!localStorage.getItem(`domanda${casual}`)) {
        quest.innerText = questions[casual].question;
        switch (questions[casual]) {
            case questions[0]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp3 = document.createElement("button");
                risp4 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp3.setAttribute("type", "button");
                risp4.setAttribute("type", "button");
                risp1.innerText = questions[0].incorrect_answers[0];
                risp2.innerText = questions[0].incorrect_answers[2];
                risp3.innerText = questions[0].correct_answer;
                risp4.innerText = questions[0].incorrect_answers[1];
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                answer.appendChild(risp3);
                answer.appendChild(risp4);
                break;
            case questions[1]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp3 = document.createElement("button");
                risp4 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp3.setAttribute("type", "button");
                risp4.setAttribute("type", "button");
                risp1.innerText = questions[1].correct_answer;
                risp2.innerText = questions[1].incorrect_answers[0];
                risp3.innerText = questions[1].incorrect_answers[2];
                risp4.innerText = questions[1].incorrect_answers[1];
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                answer.appendChild(risp3);
                answer.appendChild(risp4);
                break;
            case questions[2]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp1.innerText = questions[2].correct_answer;
                risp2.innerText = questions[2].incorrect_answers[0];
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                break;
            case questions[3]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp1.innerText = questions[3].correct_answer;
                risp2.innerText = questions[3].incorrect_answers[0];
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                break;
            case questions[4]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp3 = document.createElement("button");
                risp4 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp3.setAttribute("type", "button");
                risp4.setAttribute("type", "button");
                risp1.innerText = questions[4].incorrect_answers[1];
                risp2.innerText = questions[4].incorrect_answers[0];
                risp3.innerText = questions[4].incorrect_answers[2];
                risp4.innerText = questions[4].correct_answer;
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                answer.appendChild(risp3);
                answer.appendChild(risp4);
                break;
            case questions[5]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp3 = document.createElement("button");
                risp4 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp3.setAttribute("type", "button");
                risp4.setAttribute("type", "button");
                risp1.innerText = questions[5].incorrect_answers[1];
                risp2.innerText = questions[5].correct_answer;
                risp3.innerText = questions[5].incorrect_answers[2];
                risp4.innerText = questions[5].incorrect_answers[0];
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                answer.appendChild(risp3);
                answer.appendChild(risp4);
                break;
            case questions[6]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp3 = document.createElement("button");
                risp4 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp3.setAttribute("type", "button");
                risp4.setAttribute("type", "button");
                risp1.innerText = questions[6].incorrect_answers[1];
                risp2.innerText = questions[6].incorrect_answers[2];
                risp3.innerText = questions[6].correct_answer;
                risp4.innerText = questions[6].incorrect_answers[0];
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                answer.appendChild(risp3);
                answer.appendChild(risp4);
                break;
            case questions[7]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp3 = document.createElement("button");
                risp4 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp3.setAttribute("type", "button");
                risp4.setAttribute("type", "button");
                risp1.innerText = questions[7].correct_answer;
                risp2.innerText = questions[7].incorrect_answers[2];
                risp3.innerText = questions[7].incorrect_answers[0];
                risp4.innerText = questions[7].incorrect_answers[1];
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                answer.appendChild(risp3);
                answer.appendChild(risp4);
                break;
            case questions[8]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp1.innerText = questions[8].correct_answer;
                risp2.innerText = questions[8].incorrect_answers[0];
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                break;
            case questions[9]:
                risp1 = document.createElement("button");
                risp2 = document.createElement("button");
                risp3 = document.createElement("button");
                risp4 = document.createElement("button");
                risp1.setAttribute("type", "button");
                risp2.setAttribute("type", "button");
                risp3.setAttribute("type", "button");
                risp4.setAttribute("type", "button");
                risp1.innerText = questions[9].incorrect_answers[2];
                risp2.innerText = questions[9].incorrect_answers[0];
                risp3.innerText = questions[9].incorrect_answers[1];
                risp4.innerText = questions[9].correct_answer;
                answer.appendChild(risp1);
                answer.appendChild(risp2);
                answer.appendChild(risp3);
                answer.appendChild(risp4);
                break;
        }
        counter.innerHTML = `${localStorage.length + 1}/10`
        localStorage.setItem(`domanda${casual}`, quest.innerText);
    } else {
        printQuestions(attempts + 1);
    }
}

form.addEventListener("submit", function(){
    salvaRisposta();
})

function nextPage() {
    window.location.href = "results.html";
}