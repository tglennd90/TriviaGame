// Global Variables/Arrays/Objects //
// ========================================================== //

    // Variables //
    // ========================================================== //

        var gameTitle = $(".gameTitle")
        var gameTimer = $(".gameTimer")
        var gameQuestions = $(".gameQuestions")
        
        var correct = 0;
        var wrong = 0;        

        var questionTime = 12;

    // Arrays //
    // ========================================================== //

        // var gameQuestions = ["Who is the only President to serve more than eight years?", "Abraham Lincoln is part of Mt. Rushmore", "", "", ""];
        // var possibleAnswers = [["1. George Washington", "2.Franklin Roosevelt", "3.Andrew Jackson"], ["1. True", "<br>", "2. False", "<br>", ""], ["", "", ""], ["", "", ""], ["", "", ""]];
        // var rightAnswer = ["Franklin Roosevelt", "True", "", "", ""];

        var quizQuestions = [
            {
                question: "Who is the only President to serve more than eight years?" + "<br><br>" + "A. George Washington" + "<br>" + "B. Franklin Roosevelt" + "<br>" + "C. Andrew Jackson",
                answer: "b"
            },
            {
                question: "Which of these Presidents is on Mt. Rushmore?" + "<br>" + "A. George Bush" + "<br>" + "B. John Adams" + "<br>" + "C. Abraham Lincoln",
                answer: "c"
            },
            {
                question: "Who held office when humans first walked on the moon?"  + "<br>" + "A. Lyndon B. Johnson" + "<br>" + "B. Richard Nixon" + "<br>" + "C. John F. Kennedy",
                answer: "b"
            },
        ]

        var userAnswer = [];

    // Objects //
    // ========================================================== //

       

// Functions //
// ========================================================== //

    // Initial Page Load //
    // ========================================================== //
    
        function pageLoad () {
            $(".gameTitle").html("Presidential Memory")
            $(".gameTimer").html("This is a quiz to test your Presidential knowledge!")
            $(".gameQuestions").html("You have 12 seconds to answer each question. Click anywhere to get started. Good luck!")
            
            $(window).on("click", gameStarted)
        }

    // Game Started //
    // ========================================================== //

        function gameStarted() {            
            $(".gameTitle").html("Presidential Memory")
            // $(".gameTimer")            
            $(".gameQuestions").html(array[0].question)
            
            

            for (var i = 0; i < array.length; i++) {
                
                if (userAnswer == array[i].answer) {
                    console.log("you win")
                }
                
            }
        }

    
        

// Main Process //
// ========================================================== //

    pageLoad()
    