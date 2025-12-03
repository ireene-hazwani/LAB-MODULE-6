// Questions array
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hypertensive Text Markup Language"],
        answer: 1
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Python", "C++"],
        answer: 1
    },
    {
        question: "What does JS stand for?",
        options: ["JavaSuper", "JustScript", "JavaScript", "JumboScript"],
        answer: 2
    }
];

let currentIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;

// Shuffle questions
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// Start timer
function startTimer() {
    timeLeft = 10;
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// Display question & options
function displayQuestion() {
    document.getElementById("question").innerText = questions[currentIndex].question;

    let optionsHTML = "";
    questions[currentIndex].options.forEach((option, i) => {
        optionsHTML += `<button onclick="checkAnswer(${i})">${option}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

// Check answer
function checkAnswer(selected) {
    clearInterval(timer);

    if (selected === questions[currentIndex].answer) {
        score++;
        document.getElementById("feedback").innerHTML = "✔ Correct!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerHTML = "✘ Wrong!";
        document.getElementById("feedback").style.color = "red";
    }
}

// Move to next question
function nextQuestion() {
    currentIndex++;

    if (currentIndex < questions.length) {
        document.getElementById("feedback").innerText = "";
        displayQuestion();
        startTimer();
    } else {
        endQuiz();
    }
}

// Start quiz
function startQuiz() {
    shuffleQuestions();
    displayQuestion();
    startTimer();
}

// Finish quiz & show score
function endQuiz() {
    document.getElementById("question").innerText = "Quiz Finished!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("timer").innerHTML = "";

    document.getElementById("score").innerText = `Your Score: ${score} / ${questions.length}`;
}

// Start quiz automatically when page loads
startQuiz();
