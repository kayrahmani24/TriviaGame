$(document).ready(function() {


var intervalId;

var questions = ["What year were the Chicago Bulls formed?", "Who was the bulls first pick of the 2011 draft?", "Who is the Bulls all time leading scorer" ];

var answers = ["1966", "Derrick Rose", "6", "72", "Michael Jordan"];

var userGuess = [];

var number = 23;

var correctAnswers = 0;

var wrongAnswers = 0;

var unanswered = 0;

var div = $("<div></div>");

$(".comeBack").hide();
$("#show-number").hide();
$(".results").hide();

 function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
     
      number--;
     
      $("#show-number").html("<h2> Seconds Remaining: " + number + "</h2>");

     
      if (number === 0) {
        

        results();
        
      }
    }

$("#start").on("click", function() {
        $("#firstToGo").hide(1000);
        run();
        $(".comeBack").show(1000);
       
        $("#show-number").show();

});

$("#results-main").on("click", function(){
  results();
});

function results (){
clearInterval(intervalId);
$(".comeBack").hide(1000);

    userGuess[0] = $('input:radio[name="que0"]:checked').val();
    console.log(userGuess[0]);
    userGuess[1] = $('input:radio[name="que1"]:checked').val();
    console.log(userGuess[1]);
    userGuess[2] = $('input:radio[name="que2"]:checked').val();
    userGuess[3] = $('input:radio[name="que3"]:checked').val();
    userGuess[4] = $('input:radio[name="que4"]:checked').val();
    for(var i=0; i<userGuess.length; i++){
    
    
      if(userGuess[i] === answers[i]){
       correctAnswers++;
       console.log(correctAnswers);
      } else if(userGuess[i] == undefined){
        unanswered++;
      } else {
        wrongAnswers++;
       }

    }
      $("#correct").html("Number of questions you got correct: " + correctAnswers);
      $("#wrong").html("Number of questions you got wrong: " + wrongAnswers);
      $("#unanswered").html("Number of questions unanswered: " + unanswered);
      $(".results").show();
    }





/*$(document).on("click","input[name=que1]:radio",function(){
    userGuess = $("input:radio[name=que1]:checked").val();
    if (userGuess == "Derrick Rose") {
      correctAnswers++;
      $("#correct").html(correctAnswers);
    }else if (userGuess !== "Derrick Rose") {
     wrongAnswers--;
     $("#wrong").html(wrongAnswers);
    }else {
      unanswered++;
      $("#unanswered").html(unanswered);
    }
 */
      });