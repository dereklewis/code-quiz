//this is where variables

var body = document.body;
var listAnswers = document.createElement("ol");
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
        title: "Who killed the evil King Wilson",
        choices: ["Tela", "The Unit Monster", "Possum"],
        answer: "Possum"
    }
];
var questionNumber = document.querySelector("#questionNumber")
var questionContainer = document.querySelector(".answerSection");
var startQuiz = document.querySelector("#startBtn")
var startSection = document.querySelector(".startQuiz")
var parQuestion = document.querySelector("#parQuestion")
var numberOfQuestions = questions.length

//event listener to display questions
startQuiz.addEventListener("click", function(event) {
   
    displayQuestion()
})

function displayQuestion(){
    startSection.classList.add("hide");

    var current = questions[0];
    
    parQuestion.textContent = current.title;

    for(let i=0; i < current.choices.length; i++){
        console.log(current.choices[i])
        var choice = document.createElement("button")
        choice.textContent = current.choices[i]; 
        document.querySelector("#list").appendChild(choice)
    }
    
}


  






