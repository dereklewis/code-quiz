//this is where variables

var body = document.body;
var listAnswers = document.createElement("ol");
var li1 = document.createElement("li");
var h1El = document.createElement("h1");
console.log(h1El)
var questions = ["What is your name?", "What is your favorite color?", "What is the airspeed velocity of a swallow?"];
var questionContainer = document.querySelector(".answerSection");






//this is where functions go












//this is where event handlers go

questionContainer.addEventListener("click", function(event) {
    var element = event.target; 

    if (element.matches("button")) {
        var state = element.getAttribute("data-state");

        if (state === "home") {
            element.dataset.state = "questions";
            element.setAttribute("data-state", "questions")
        }
    }
}







//first 
//timer -> create time interval for 
// var startTime = 100
// var timer = setInterval(function() {
//     startTime --;
//     if (answer === wrong) {
//         startTime - 10
//     }
// },
// 1000
// );