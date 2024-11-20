const answers = JSON.parse(localStorage.getItem('answers')) || [];
const totalQuestions = 10;
const correctAnswers = answers.length;
const wrongAnswers = totalQuestions - correctAnswers;
const ctx = document.getElementById('graph').getContext('2d');
const correctPercentage = (correctAnswers / totalQuestions) * 100;
const wrongPercentage = (wrongAnswers / totalQuestions) * 100;



 function scrittaCerchio() {
    if (correctAnswers >= 5) {
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

document.getElementById('correctResult').innerHTML = `<h2>Correct <br/>${correctPercentage}%<br/>${correctAnswers} / ${totalQuestions} questions</h2>`;
document.getElementById('wrongResult').innerHTML = `<h2>Wrong <br/>${wrongPercentage}%<br/>${wrongAnswers} / ${totalQuestions} questions</h2>`;
document.getElementById("rateUsBtn").addEventListener("click", () => {
    window.location.href = "feedback.html";
});