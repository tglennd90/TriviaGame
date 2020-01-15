// Global Variables/Arrays/Objects //
// ========================================================== //

    // Variables //
    // ========================================================== //
        
        var correct = 0;
        var wrong = 0;

    // Arrays //
    // ========================================================== //



    // Objects //
    // ========================================================== //

        var gameQuestions = ["Who is the only President to serve more than eight years?", "", "", "", ""];
        var possibleAnswers = [["1. George Washington", "<br>", "2.Franklin Roosevelt", "<br>", "3.Andrew Jackson"], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]];
        var rightAnswer = ["Franklin Roosevelt", "", "", "", ""];

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

    // Game Started //
    // ========================================================== //

        function gameStarted() {
            $(".gameTitle").html("Presidential Memory")
            // $(".gameTimer")            
            $(".gameQuestions").html(gameQuestions[0])
            $(".startGameButtonDiv").html("")
            $(".possibleOne").html(possibleAnswers[0.0])
            $(".possibleTwo").html(possibleAnswers[0.1])
            $(".possibleThree").html(possibleAnswers[0.2])
        }

    // Answer Clicks //
    // ========================================================== //
    
        

// Main Process //
// ========================================================== //

    pageLoad()