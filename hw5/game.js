$( document ).ready(function() {


    $.fn.trivia = function() {
    var x = this;
    x.userPick = null;
    x.answers = {
        correct: 0,
        incorrect: 0
    };
    x.images = null;
    x.count = 30;
    x.current = 0;
    x.questions = [{
        question: "Who won the first superbowl ever?",
        choices: ["Green Bay Packers", "Oakland Raiders", "LA Lakers", "SF 49ers"],
        images: ["../images/Rajah.gif"],
        correct: 0
    }, {
        question: "How many championships have the Oakland Raiders won?",
        choices: ["4", "3", "1", "6"],
        correct: 1

    }, {
        question: "LeBron signing with the Miami Heat was called the.....?",
        choices: ["Mandate", "Request", "Decision", "Failure"],
        correct: 2

    }, {
        question: "Which team won the NBA title this past season?",
        choices: ["Lakers", "Heat", "Cavaliers", "Warriors"],
        correct: 3

    }, {
        question: "Was Peyton Manning the first pick the 1998 draft?",
        choices: ["Yes", "No"],
        correct: 0

    }, {
        question: "Who was drafed after Peyton Manning?",
        choices: ["Tom Brady", "Ryan Leaf", "Joe Montana", "Rich Gannon"],
        correct: 1

    }, {
        question: "Who has the most wins as a head coach in the NFL?",
        choices: ["George Halas", "Bill Belichick", "Jimmy Johnson", "Don Shula"],
        correct: 3

    }, {
        question: "Who is considered the greatest of all time in the NBA?",
        choices: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Shannon Sharpe"],
        correct: 0
    }, {
        question: "Which tema drafted Shannon Sharpe",
        choices: ["Steelers", "Raiders", "Ravens", "Broncos"],
        correct: 3
    }, {
        question: "What year did Shannon Sharpe have the most receieving yards?",
        choices: ["1997", "1992", "1992", "2003"],
        correct: 0
    }, {
        question: "How many superbowls did Shannon Sharpe win?",
        choices: ["1", "3", "2", "0"],
        correct: 1
    }, {
        question: "How many seasons did Shannon Sharpe play in the NFL?",
        choices: ["2", "14", "11", "22"],
        correct: 1
    }];
    x.ask = function() {
        if (x.questions[x.current]) {
            $("#timer").html("Time remaining: " + "00:" + x.count + " secs");
            $("#question_div").html(x.questions[x.current].question);
            var choicesArr = x.questions[x.current].choices;
            var buttonsArr = [];

            for (var i = 0; i < choicesArr.length; i++) {
                var button = $('<button>');
                button.text(choicesArr[i]);
                button.attr('data-id', i);
                $('#choices_div').append(button);
            }
            window.triviaCounter = setInterval(x.timer, 1000);
        } else {
            $('body').append($('<div />', {
                text: 'Unanswered: ' + (
                    x.questions.length - (x.answers.correct + x.answers.incorrect)),
                class: 'result'
            }));
            $('#start_button').text('Restart').appendTo('body').show();
        }
    };
    x.timer = function() {
        x.count--;
        if (x.count <= 0) {
            setTimeout(function() {
                x.nextQ();
            });

        } else {
            $("#timer").html("Time remaining: " + "00:" + x.count + " secs");
        }
    };
    x.nextQ = function() {
        x.current++;
        clearInterval(window.triviaCounter);
        x.count = 30;
        $('#timer').html("");
        setTimeout(function() {
            x.cleanUp();
            x.ask();
        }, 1000)
    };
    x.cleanUp = function() {
        $('div[id]').each(function(item) {
            $(this).html('');
        });
        $('.correct').html('Correct answers: ' + x.answers.correct);
        $('.incorrect').html('Incorrect answers: ' + x.answers.incorrect);
    };
    x.answer = function(correct) {
        var string = correct ? 'correct' : 'incorrect';
        x.answers[string]++;
        $('.' + string).html(string + ' answers: ' + x.answers[string]);
    };
    return x;
};
var Trivia;

$("#start_button").click(function() {
    $(this).hide();
    $('.result').remove();
    $('div').html('');
    Trivia = new $(window).trivia();
    Trivia.ask();
});

$('#choices_div').on('click', 'button', function(e) {
    var userPick = $(this).data("id"),
        x = Trivia || $(window).trivia(),
        index = x.questions[x.current].correct,
        correct = x.questions[x.current].choices[index];

    if (userPick !== index) {
        $('#choices_div').text("Wrong Answer! The correct answer was: " + correct);
        x.answer(false);
    } else {
        $('#choices_div').text("Correct!!! The correct answer was: " + correct);
        x.answer(true);
    }
    x.nextQ();
});

});
