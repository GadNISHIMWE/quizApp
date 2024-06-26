const questions= [
    {
        question:"which is largest animal in the world",
        answers: [
            { text: "shark", correct: false},
            { text: "blue whale", correct: true},
            { text: "elephant", correct:false},
            { text: "giraffe", correct: false},

        ]
    },
    {
        question:"which is largest continent in the world",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Artic", correct:false},
            { text: "Africa", correct: false},

        ]  
    },
    {
        question:"which is largest desert in the world",
        answers: [
            { text: "Kalahali", correct: false},
            { text: "Gobi", correct:false },
            { text: "Sahari", correct:false},
            { text: "Antarctica", correct: true},

        ]
    },
    {
        question:"which is largest River in the world",
        answers: [
            { text: "victoria River", correct: false},
            { text: "nile River", correct:false },
            { text: "nyabarongo River", correct:false},
            { text: "amazon River", correct: true},

        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-questions");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });


}
function  resetState(){
    nextButton.style.display ="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect= selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
if(button.dataset.correct ==="true"){
button.classList.add("correct");
}
    button.disabled = true;
});
nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`you scored ${score} out of ${questions.length}!........so keep it up`;
    nextButton.innerHTML= "Try Again";
    nextButton.style.display ="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
   if(currentQuestionIndex < questions.length){
    handleNextButton();
   } 
   else{
    startQuiz();
   }
});
startQuiz();