$(document).ready(function () {



/* ******** for exercise 4 *********** */
function ex_4(principal, FV, interest, time, compound) {
  if (principal == 500 && interest == 0.02 && time == 1 && compound == 4) {
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_4() {
  var principal = parseFloat(document.getElementById('pvalue-ex4').value);
  principal.toFixed(2);
  var FV = parseFloat(document.getElementById('fvalue-ex4').value);
  FV.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex4').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex4').value;
  var compound = document.getElementById('cmpd-ex4').value;
  var ans = ex_4(principal, FV, interest, time, compound);

  document.getElementById('answer-ex4').innerHTML = ans;
}
/* ******** end exercise 4 *********** */


/* ******** for exercise 5 *********** */
function ex_5(FV) {
  if (FV == 510.08) {
    return `Correct! The future value is $510.08.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_5() {
  var FV = parseFloat(document.getElementById('fvalue-ex5').value);
  FV.toFixed(2);
  var ans = ex_5(FV);

  document.getElementById('answer-ex5').innerHTML = ans;
}
/* ******** end exercise 5 *********** */


/* ******** for exercise 6 *********** */
function ex_6(interest, compound) {
  if (interest == 0.06 && compound == 12) {
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_6() {
  var interest = parseFloat(document.getElementById('int-ex6').value);
  interest.toFixed(2);
  var compound = document.getElementById('cmpd-ex6').value;
  var ans = ex_6(interest, compound);

  document.getElementById('answer-ex6').innerHTML = ans;
}
/* ******** end exercise 6 *********** */


/* ******** for exercise 7 *********** */
function ex_7(ear) {
  if (ear == 6.17) {
    return `Correct! The EAR is 6.17%.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_7() {
  var ear = parseFloat(document.getElementById('ear-ex7').value);
  ear.toFixed(2);
  var ans = ex_7(ear);

  document.getElementById('answer-ex7').innerHTML = ans;
}
/* ******** end exercise 7 *********** */



/* ******** for exercise 8 *********** */
function ex_8(optionA_int, optionA_compound, optionB_int, optionB_compound) {
  if (optionA_int == .10 && optionA_compound == 2 && optionB_int == .1025 && optionB_compound == 2) {
    return `Your variables are correct!`;
  } else if (optionA_int != .10 || optionA_compound != 2) {
    return `Check your variables for Option A and try again.`;
  } else if (optionB_int != .1025 || optionB_compound != 2) {
    return `Check your variables for Option B and try again.`;
  }
}
function exercise_8() {
  var optionA_int = parseFloat(document.getElementById('int-ex8a').value);
  optionA_int.toFixed(2);
  var optionA_compound = parseFloat(document.getElementById('cmpd-ex8a').value);

  var optionB_int = parseFloat(document.getElementById('int-ex8b').value);
  optionB_int.toFixed(4);
  var optionB_compound = document.getElementById('cmpd-ex8b').value;

  var ans = ex_8(optionA_int, optionA_compound, optionB_int, optionB_compound);

  document.getElementById('answer-ex8').innerHTML = ans;
}
/* ******** end exercise 4 *********** */



/* ******** for exercise 9 *********** */
function ex_9(earA, earB) {
  if (earA == 10.52 && earB == 10.51) {
    return `Correct! The EAR for Option A is 10.52% and the EAR for Option B is 10.51%.`;
  }
  else if (earA != 10.52) {
    return `Please check your math for Option A and try again.`
  }
  else if (earB != 10.51) {
    return `Please check your math for Option B and try again.`
  }
  else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_9() {
  var earA = parseFloat(document.getElementById('ear-ex9a').value);
  earA.toFixed(2);
  var earB = parseFloat(document.getElementById('ear-ex9b').value);
  earB.toFixed(2);
  var ans = ex_9(earA, earB);

  document.getElementById('answer-ex9').innerHTML = ans;
}
/* ******** end exercise 9 *********** */


/* ******** for exercise 10 *********** */
function ex_10(ear) {
  if (ear == "optA") {
    return `Correct! Option A is the better choice.`;
  } else {
    console.log('no here');
    return `Try again. That is not the best choice.`;
  }
}
function exercise_10() {
  var ear;
  if (document.getElementById('ear-ex10a').checked) {
    ear = document.getElementById('ear-ex10a').value;
  } else if (document.getElementById('ear-ex10b').checked) {
    ear = document.getElementById('ear-ex10b').value;
  } else if (document.getElementById('ear-ex10c').checked) {
    ear = document.getElementById('ear-ex10c').value;
  }

  var ans = ex_10(ear);

  document.getElementById('answer-ex10').innerHTML = ans;
}
/* ******** end exercise 10 *********** */