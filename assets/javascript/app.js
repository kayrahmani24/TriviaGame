$(document).ready(function() {

//varibles
var intervalId;

var questions = ["What year were the Chicago Bulls formed?", "Who was the bulls first pick of the 2011 draft?", "Who is the Bulls all time leading scorer" ];

var answers = ["1966", "Derrick Rose", "6", "72", "Michael Jordan"];

var userGuess = [];

var number = 23;

var correctAnswers = 0;

var wrongAnswers = 0;

var unanswered = 0;

var div = $("<div></div>");

//Hiding questionaire page , results page, and timer
$(".comeBack").hide();
$("#show-number").hide();
$(".results").hide();

//function for timer
 function run() {
  //Timer decreasing by second
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
     
      number--;
     //HTML div to show seconds remaining
      $("#show-number").html("<h2> Seconds Remaining: " + number + "</h2>");

     
      if (number === 0) {
        
//When timer hits 0 seconds go to results page
        results();
        
      }
    }
// When start button is clicked...
$("#start").on("click", function() {
        $("#firstToGo").hide(1000);
  //Hide page
        run();
    //perform "run" function 
        $(".comeBack").show(1000);
       //div's with show function to appear the questions and timer.
        $("#show-number").show();

});
//When submit button is pressed take us to results page
$("#results-main").on("click", function(){
  results();
});

function results (){
clearInterval(intervalId);
//clearing the timer
$(".comeBack").hide(1000);
//hiding the questions sheet when timer expires or submit button is pressed


//Setting the guess to the radio button checked on
    userGuess[0] = $('input:radio[name="que0"]:checked').val();
    console.log(userGuess[0]);
    userGuess[1] = $('input:radio[name="que1"]:checked').val();
    console.log(userGuess[1]);
    userGuess[2] = $('input:radio[name="que2"]:checked').val();
    userGuess[3] = $('input:radio[name="que3"]:checked').val();
    userGuess[4] = $('input:radio[name="que4"]:checked').val();
 //For looping guesses  
    for(var i=0; i<userGuess.length; i++){
    
    //Creating logic for results page
      if(userGuess[i] === answers[i]){
       correctAnswers++;
       console.log(correctAnswers);
      } else if(userGuess[i] == undefined){
        unanswered++;
      } else {
        wrongAnswers++;
       }

    }

    //displaying results 
      $("#correct").html("Number of questions you got correct: " + correctAnswers);
      $("#wrong").html("Number of questions you got wrong: " + wrongAnswers);
      $("#unanswered").html("Number of questions unanswered: " + unanswered);
      $(".results").show();
    }





      });