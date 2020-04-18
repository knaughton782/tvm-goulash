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
function ex_1(choice) {
  if (choice == "optA") {
    return `Correct!`;
  } else {
    return `Please check your answer and try again.`;
  }
}
function exercise_1() {
  var choice;
  if (document.getElementById('pva-ex1').checked) {
    choice = document.getElementById('pva-ex1').value;
  } else if (document.getElementById('pv-ex1').checked) {
    choice = document.getElementById('pv-ex1').value;
  } else if (document.getElementById('combine-ex1').checked) {
    choice = document.getElementById('combine-ex1').value;
  }

  var ans = ex_1(choice);

  document.getElementById('answer-ex1').innerHTML = ans;
}
/* ******** end exercise 1 *********** */



/* ******** for exercise 2 *********** */
function ex_2(pva, cf, interest, time, cmpd) {
  if (cf == 100 && interest == .04 && time == 10 && cmpd == 2) {
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_2() {
  var pva = parseFloat(document.getElementById('pva-ex2').value);
  pva.toFixed(2);
  var cf = parseFloat(document.getElementById('cf-ex2').value);
  cf.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex2').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex2').value;
  var cmpd = document.getElementById('cmpd-ex2').value;
  var ans = ex_2(pva, cf, interest, time, cmpd);

  document.getElementById('answer-ex2').innerHTML = ans;
}
/* ******** end exercise 2 *********** */



/* ******** for exercise 3 *********** */
function ex_3(pva) {
  if (pva == 1635.14) {
    return `Correct! The future value is $1635.14.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_3() {
  var pva = parseFloat(document.getElementById('pva-ex3').value);
  pva.toFixed(2);
  var ans = ex_3(pva);

  document.getElementById('answer-ex3').innerHTML = ans;
}
/* ******** end exercise 3 *********** */




/* ******** for exercise 4 *********** */
function ex_4(pv, interest, time, cmpd) {
  if (pv == 1635.14 && interest == 0.04 && time == 1 && cmpd == 2) {
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_4() {
  var pv = parseFloat(document.getElementById('pv-ex4').value);
  pv.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex4').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex4').value;
  var cmpd = document.getElementById('cmpd-ex4').value;
  var ans = ex_4(pv, interest, time, cmpd);

  document.getElementById('answer-ex4').innerHTML = ans;
}
/* ******** end exercise 4 *********** */



/* ******** for exercise 5 *********** */
function ex_5(pva) {
  if (pva == 1667.87) {
    return `Correct! The future value is $1667.87.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_5() {
  var pva = parseFloat(document.getElementById('pva-ex5').value);
  pva.toFixed(2);
  var ans = ex_5(pva);

  document.getElementById('answer-ex5').innerHTML = ans;
}
/* ******** end exercise 5 *********** */




/* ******** for exercise 6 *********** */
function ex_6(choice) {
  if (choice == "optA") {
    return `Correct!`;
  } else {
    return `Please check your answer and try again.`;
  }
}
function exercise_6() {
  var choice;
  if (document.getElementById('pva-ex6').checked) {
    choice = document.getElementById('pva-ex6').value;
  } else if (document.getElementById('pv-ex6').checked) {
    choice = document.getElementById('pv-ex6').value;
  } else if (document.getElementById('combine-ex6').checked) {
    choice = document.getElementById('combine-ex6').value;
  }

  var ans = ex_6(choice);

  document.getElementById('answer-ex6').innerHTML = ans;
}
/* ******** end exercise 6 *********** */




/* ******** for exercise 7 *********** */
function ex_7(pva, cf, interest, time, cmpd) {
  if (cf == 25 && interest == .08 && time == 20 && cmpd == 4) {
    return `Your variables are correct!`;
  } else {
    console.log('no here');
    return `Please check your variables and try again.`;
  }
}
function exercise_7() {
  var pva = parseFloat(document.getElementById('pva-ex7').value);
  pva.toFixed(2);
  var cf = parseFloat(document.getElementById('cf-ex7').value);
  cf.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex7').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex7').value;
  var cmpd = document.getElementById('cmpd-ex7').value;

  var ans = ex_7(pva, cf, interest, time, cmpd);

  document.getElementById('answer-ex7').innerHTML = ans;
}
/* ******** end exercise 7 *********** */




/* ******** for exercise 8 *********** */
function ex_8(pva) {
  if (pva == 1013.49) {
    return `That is correct!`;
  } else {
    return `Check your math and try again.`;
  }
}
function exercise_8() {
  var pva = parseFloat(document.getElementById('pva-ex8').value);
  pva.toFixed(2);

  var ans = ex_8(pva);

  document.getElementById('answer-ex8').innerHTML = ans;
}
/* ******** end exercise 8 *********** */



/* ******** for exercise 9 *********** */
function ex_9(choice) {
  if (choice == "optA") {
    return `Correct! `;
  }
  else {
    console.log('no here');
    return `Please try again.`;
  }
}
function exercise_9() {
  var choice;
  if (document.getElementById('pva-ex9').checked) {
    choice = document.getElementById('pva-ex9').value;
  } else if (document.getElementById('pv-ex9').checked) {
    choice = document.getElementById('pv-ex9').value;
  } else if (document.getElementById('combine-ex9').checked) {
    choice = document.getElementById('combine-ex9').value;
  }

  var ans = ex_9(choice);

  document.getElementById('answer-ex9').innerHTML = ans;
}
/* ******** end exercise 9 *********** */




/* ******** for exercise 10 *********** */
function ex_10(pva, interest, time, cmpd) {
  if (pva == 19000 && interest == .06 && time == 30 && cmpd == 12) {
    return `Your variables are correct!`;
  } else {
    console.log('no here');
    return `Please check your variables and try again.`;
  }
}
function exercise_10() {
  var pva = parseFloat(document.getElementById('pva-ex10').value);
  pva.toFixed(2);
  // var cf = parseFloat(document.getElementById('cf-ex10').value);
  // cf.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex10').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex10').value;
  var cmpd = document.getElementById('cmpd-ex10').value;

  var ans = ex_10(pva, interest, time, cmpd);

  document.getElementById('answer-ex10').innerHTML = ans;
}
/* ******** end exercise 10 *********** */



/* ******** for exercise 11 *********** */
function ex_11(cf) {
  if (cf == 1139.15) {
    return `That is correct!`;
  } else {
    return `Check your math and try again.`;
  }
}
function exercise_11() {
  var cf = parseFloat(document.getElementById('cf-ex11').value);
  cf.toFixed(2);

  var ans = ex_11(cf);

  document.getElementById('answer-ex11').innerHTML = ans;
}
/* ******** end exercise 11 *********** */



/* ******** for exercise 12 *********** */
function ex_12(choice) {
  if (choice == "optC") {
    return `Correct!`;
  } else {
    return `Please check your answer and try again.`;
  }
}
function exercise_12() {
  var choice;
  if (document.getElementById('pva-ex12').checked) {
    choice = document.getElementById('pva-ex12').value;
  } else if (document.getElementById('pv-ex12').checked) {
    choice = document.getElementById('pv-ex12').value;
  } else if (document.getElementById('combine-ex12').checked) {
    choice = document.getElementById('combine-ex12').value;
  }

  var ans = ex_12(choice);

  document.getElementById('answer-ex12').innerHTML = ans;
}
/* ******** end exercise 12 *********** */




/* ******** for exercise 13 *********** */
function ex_13(pva, cf, interest, time, cmpd) {
  if (cf == 100 && interest == .05 && time == 6 && cmpd == 1) {
    return `Your variables are correct!`;
  } else {
    console.log('no here');
    return `Please check your variables and try again.`;
  }
}
function exercise_13() {
  var pva = parseFloat(document.getElementById('pva-ex13').value);
  pva.toFixed(2);
  var cf = parseFloat(document.getElementById('cf-ex13').value);
  cf.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex13').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex13').value;
  var cmpd = document.getElementById('cmpd-ex13').value;

  var ans = ex_13(pva, cf, interest, time, cmpd);

  document.getElementById('answer-ex13').innerHTML = ans;
}
/* ******** end exercise 13 *********** */




/* ******** for exercise 14 *********** */
function ex_14(pva) {
  if (pva == 507.57) {
    return `That is correct!`;
  } else {
    return `Check your math and try again.`;
  }
}
function exercise_14() {
  var pva = parseFloat(document.getElementById('pva-ex14').value);
  pva.toFixed(2);

  var ans = ex_14(pva);

  document.getElementById('answer-ex14').innerHTML = ans;
}
/* ******** end exercise 14 *********** */



/* ******** for exercise 15 *********** */
function ex_15(pva, fv, interest, time, cmpd) {
  if (fv == 1000 && interest == .05 && time == 6 && cmpd == 1) {
    return `Your variables are correct!`;
  } else {
    console.log('no here');
    return `Please check your variables and try again.`;
  }
}
function exercise_15() {
  var pva = parseFloat(document.getElementById('pva-ex15').value);
  pva.toFixed(2);
  var fv = parseFloat(document.getElementById('fv-ex15').value);
  fv.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex15').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex15').value;
  var cmpd = document.getElementById('cmpd-ex15').value;

  var ans = ex_15(pva, fv, interest, time, cmpd);

  document.getElementById('answer-ex15').innerHTML = ans;
}
/* ******** end exercise 15 *********** */



/* ******** for exercise 16 *********** */
function ex_16(pv) {
  if (pv == 746.22) {
    return `That is correct!`;
  } else {
    return `Check your math and try again.`;
  }
}
function exercise_16() {
  var pv = parseFloat(document.getElementById('pv-ex16').value);
  pv.toFixed(2);

  var ans = ex_16(pv);

  document.getElementById('answer-ex16').innerHTML = ans;
}
/* ******** end exercise 16 *********** */




/* ******** for exercise 17 *********** */
function ex_17(pv) {
  if (pv == 1253.79) {
    return `That is correct!`;
  } else {
    return `Check your math and try again.`;
  }
}
function exercise_17() {
  var pv = parseFloat(document.getElementById('pv-ex17').value);
  pv.toFixed(2);

  var ans = ex_17(pv);

  document.getElementById('answer-ex17').innerHTML = ans;
}
/* ******** end exercise 17 *********** */
