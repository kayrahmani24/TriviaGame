$(document).ready(function() {


var intervalId;

var questions = ["What year were the Chicago Bulls formed?", "Who was the bulls first pick of the 2011 draft?", "Who is the Bulls all time leading scorer" ];

var answers = ["1966", "Derrick Rose", "Michael Jordan", "72"];

var userGuess = [];

var number = 23;

var correctAnswers = 0;

var wrongAnswers = 0;

var unanswered = 0;

var div = $("<div></div>");

$(".comeBack").hide();
$("#show-number").hide();

 function run() {
      intervalId = setInterval(decrement, 1000);
    }

    
    function decrement() {

     
      number--;

     
      $("#show-number").html("<h2>" + number + "</h2>");


     
      if (number === 0) {

     
        

        alert("nice try kenny")
        //results();
      }
    }

$("button").on("click", function() {
        $("#firstToGo").hide(1000);
        run();
        $(".comeBack").show(1000);
       
        $("#show-number").show();





});



 
      });
 
