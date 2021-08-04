//this is where variables

var body = document.body;
var listAnswers = document.createElement("ol");
var li1 = document.createElement("li");
var h1El = document.createElement("h1");
// console.log(h1El)
var questions = [
    {
        title: "Where was Divided Sky written?",
        choices: ["Tortola", "The Barn", "The Rhombus", "Burlington"],
        answer: "The Rhombus"
    },
    {
        title: "What album was the first Halloween costume",
        choices: ["Remain in the Light", "Quadrophenia", "The White Album", "Exile on Main Street"],
        answer: "The White Album"
    }
    {
        title: "Who killed the evil King Wilson?",
        choices: ["The Unit Monster", "Possum", "Col. Forbin", "Tela"],
        answer: "Possum"
    }
];
var questionContainer = document.querySelector(".answerSection");
var startQuiz = document.querySelector("#startBtn")
var startSection = document.querySelector(".startQuiz")
var parQuestion = document.querySelector("#parQuestion")

//this is where functions go


function displayQuestion(){
    startSection.classList.add("hide");

    let current = questions[0];

    console.log(current)
    
    parQuestion.textContent = current.title;

    for(let i=0; i < current.choices.length; i++){
        console.log(current.choices[i])
        var choice = document.createElement("button")
        choice.textContent = current.choices[i]; 
        document.querySelector("#list").appendChild(choice)
    }
}

startQuiz.addEventListener("click", function(event) {
    
    displayQuestion()
})




