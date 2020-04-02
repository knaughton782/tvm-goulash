$(document).ready(function () {

  // for anchor tags
  // if (window.location.hash) {
  //   var slide7 = window.location.hash.substring(1);
  //   $("#slide7" + slide7).trigger('click');
  // }
  /** continue/back BUTTON FUNCTIONALITY  **/

  /** HIDE ALL SLIDES EXCEPT CURRENT, starts with first slide **/

  // $('.allSlides .slide').each(function (e) {
  //   if (e != 0) {
  //     $(this).hide();
  //   }
  // });

  // for each click on the continue button, hide the current slide and show the next one
  $('.continue').click(function () {
    if ($('.allSlides .slide:visible').next().length != 0) {
      $('.allSlides .slide:visible')
        .next()
        .show()
        .prev()
        .hide();
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:first').show();
    }
    return false;
  });

  // for each click on the back button, hide the current slide and show the previous one
  $('.back').click(function () {
    if ($('.allSlides .slide:visible').prev().length != 0) {
      $('.allSlides .slide:visible')
        .prev()
        .show()
        .next()
        .hide();
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:last').show();
    }
    return false;
  });
  /** END Back / Continue Button Functionality ****************/

});

// future value calculation is FV = PV(1 + i)^time

function FV(principal, interest, time) {
  // console.log(interest = "this");
  if (principal == 100 && interest == .10 && time == 10) {
    var answer = principal * Math.pow((1 + interest), time);
    return "The future value is $" + answer.toFixed(2) + ". Good job!";
  } else {
    return answer = "Please check your variables and try again."
  }
}


function calc_FV() {

  var principal = parseFloat(document.getElementById('pvalue').value);
  principal.toFixed(2);
  console.log("principal = " + principal);

  var FV = document.getElementById('FV').value;

  var interest = parseFloat(document.getElementById('int').value);
  interest.toFixed(2);

  console.log("interest = " + interest);

  var time = document.getElementById('yrs').value;
  console.log("time = " + time);

  var ans = FV(principal, interest, time);

  document.getElementById('answer').innerHTML = ans;
}


/* ******************* for test quiz *******************************************************************************************************************************************************************************************************************************

*********************************** */


(function () {

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  const myQuestions = [
    {
      question: `<div class='question'>"Who is the strongest?"</div>`,
      answers: {
        a: `<div class='answer'>"Superman"</div>`,
        b: `<div class='answer'>"The Terminator"</div>`,
        c: `<div class='answer'>"Waluigi, obviously"</div>`
      },
      correctAnswer: "c"
    },
    {
      question: `<div class='question'>"What is the best site ever created?"</div>`,
      answers: {
        a: `<div class='answer'>"SitePoint"</div>`,
        b: `<div class='answer' >"Simple Steps Code"</div>`,
        c: `<div class='answer'>"Trick question; they're both the best"</div>`
      },
      correctAnswer: "c"
    },
    {
      question: `<div class='question'>"Where is Waldo really?"</div>`,
      answers: {
        a: `<div class='answer' >"Antarctica"</div>`,
        b: `<div class='answer'>"Exploring the Pacific Ocean"</div>`,
        c: `<div class='answer' >"Sitting in a tree"</div>`,
        d: `<div class='answer'>"Minding his own business, so stop asking"</div>`
      },
      correctAnswer: "d"
    }
  ];



  function buildQuiz() {

    //store html output
    const output = [];

    //for each question
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        //share the list of answer choices
        const answers = [];

        //and for each answer
        for (letter in currentQuestion.answers) {

          //add an html radio button 
          answers.push(
            `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>`
          );
        }
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join(' ')}</div>`
        );
      }
    );
    //finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join(' ');
  };



  function showResults() {

    // gather answer containers from the quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user answers
    let numCorrect = 0;

    // for each question
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question' + questionNumber + ']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answer
          numCorrect++;

          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else {
          // if answer is wrong or blank color answer red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
    // show number correct out of total
    resultsContainer.innerHTML = numCorrect + ' correct out of ' + myQuestions.length;
  }

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener('click', showResults);


})();
