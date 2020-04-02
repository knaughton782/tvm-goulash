$(document).ready(function () {


  /**** slide 2 content switching functionality ***/
  var intro = $('#intro');
  var learningObj = $('#learningObj');
  var prereqs = $('#prereqs');
  var requirements = $('#requirements');

  //default
  intro.show().addClass('selected');
  learningObj.hide();
  prereqs.hide();
  requirements.hide();

  function addIntro() {
    intro.show().addClass('selected');
    learningObj.hide();
    prereqs.hide();
    requirements.hide();
  }
  $('#introBtn').click(addIntro);

  function addlearningObj() {
    intro.hide();
    learningObj.show().addClass('selected');
    prereqs.hide();
    requirements.hide();
  }
  $('#learningObjBtn').click(addlearningObj);

  function addPrereqs() {
    intro.hide();
    learningObj.hide();
    prereqs.show().addClass('selected');
    requirements.hide();
  }
  $('#prereqsBtn').click(addPrereqs);

  function addRequirements() {
    intro.hide();
    learningObj.hide();
    prereqs.hide();
    requirements.show().addClass('selected');
  }
  $('#reqsBtn').click(addRequirements);
  /**** end slide 2 content switching ******/

  /****** slide 6 content switching *****/
  var defaultCondition = $('#defaultCondition');
  var PV = $('#PV');
  var time = $('#time');
  var interest = $('#interest');

  defaultCondition.show();
  PV.hide();
  time.hide();
  interest.hide();

  function addPV() {
    defaultCondition.hide();
    PV.show();
    time.hide();
    interest.hide();
  }
  $('#presentValueBtn').click(addPV);

  function addTime() {
    defaultCondition.hide();
    PV.hide();
    time.show();
    interest.hide();
  }
  $('#timeBtn').click(addTime);

  function addInterest() {
    defaultCondition.hide();
    PV.hide();
    time.hide();
    interest.show();
  }
  $('#interestBtn').click(addInterest);

  /***** end slide 6 content switching ********/

  /****** slide 19, help slide 6 button/content switching *****/
  var principals = $('#principals');
  var pemdas = $('#pemdas');
  var dist = $('#dist');
  var foil = $('#foil');

  principals.show();
  pemdas.hide();
  dist.hide();
  foil.hide();

  function showPemdas() {
    principals.hide();
    pemdas.show();
    dist.hide();
    foil.hide();
  }
  $('#pemdasBtn').click(showPemdas);

  function showDist() {
    principals.hide();
    pemdas.hide();
    dist.show();
    foil.hide();
  }
  $('#distBtn').click(showDist);

  function showFoil() {
    principals.hide();
    pemdas.hide();
    dist.hide();
    foil.show();
  }
  $('#foilBtn').click(showFoil);

  function showprincipals() {
    principals.show().addClass('selected');
    pemdas.hide();
    dist.hide();
    foil.hide();
  }
  $('#principalsBtn').click(showprincipals);

  /***** end slide 19 content switching ********/



  $('.btn-group-left').on('click', '.btn', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });







  // function FV(PV, i, n) {
  //   var x = (1 + i / 100)
  //   var FV = PV * (Math.pow(x, n))
  //   return FV;
  //   console.log("FV ran");
  // document.getElementById("answer").innerHTML = fv;
  // }

  // function getNumbers() {
  //   var pvalue = parseFloat(document.getElementById("pValue").value);
  //   var interest = parseFloat(document.getElementById("interest").value);
  //   var numYrs = parseInt(document.getElementById("numYrs").value);
  //   var fvalue = FV(pvalue, interest, numYrs);
  //   var fv = fvalue.toFixed(2);
  //   document.getElementById('answer').textContent = "The future value is= " + fv;
  //   console.log('calc FV ran 2');
  //document.getElementById('answer').innerHTML = "The future value is= " + fv;
  //console.log('calc FV ran 2');
  // }

}); // end document ready

// function getNumbers() {
//   var pvalue = parseFloat(document.getElementById("PV").value);
//   console.log(pvalue);
//   var int = parseFloat(document.getElementById("int").value);
//   console.log(int);
//   var numYrs = parseInt(document.getElementById("numYrs").value);
//   console.log(numYrs);
//   // var fvalue = parseFloat(document.getElementById('FV').value).toFixed(2);
//   // console.log(fvalue);

//   calculateFV(pvalue, int, numYrs);
// }

// function calculateFV(pvalue, int, numYrs) {
//   var x = (1 + int / 100);
//   var fvalue = pvalue * (Math.pow(x, numYrs));
//   console.log(fvalue);
//   return fvalue;

// }

// future value calculation is FV = PV(1 + i)^time

function FV(principal, interest, time) {
  var answer = principal * Math.pow((1 + interest), time);
  return answer.toFixed(2);
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

  document.getElementById('answer').innerHTML = "The future value is $" + ans;
}

// function calculate() {
// var principal = 100;
// var interest = .10;
// var time = 10;
//   // FV = PV(1 + i) ^ time

// }
// console.log(calculate());