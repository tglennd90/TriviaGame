// Global Variables/Arrays/Objects //
// ========================================================== //

    // HTML Element Grabbers //
    // ========================================================== //

        var startQuiz = $("#startQuiz");       
        var contentArea = $("#contentArea");
        var questionImage = $("#questionImage");
        var question = $("#question");
        var questionTimer = $("#questionTimer");
        var timeCount = $("#timeCount");
        var gaugeBackground = $("#gaugeBackground");
        var gauge = $("#gauge");
        var answerChoices = $("#answerChoices");
        var a = $("#A");
        var b = $("#B");
        var c = $("#C");
        var progressBar = $("#progressBar");
        var quizResults = $("#quizResults");

    // Arrays //
    // ========================================================== //

        var quizQuestions = [
            {
                question: "Who is the only President to serve more than eight years?",
                image: "assets/images/house.jpg",
                choiceA: "George Washington",
                choiceB: "Franklin Roosevelt",
                choiceC: "Andrew Jackson",
                answer: "B",
            },
            {
                question: "Which of these Presidents is on Mt. Rushmore?",
                image: "assets/images/mount.jpg",
                choiceA: "George Bush",
                choiceB: "John Adams",
                choiceC: "Abraham Lincoln",
                answer: "C",
            },
            {
                question: "Who held office when humans first walked on the moon?",
                image: "assets/images/moon.jpg",
                choiceA: "Lyndon B. Johnson",
                choiceB: "Richard Nixon",
                choiceC: "John F. Kennedy",
                answer: "B",
            }
        ]

    // Variables //
    // ========================================================== //

        var currentQuizIndex = 0;
        var lastQuizIndex = quizQuestions.length - 1;

        var questionTime = 12;
        var gaugeWidth = 150;
        var count = 12;
        var gaugeProgressUnit = gaugeWidth/questionTime;

        var TIMER; 
  
        var score = 0;

// Functions //
// ========================================================== //

    // Initial Page Load //
    // ========================================================== //
    
        startQuiz.on("click", startGame)

        function startGame() {

            document.getElementById("startQuiz").style.display = "none";
            getQuestion()
            document.getElementById("contentArea").style.display = "block";
            progressRender();
            counterRender();
            TIMER = setInterval(counterRender, 1000);
        }

    // Question Loop //
    // ========================================================== //

        function getQuestion() {            
            var q = quizQuestions[currentQuizIndex];

            document.getElementById("questionImage").innerHTML = "<img src=" + q.image + ">";
            document.getElementById("question").innerHTML = "<p>" + q.question + "</p>";
            document.getElementById("A").innerHTML = q.choiceA;
            document.getElementById("B").innerHTML = q.choiceB;
            document.getElementById("C").innerHTML = q.choiceC;  
        }

    // Progress Render //
    // ========================================================== //

        function progressRender() {

            for (var qIndex = 0; qIndex <= lastQuizIndex; qIndex++) {
                
                document.getElementById("progressBar").innerHTML += "<div class='progress' id=" + qIndex + "></div>";

            }

        }    

    // Counter Render //
    // ========================================================== //

        function counterRender() {

            if (count <= questionTime) {

                document.getElementById("timeCount").innerHTML = count;
                document.getElementById("gauge").style.width = count * gaugeProgressUnit + "px";
                count--;

            } else {

                count = 12;
                answerIsIncorrect()

                if (currentQuizIndex < lastQuizIndex) {

                    currentQuizIndex++;
                    count = 12;
                    getQuestion();

                } else {

                    clearInterval(TIMER);
                    scoreRender();

                }

            }

            if (count === -1) {

                answerIsIncorrect()
                count = 12;
                
                if (currentQuizIndex < lastQuizIndex) {

                    currentQuizIndex++;
                    count = 12;
                    getQuestion();

                } else {

                    clearInterval(TIMER);
                    scoreRender();

                }

            }

        }

    // Check Answer //
    // ========================================================== //

        function checkAnswer(answer) {

            if (answer === quizQuestions[currentQuizIndex].answer) {

                score++;
                answerIsCorrect();

            } else {

                answerIsIncorrect();

            }

            count = 12;

            if (currentQuizIndex < lastQuizIndex) {

                currentQuizIndex++;
                getQuestion();

            } else {

                clearInterval(TIMER);
                scoreRender();

            }

        }

    // Correct / Incorrect Answers //
    // ========================================================== //

        function answerIsCorrect() {

            document.getElementById(currentQuizIndex).style.backgroundColor = "#0f0";

        }

        function answerIsIncorrect() {
            
            document.getElementById(currentQuizIndex).style.backgroundColor = "#f00";

        }

    // Score Render //
    // ========================================================== //

        function scoreRender() {

            document.getElementById("contentArea").style.display = "none";

            document.getElementById("quizResults").style.display = "block";

            var scorePercent = Math.round(100 * score / quizQuestions.length);

            document.getElementById("quizResults").innerHTML = "<p>" + scorePercent + "%</p>"

            if (scorePercent === 100) {

                document.getElementById("quizResults").style.backgroundColor = "green";

            } else if (scorePercent === 67) {

                document.getElementById("quizResults").style.backgroundColor = "yellow";

            } else {

                document.getElementById("quizResults").style.backgroundColor = "red";

            }
        }



   

    