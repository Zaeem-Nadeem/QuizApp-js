const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let currentQuestionIndex = 0;

const loadQuestion = () => {
    const question = document.querySelector(".question span");
    const options = document.querySelectorAll(".one");

    question.innerHTML = quizData[currentQuestionIndex].question;

    const data = quizData[currentQuestionIndex];
    const optionsArray = ["a", "b", "c", "d"];
    options.forEach((option, index) => {
        option.innerText = data[optionsArray[index]];
    });
};

const checkAnswer = () => {
    const options = document.querySelectorAll(".one");
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const selectedAnswer = selectedOption.nextElementSibling.innerText.toLowerCase();
    const correctAnswer = quizData[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert(`Incorrect. The correct answer is ${correctAnswer.toUpperCase()}.`);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        alert("Quiz Finished!");
    }
};

document.getElementById("button").addEventListener("click", checkAnswer);
loadQuestion();
