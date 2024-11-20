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
const quest = document.getElementById("questions");
const btnAvanti = document.getElementById("avanti");
const answersContainer = document.getElementById("container");
const array = [];
let currentAnswer = null;

document.addEventListener("load", init());

function init() {
    printQuestion();
    localStorage.clear();
}

function updateTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
        resetTimer();
    } else {
        timeLeft--;
    }
}

function resetTimer() {
    clearInterval(timerId);
    timeLeft = 30;
    timerId = setInterval(updateTimer, 1000);
    printQuestion();
}

timerId = setInterval(updateTimer, 1000);

function printQuestion() {
    let casual;
    if (array.length === questions.length) {
        nextPage();
        return;
    }
    do {
        casual = Math.floor(Math.random() * questions.length);
    } while (array.includes(casual));
    array.push(casual);
    let questionData = questions[casual];
    quest.innerText = questionData.question;
    const allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
    allAnswers.sort(() => Math.random() - 0.5);
    answersContainer.innerHTML = '';
    allAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", (event) => selectAnswer(event, answer, questionData.correct_answer));
        answersContainer.appendChild(button);
    });
    counter.innerHTML = `${array.length}/10`;
}

function nextPage() {
    location.href = "results.html";
}

btnAvanti.addEventListener("click", () => saveAnswer());

function selectAnswer(event, selectedAnswer, correctAnswer) {
    const buttons = answersContainer.querySelectorAll("button");
    buttons.forEach(button => button.classList.remove("selected"));
    event.target.classList.add("selected");
    currentAnswer = { selectedAnswer, correctAnswer };
}

function saveAnswer() {
    if (currentAnswer) {
        let answers = JSON.parse(localStorage.getItem("answers")) || [];
        if (currentAnswer.selectedAnswer === currentAnswer.correctAnswer) {
            answers.push(1);
        }
        localStorage.setItem("answers", JSON.stringify(answers));
        currentAnswer = null;
    }
    resetTimer();
}