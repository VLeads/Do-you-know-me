var readlineSync = require("readline-sync");

 
var score = 0;

console.log("Hi Vishal here 👋")
var userName = readlineSync.question("Hey! What's your name ");

console.log("Welcome "+ userName + " to game 'Do you know me?'");

var scoreBoard=[{
  name: "Tanay: ",
  score: 3,
},
{
  name: "Akash: ",
  score: 4,
}]

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct !");
    score = score + 1;
  }else
  {
    console.log("Wrong Answer");
  }

}



var questions = [{
    question: "On national level I played which sport: ",
    answer: "Taekwondo"
},{
  question: "Where do Vishal live?: ",
  answer: "Punjab"
},{
 question: "Tanay's favourite superhero?: ",
 answer: "Ironman"
},{
  question: "What motivates me everytime: ",
  answer: "Dreams"
  }] ;

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer);
}


console.log("--------");
console.log("Your final Score: ", score);

  console.log("Here is the scoreboard, If u scored high, then let me know. So, I can update scoreboard")
  for(var i=0;i<scoreBoard.length; i++){
  console.log(scoreBoard[i].name,
              scoreBoard[i].score);
  }