// Global Variables/Arrays/Objects //
// ========================================================== //

    // Variables //
    // ========================================================== //
        
        var correct = 0;
        var wrong = 0;
        // var questionOne = gameStarted();
        // var questionTwo = gameQuestionTwo();

    // Arrays //
    // ========================================================== //

    var gameQuestions = ["Who is the only President to serve more than eight years?", "Abraham Lincoln is part of Mt. Rushmore", "", "", ""];
    var possibleAnswers = [["1. George Washington", "<br>", "2.Franklin Roosevelt", "<br>", "3.Andrew Jackson"], ["1. True", "<br>", "2. False", "<br>", ""], ["", "", ""], ["", "", ""], ["", "", ""]];
    var rightAnswer = ["Franklin Roosevelt", "True", "", "", ""];

    // Objects //
    // ========================================================== //

       

// Functions //
// ========================================================== //

    // Initial Page Load //
    // ========================================================== //
    
        function pageLoad () {
            $(".gameTitle").html("Presidential Memory")
            $(".gameTimer").html("This is a quiz to test your Presidential knowledge!")
            $(".gameQuestions").html("You have 12 seconds to answer each question. Click below to get started. Good luck!")
            $(".startGameButtonDiv").on("click", gameStarted)
        }

    // Game Started / Question #1 //
    // ========================================================== //

        function gameStarted() {
            $(".gameTitle").html("Presidential Memory")
            // $(".gameTimer")            
            $(".gameQuestions").html(gameQuestions[0])
            $(".startGameButtonDiv").html("")
            $(".possibleOne").prop('value', possibleAnswers[0.0]);
            $(".possibleTwo").val(possibleAnswers[0.1])
            $(".possibleThree").val(possibleAnswers[0.2])

            
        }

    // Question Two //
    // ========================================================== //
    
        function gameQuestionTwo() {
            $(".gameTitle").html("Presidential Memory")
            // $(".gameTimer")            
            $(".gameQuestions").html(gameQuestions[1])
            $(".startGameButtonDiv").html("")
            $(".possibleOne").html(possibleAnswers[1.0])
            $(".possibleTwo").html(possibleAnswers[1.1])
            $(".possibleThree").html(possibleAnswers[1.2])
        }
        

// Main Process //
// ========================================================== //

    pageLoad()
    // $("possibleTwo").on("click", gameQuestionTwo)