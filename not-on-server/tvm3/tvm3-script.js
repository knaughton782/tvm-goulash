$(document).ready(function () {


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
      $('.allSlides .slide:first').show(); //wraps around and shows first slide again
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

  // for each click on the skip button, hide the current slide and show the next one with the land class
  $('.skip').click(function () {
    // console.log('skip clicked');
    if ($('.allSlides .slide:visible').next().length != 0) {
      // console.log('did this one go?');
      $('.allSlides .slide:visible')
        .nextUntil('div.stop')
        .show()
        .prev()
        .hide();
      console.log('skip to stop triggered');
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:first').show(); //wraps around and shows first slide again
    }
    return false;
  });


  // for each click on the skipback button, hide the current slide and show the previous one with the landback class
  $('.skipBack').click(function () {
    // console.log('skip clicked');
    if ($('.allSlides .slide:visible').next().length != 0) {
      // console.log('did this one go?');
      $('.allSlides .slide:visible')
        .prevUntil('div.stopBack')
        .show()
        .next()
        .hide();
      console.log('skip to stop triggered');
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:first').show(); //wraps around and shows first slide again
    }
    return false;
  });

});


/* ************************************* */
/* ****************** for EXERCISES PAGE ******************* */
/* ******** for exercise 1 *********** */
function ex_1(cf, interest, time, compound) {
  if (cf == 1200 && interest == 0.08 && time == 20 && compound == 1) {
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_1() {
  var cf = parseFloat(document.getElementById('cf-ex1').value);
  cf.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex1').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex1').value;
  var compound = document.getElementById('cmpd-ex1').value;
  var ans = ex_1(cf, interest, time, compound);

  document.getElementById('answer-ex1').innerHTML = ans;
}
/* ******** end exercise 1 *********** */


/* ******** for exercise 2 *********** */
function ex_2(FV) {
  if (FV == 54914.36) {
    return `Correct! The FVA is $54,914.36.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_2() {
  var FV = parseFloat(document.getElementById('fv-ex2').value);
  FV.toFixed(2);
  var ans = ex_2(FV);

  document.getElementById('answer-ex2').innerHTML = ans;
}
/* ******** end exercise 2 *********** */


/* ******** for exercise 3 *********** */
function ex_3(FV, cf, interest, time, compound) {
  if (cf == 100 && interest == 0.08 && time == 20 && compound == 12) {
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_3() {
  var FV = parseFloat(document.getElementById('fv-ex3').value);
  FV.toFixed(2);
  var cf = parseFloat(document.getElementById('cf-ex3').value);
  cf.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex3').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex3').value;
  var compound = document.getElementById('cmpd-ex3').value;
  var ans = ex_3(FV, cf, interest, time, compound);

  document.getElementById('answer-ex3').innerHTML = ans;
}
/* ******** end exercise 3 *********** */



/* ******** for exercise 4 *********** */
function ex_4(FV) {
  if (FV == 58902.04) {
    return `Correct! The future value is $58,902.04.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_4() {
  var FV = parseFloat(document.getElementById('fv-ex4').value);
  FV.toFixed(2);
  var ans = ex_4(FV);

  document.getElementById('answer-ex4').innerHTML = ans;
}
/* ******** end exercise 4 *********** */



/* ******** for exercise 5 *********** */
function ex_5(FV) {
  if (FV == 59307.51) {
    return `Correct! The future value is $59,307.51.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_5() {
  var FV = parseFloat(document.getElementById('fv-ex5').value);
  FV.toFixed(2);
  var ans = ex_5(FV);

  document.getElementById('answer-ex5').innerHTML = ans;
}
/* ******** end exercise 5 *********** */




/* ******** for exercise 6 *********** */
function ex_6(fva, fvb, fvc) {
  if (fva == 27133.95 && fvb == 26780.37 && fvc == 263.58) {
    return `Correct! The FVA of the weekly option is $27,133.95.<br />
    The FVA of the bi-weekly option is $26,780.37.<br />
    And the difference is $263.58.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_6() {
  var fva = parseFloat(document.getElementById('fv-ex6a').value);
  fva.toFixed(2);
  var fvb = parseFloat(document.getElementById('fv-ex6b').value);
  fvb.toFixed(2);
  var fvc = parseFloat(document.getElementById('fv-ex6c').value);
  fvc.toFixed(2);
  var ans = ex_6(fva, fvb, fvc);

  document.getElementById('answer-ex6').innerHTML = ans;
}
/* ******** end exercise 6 *********** */
