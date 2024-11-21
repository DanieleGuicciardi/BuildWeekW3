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
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "This mobile OS held the largest market share in 2012",
    correct_answer: "iOS",
    incorrect_answers: [
      "Android",
      "BlackBerry",
      "Symbian"
    ]
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "On Twitter, what was the original character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: [
      "120",
      "160",
      "100"
    ]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: [
      "32 bits",
      "64 bits",
      "128 bytes"
    ]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: [
      "Static",
      "Private",
      "Public"
    ]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: [
      "512",
      "1024",
      "500"
    ]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    correct_answer: "HD Graphics 500",
    incorrect_answers: [
      "HD Graphics 700 ",
      "HD Graphics 600",
      "HD Graphics 7000"
    ]
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: [
      "C#",
      "C++",
      "Java"
    ]
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Long Antenna Node",
      "Light Access Node",
      "Land Address Navigation"
    ]
  }
];

let timeLeft;
let totalTime;
let timerId;
const quest = document.getElementById("questions");
const btnAvanti = document.getElementById("avanti");
const answersContainer = document.getElementById("container");
const counter = document.getElementById("counter");
const array = [];
let currentAnswer = null;
const timerElement = document.getElementById("timer");
const progressCircle = document.querySelector(".progressCircle");
let questionData;
const totalQuestions = {
  total: `/${questions.length}`,
  styleTotal: "color: #C2128D",
}


document.addEventListener("load", init());

function init() {
  printQuestion();
  localStorage.clear();
  startTimer();
}

function startTimer() {
  timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timerElement.textContent = timeLeft;
  const percentage = (timeLeft / totalTime) * 100;
  const dashOffset = (439.82 * (100 - percentage)) / 100;
  progressCircle.style.strokeDashoffset = dashOffset;
  if (timeLeft === 0) {
    if(currentAnswer.selectedAnswer){
      currentAnswer = questionData.question;
    };
    saveAnswer();
    resetTimer();
  } else {
    timeLeft--;
  }
}

function resetTimer() {
  clearInterval(timerId);
  progressCircle.style.strokeDashoffset = 0;
  timerElement.textContent = timeLeft;
  printQuestion();
  startTimer();
}

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
  questionData = questions[casual];
  quest.innerText = questionData.question;
  if (questionData.difficulty === "hard") {
    timeLeft = 60;
    totalTime = 60;
  } else {
    timeLeft = 30;
    totalTime = 30;
  }
  const allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
  allAnswers.sort(() => Math.random() - 0.5);
  answersContainer.innerHTML = '';
  allAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    currentAnswer = questionData.question;
    button.addEventListener("click", (event) => selectAnswer(event, answer, questionData.correct_answer, questionData.question));
    answersContainer.appendChild(button);
  });
  counter.innerHTML = `Questions ${array.length}` + getStyledQuestion(totalQuestions);
}

function nextPage() {
  location.href = "results.html";
}

btnAvanti.addEventListener("click", () => saveAnswer());

function selectAnswer(event, selectedAnswer, correctAnswer, question) {
  const buttons = answersContainer.querySelectorAll("button");
  buttons.forEach(button => button.classList.remove("selected"));
  event.target.classList.add("selected");
  currentAnswer = {selectedAnswer, correctAnswer, question};
}

function saveAnswer() {
  let answers = JSON.parse(localStorage.getItem("answers")) || [];
  if (!currentAnswer.selectedAnswer) {
    answers.push({
      number: 0,
      question: currentAnswer
    });
  } else if (currentAnswer.selectedAnswer === currentAnswer.correctAnswer) {
    answers.push(1);
  } else {
    answers.push({
      question: currentAnswer.question,
      selectedAnswer: currentAnswer.selectedAnswer,
      correctAnswer: currentAnswer.correctAnswer
    })
  };
  localStorage.setItem("answers", JSON.stringify(answers));
  currentAnswer = null;
  resetTimer();
}

function getStyledQuestion(counter) {
  return `<span style="${counter.styleTotal}">${counter.total}</span>`;   //funzione per colorare la scritta /10
}