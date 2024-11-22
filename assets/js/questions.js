//array di domande facili e difficili
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
//richiamo delle variabili necessarie al funzionamento
let timeLeft;
let totalTime;
let timerId;
const quest = document.getElementById("questions");
const btnAvanti = document.getElementById("avanti");
const answersContainer = document.getElementById("container");
const counter = document.getElementById("counter");
const array = []; //array d'appoggio
let currentAnswer = null;
const timerElement = document.getElementById("timer");
const progressCircle = document.querySelector(".progressCircle");
let questionData; //per salvare le domande dell'array dentro la funzione
const totalQuestions = {
  total: `/${questions.length}`, //counter di domande
  styleTotal: "color: #C2128D",
}


document.addEventListener("load", init());

function init() {
  printQuestion(); //funzione per stampare le domande a schermo
  localStorage.clear(); //pulire il localstorage per rifare il test
  startTimer(); // inizio del timer
}
//funzione che inizia il timer
function startTimer() {
  timerId = setInterval(updateTimer, 1000);// chiamiamo la funzione del timer ogni 1000 millisecondi (1sec)
}
//funzione del timer
function updateTimer() {
  timerElement.textContent = timeLeft; //aggiorniamo il testo del timer
  const percentage = (timeLeft / totalTime) * 100; //calcoliamo il tempo restante in percentuale
  const dashOffset = (439.82 * (100 - percentage)) / 100; //calcoliamo in percentuale la quantita di cerchio restante in base alla sua circonferenza
  progressCircle.style.strokeDashoffset = dashOffset; //aggiorniamo il cerchio del timer
  if (timeLeft === 0) { 
    if(currentAnswer.selectedAnswer){    //se il tempo scade controlla che la risposta sia selezionata     
      currentAnswer = questionData.question; //se la condizione è verificata salviamo soltanto la domanda corrente
    };
    saveAnswer(); //funzione per salvare la domanda
    resetTimer(); //funzione di reset della domanda
  } else {
    timeLeft--; //timer che diminuisce di 1 ogni secondo
  }
}
//funzione di reset della pagina
function resetTimer() {
  clearInterval(timerId);
  progressCircle.style.strokeDashoffset = 0;
  timerElement.textContent = timeLeft;
  printQuestion();
  startTimer();
}
//funzione di stampa delle domande e delle risposte
function printQuestion() {
  let casual; //prendiamo una variabile
  if (array.length === questions.length) { //se tutte le domande sono state selezionate
    nextPage(); //fa andare alla prossima pagina
    return; //interrompe la funzione
  }
  do {
    casual = Math.floor(Math.random() * questions.length); //impostiamo la variabile a un numero casuale che continua a uscire finche non riesce lo stesso numero fino alla fine delle domande
  } while (array.includes(casual)); 
  array.push(casual); //nell'array d'appoggio si scrive il numero uscito in modo che non esca dinuovo
  questionData = questions[casual]; //salviamo l'oggetto dell'array nella posizione di casual
  quest.innerText = questionData.question; //dentro l'h1 ci scriviamo la domanda
  if (questionData.difficulty === "hard") { // il tempo rimanente viene impostato in base alla difficoltà della domanda
    timeLeft = 60;
    totalTime = 60;
  } else {
    timeLeft = 30;
    totalTime = 30;
  }
  const allAnswers = [...questionData.incorrect_answers, questionData.correct_answer]; //salviamo le risposte dell'oggetto uscito dentro un array
  allAnswers.sort(() => Math.random() - 0.5); //mischiamo le risposte 
  answersContainer.innerHTML = ''; //spazio per il bottone
  allAnswers.forEach(answer => {
    const button = document.createElement("button"); //crea un bottone per ogni risposta nell'array 
    button.setAttribute("type", "button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    currentAnswer = questionData.question;
    button.addEventListener("click", (event) => selectAnswer(event, answer, questionData.correct_answer, questionData.question)); //aggiungendo una funzione di click che salva la risposta e la rende selezionata
    answersContainer.appendChild(button); //stampa in html il bottone
  });
  counter.innerHTML = `Questions ${array.length}` + getStyledQuestion(totalQuestions); //conteggio domande
}
//mandare alla pagina successiva
function nextPage() {
  location.href = "results.html";
}

btnAvanti.addEventListener("click", () => saveAnswer()); //per il salvataggio delle risposte

function selectAnswer(event, selectedAnswer, correctAnswer, question) { //fa in modo che le domande siano selezionate e il bottone si illumini salvando i dati 
  const buttons = answersContainer.querySelectorAll("button");
  buttons.forEach(button => button.classList.remove("selected")); //rimuovo la classe dal bottone precedentemente selezionato
  event.target.classList.add("selected");
  currentAnswer = {selectedAnswer, correctAnswer, question}; //salva domanda, risposta corretta e risposta selezionata
}
//funzione che salva tutto nel localStorage
function saveAnswer() {
  let answers = JSON.parse(localStorage.getItem("answers")) || []; //estraiamo l'array dal localStorage o lo inizializziamo nel caso non esistesse
  if (!currentAnswer.selectedAnswer) { //se la risposta non è stata selezionata
    answers.push({ //metti la domanda e il numero 0 
      number: 0,
      question: currentAnswer
    });
  } else if (currentAnswer.selectedAnswer === currentAnswer.correctAnswer) { //se invece la risposta è corretta metti 1
    answers.push(1);
  } else { //se la risposta è sbagliata inserisci la domanda, la risposta corretta e la risposta sbagliata
    answers.push({
      question: currentAnswer.question,
      selectedAnswer: currentAnswer.selectedAnswer,
      correctAnswer: currentAnswer.correctAnswer
    })
  };
  localStorage.setItem("answers", JSON.stringify(answers)); //rimettiamo l'array salvato nel localStorage
  currentAnswer = null; //reimpostiamo currentAnswer
  resetTimer(); 
}

function getStyledQuestion(counter) {
  return `<span style="${counter.styleTotal}">${counter.total}</span>`;   //funzione per colorare la scritta
}