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

let timeLeft = 30;
let timerId;
let elem = document.getElementById('timer');
let quest = document.getElementById("questions");
let answer = document.getElementById("container");
let counter = document.getElementById("counter");

document.addEventListener("load", init());

function init() {
    startTimer();
    printQuestions();
}

function startTimer() {
    timerId = setInterval(countdown, 1000);
}

function countdown() {
    if (timeLeft === 0) {
        clearInterval(timerId);
        salvaRisposta();
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

function salvaRisposta() {
    nextPage();
}

function nextPage() {
    window.location.href = "results.html";
}

function printQuestions(attempts = 0) {
    if (attempts > questions.length) {
        localStorage.clear();
        nextPage();
        return;
    }

    let casual = Math.floor(Math.random() * questions.length);
    if (!localStorage.getItem(`domanda${casual}`)) {
        const question = questions[casual];
        quest.innerText = question.question;

        const allAnswers = [question.correct_answer, ...question.incorrect_answers];
        allAnswers.sort(() => Math.random() - 0.5); // Shuffle answers

        answer.innerHTML = '';
        allAnswers.forEach(answerText => {
            const button = document.createElement("button");
            button.setAttribute("type", "button");
            button.innerText = answerText;
            answer.appendChild(button);
        });

        counter.innerHTML = `${localStorage.length + 1}/10`;
        localStorage.setItem(`domanda${casual}`, quest.innerText);
    } else {
        printQuestions(attempts + 1);
    }
}