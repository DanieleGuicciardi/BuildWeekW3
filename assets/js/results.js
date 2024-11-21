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

const answers = JSON.parse(localStorage.getItem('answers')) || [];
const totalQuestions = questions.length;
const correctAnswers = answers.filter((elem) => elem === 1).length;
const minRequired = questions.length/2;
const wrongAnswers = totalQuestions - correctAnswers;
const ctx = document.getElementById('graph').getContext('2d');
const correctPercentage = (correctAnswers / totalQuestions) * 100;
const wrongPercentage = (wrongAnswers / totalQuestions) * 100;



 function scrittaCerchio() {
    if (correctAnswers >= minRequired) {
        graphContent.innerHTML = `<h3>Congratulations! You passed the exam.</h3><p> We'll send you the certificate in few minutes. Check your email (including promotions / spam folder)<p/>`;
    } else {
        graphContent.innerHTML = `<h3>We're sorry! <br>You failed the exam.</h3><p> Don't worry! You can try again and get your certificate!<p/>`;
    };
}

scrittaCerchio();

const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Wrong', 'Correct'],
        datasets: [{
            label: 'Answers',
            data: [wrongAnswers, correctAnswers],
            backgroundColor: ['#900080', '#00FFFF'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            tooltip: {
                enabled: true
            }
        },
        cutout: '75%',
    }
});

document.getElementById('correctResult').innerHTML = `<h2>Correct <br/>${correctPercentage.toFixed(2)}%<br/>${correctAnswers} / ${totalQuestions} questions</h2>`;
document.getElementById('wrongResult').innerHTML = `<h2>Wrong <br/>${wrongPercentage.toFixed(2)}%<br/>${wrongAnswers} / ${totalQuestions} questions</h2>`;
document.getElementById("rateUsBtn").addEventListener("click", () => {
    window.location.href = "feedback.html";
});