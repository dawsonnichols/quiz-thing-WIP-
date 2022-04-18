const generateBtn = document.querySelector("#btn-start");

generateBtn.addEventListener("click", startGame);

const introText = document.querySelector("intro"); 

const questionText = document.getElementById("question-text");

const answerText = document.getElementById("answer-btn");

const questionScreen = document.getElementById("question-screen");

generateBtn.onclick = function() {
    if (generateBtn.style.display !== "none") {
        generateBtn.style.display = "none";
    } else {
        generateBtn.style.display = "block"; 
    }
}; 
// CAN ADD MULTIPLE HTML ELEMTNS TO ABOVE FUNCTION?? 
// generateBtn.onclick = function() {
//     if (introText.style.display !== "none") {
//     introText.style.display = "none";
//     } else {
//     introText.style.display = "block"; 
// }; 
function startGame() {
  console.log("start");
  
  askQuestions();
}

function nextQuestion() {
    console.log("print next question"); 
    while (questionScreen.firstChild) {
        questionScreen.removeChild(questionScreen.firstChild); 
    }
}

let score = 0; 
function askQuestions() {
  console.log(questions[0,1,2,3].prompt);
  questionText.innerHTML = questions[0,1,2,3].prompt;

  var answer = questions[0,1,2,3].answer;
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i].text);
    // const questionButtons = document.div
    const questionButtons = document.createElement("button");
    questionButtons.addEventListener('click', nextQuestion); 
    questionScreen.appendChild(questionButtons);
    questionButtons.textContent = answer[i].text;
  }
  nextQuquestionScreen
}

function verifyAnswer (

) {

}
let questions = [
  {
    prompt:
      "In Javascript, protypal inheritance either is null or references another ___.",
    // object
    answer: [
      { text: "Object", correct: true },
      { text: "Project", correct: false },
      { text: "HTML doc", correct: false },
      { text: "Wordpress plugin", correct: false },
    ],
  },
  {
    prompt:
      "In Javascript, hoisting allows functions to be used in code ___ they are declared.",
    // before
    answer: [
      { text: "before", correct: true },
      { text: "after", correct: false },
      { text: "in the middle of when", correct: false },
      { text: "Cake frosting", correct: false },
    ],
  },
  {
    prompt:
      "In Javascript, the this keyword is in the ___ context when it is outside of a function.",
    // global
    answer: [
      { text: "global", correct: true },
      { text: "local", correct: false },
      { text: "state", correct: false },
      { text: "federal", correct: false },
    ],
  },
  {
    prompt:
      "An element receives a ___ event when pointing device is pressed and released while inside the element.",
    // click
    answer: [
      { text: "click", correct: true },
      { text: "hover", correct: false },
      { text: "blur", correct: false },
      { text: "key press", correct: false },
    ],
  },
];
let time = 50; 

let timerEl = document.getElementById('timer'); 
setInterval(countdown, 1000); 
function countdown() {
    let timeLeft = time; 
    timerEl.innerHTML = `${timeLeft}`; 
    time--; 
};
// let time = 100;
// let timer = setInterval(function() {
//     document.querySelector('timerDisplay').innerHTML=timer;
//     time--;
//     if (time === 0) {
//         clearInterval(timer);
//         document.getElementById('timerDisplay').innerHTML = alert("Game over!");
//     }
// }, 1000);
// Create variables to store the quiz questions
// Use mouse-click events to start the quiz
// Write for loops to cycle through quiz questions
// Use key-press events to receive user input in the form of answers to quiz questions
// Create a time limit for the game using time functions
// Write conditional statements to determine wrong and right answers
// Use client-side storage to store high scores
// Use GitHub Pages to publish the page to the web
