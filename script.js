const quizData = [

{
  question: "What does HTML stand for?",

  answers: [
    "Hyper Text Markup Language",
    "Home Tool Markup Language",
    "Hyperlinks Text Mark Language"
  ],

  correct: 0
},

{
  question: "Which language is used for styling?",

  answers: [
    "HTML",
    "CSS",
    "Python"
  ],

  correct: 1
},

{
  question: "Which language is used for interactivity?",

  answers: [
    "Java",
    "C",
    "JavaScript"
  ],

  correct: 2
}

];

let currentQuestion = 0;

let score = 0;

function loadQuestion(){

  const questionEl = document.getElementById("question");

  const answersEl = document.getElementById("answers");

  questionEl.innerText =
    quizData[currentQuestion].question;

  answersEl.innerHTML = "";

  quizData[currentQuestion].answers.forEach((answer,index)=>{

    const button = document.createElement("button");

    button.innerText = answer;

    button.classList.add("answer-btn");

    button.onclick = () => checkAnswer(index);

    answersEl.appendChild(button);

  });
}

function checkAnswer(index){

  const buttons =
    document.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if(index === quizData[currentQuestion].correct){

    score++;

  }

}

function nextQuestion(){

  currentQuestion++;

  if(currentQuestion < quizData.length){

    loadQuestion();

  }

  else{

    document.querySelector(".quiz-container").innerHTML =
      `<h2>Your Score: ${score}/${quizData.length}</h2>`;
  }
}

loadQuestion();