//this is where variables

var body = document.body;
var listAnswers = document.querySelector("#list");
var li1 = document.createElement("li");
var h1El = document.createElement("h1");
// console.log(h1El)
var questions = [
    {
        title: "Where was Divided Sky written?",
        choices: ["The Rhombus", "Tortola", "The Barn"],
        answer: "The Rhombus"
    },
    {
        title: "Who killed the evil King Wilson?",
        choices: ["Tela", "The Unit Monster", "Possum"],
        answer: "Possum"
    },
    {
        title: "What was the first Halloween costume album performed?",
        choices: ["Remain in the Light", "The White Album", "Quadrophenia"],
        answer: "The White Album"
    },
    {
        title: "What is Trey's real first name?",
        choices: ["Terry", "William", "Earnest"],
        answer: "Earnest"
    }
];
// var questionNumber = document.querySelector("#questionNumber");
var questionContainer = document.querySelector(".answerSection");
var startQuiz = document.querySelector("#startBtn");
var startSection = document.querySelector(".startQuiz");
var parQuestion = document.querySelector("#parQuestion");
var numberOfQuestions = questions.length
var currentIndex = 0
var secondsLeft = 60
var timerShown = document.querySelector(".quizTimer");

//event listener to display questions
startQuiz.addEventListener("click", function(event) {
   
    displayQuestion()
    setTime()
})

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerShown.textContent = secondsLeft + "seconds left"

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timerShown.textContent = "Game Over"

            //this is the function for the last page
            // scorePage()
        }
    }, 1000);
    
}

function displayQuestion(){
    startSection.classList.add("hide");
    
    var current = questions[currentIndex];

    parQuestion.textContent = current.title;

       listAnswers.innerHTML = "" 
    for(let i=0; i < current.choices.length; i++){
        console.log(current.choices[i])
        var choice = document.createElement("button")
        choice.setAttribute("class", "answerButton")
        choice.textContent = current.choices[i]; 
        document.querySelector("#list").appendChild(choice)
    }
    
}

listAnswers.addEventListener("click", answerClick)
  
function answerClick(event) {
event.preventDefault() 
if (event.target.matches(".answerButton")) {

currentIndex++

displayQuestion()
//verify if the answer is correct or not
//if answer is correct then move to the next question
//if answer is incorrect then take time away then move to the next question
}



}

//function needed to display score
// function scorePage()





