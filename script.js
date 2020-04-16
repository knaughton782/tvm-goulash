$(document).ready(function () {

  // set id to filename ex: tvm1-1.html becomes id="tvm1-1"
  let url = window.location.pathname;
  let filename = url.substring(url.lastIndexOf('/') + 1);
  filename = filename.slice(0, -5);
  // console.log(filename);
  $('.slide').attr('id', filename);


  // generate page number based on filename ex: tvm1-1 is 1 in the pagenumber div
  let pageNum = filename.substring(filename.lastIndexOf('-') + 1);
  // console.log(pageNum);
  $('.page-number').text(pageNum);
  /* ******************** */


  // to use $$ or \\ to delineate where MathJax identifies equation
  MathJax = {
    tex: {
      inlineMath: [['$$', '$$'], ['\\(', '\\)']]
    }
  };

  // future value calculation is FV = PV(1 + i)^time


  $(document).on('click', '.futurevalue', calc_FV);
  $(document).on('click', '.presentvalue', calc_PV);
  $(document).on('click', '.interest', calc_i);
  $(document).on('click', '.time', calc_n);
  $(document).on('click', '.timeline', timeLine);
  $(document).on('click', '.exercise2', exercise2);
  $(document).on('click', '.exercise3', exercise3);
  $(document).on('click', '.ear', calc_ear);


  /* future value calculation ******************* */
  function calc_FV() {
    let PV = parseFloat(document.getElementById('PV').value);
    let i = parseFloat(document.getElementById('i').value) / 100;
    // console.log(i)
    let n = parseInt(document.getElementById('n').value);
    let ans = document.getElementById('answer');

    if (isNaN(PV) || PV <= 0) {
      ans.innerHTML = `Investment must be a valid number greater than zero.`;
    }
    else if (isNaN(i) || i <= 0) {
      ans.innerHTML = `Annual rate must be a valid number greater than zero.`;
    }
    else if (isNaN(n) || n <= 0) {
      ans.innerHTML = `Years must be a valid number greater than zero.`;
    }
    else {
      let FV = PV * (Math.pow((1 + i), n));
      FV = FV.toFixed(2);
      ans.innerHTML = `The future value (FV) is $${FV}`;
    }
  }
  /* ****************** end future value calculation ******************* */



  // present value calculation ********************* 
  function calc_PV() {
    let FV = parseFloat(document.getElementById('form1fv').value);
    let i = parseFloat(document.getElementById('form1i').value) / 100;
    // console.log(i)
    let n = parseInt(document.getElementById('form1n').value);
    let ans = document.getElementById('form1-ans', 'form3-ans');

    if (isNaN(FV) || FV <= 0) {
      ans.innerHTML = `Future value must be a valid number greater than zero.`;
    }
    else if (isNaN(i) || i <= 0) {
      ans.innerHTML = `Annual rate must be a valid number greater than zero.`;
    }
    else if (isNaN(n) || n <= 0) {
      ans.innerHTML = `Years must be a valid number greater than zero.`;
    }
    else {
      let PV = FV * (1 / (Math.pow((1 + i), n)));
      PV = PV.toFixed(2);
      ans.innerHTML = `The Present Value (PV) is $${PV}`;
    }
  }
  /* ****************** end present value calculation ******************* */




  // interest calculation ********************* 
  function calc_i() {
    let FV = parseFloat(document.getElementById('form2fv').value);
    let PV = parseFloat(document.getElementById('form2pv').value);
    let n = parseInt(document.getElementById('form2n').value);
    let ans = document.getElementById('form2-ans');

    if (isNaN(FV) || FV <= 0) {
      ans.innerHTML = `Future value must be a valid number greater than zero.`;
    }
    else if (isNaN(PV) || PV <= 0) {
      ans.innerHTML = `Present Value must be a valid number greater than zero.`;
    }
    else if (isNaN(n) || n <= 0) {
      ans.innerHTML = `Years must be a valid number greater than zero.`;
    }
    else {
      let i = (Math.pow((FV / PV), 1 / n)) - 1;
      i = i.toFixed(3);
      ans.innerHTML = `The interest rate (i) is ${i}%`;
    }
  }
  /* ****************** end interest calculation ******************* */




  // time calculation ********************* 
  function calc_n() {
    let FV = parseFloat(document.getElementById('form3fv').value);
    let PV = parseFloat(document.getElementById('form3pv').value);
    let i = parseFloat(document.getElementById('form3i').value) / 100;
    let n;
    let ans = document.getElementById('form3-ans');

    if (isNaN(FV) || FV <= 0) {
      ans.innerHTML = `Future value must be a valid number greater than zero.`;
    }
    else if (isNaN(PV) || PV <= 0) {
      ans.innerHTML = `Present Value must be a valid number greater than zero.`;
    }
    else if (isNaN(i) || i <= 0) {
      ans.innerHTML = `Annual rate must be a valid number greater than zero.`;
    }
    else {
      let y = (Math.log(FV));
      let x = (Math.log((1 + i)));
      n = y / x;
      n = n.toFixed(2);

      ans.innerHTML = `The time (n) required for the investment to double is ${n} years.`;
    }
  }
  /* ****************** end time calculation ******************* */

  function timeLine() {
    if (document.getElementById('c-timeline').checked) {
      document.getElementById('semi-ans').innerHTML = "That is correct. Good job!";
    } else {
      document.getElementById('semi-ans').innerHTML = "Please check your calculations and try again."
    }
  }

  // compounding ************* 
  function exercise2() {
    let PV = parseFloat(document.getElementById('pvalue-ex2').value);
    let i = parseFloat(document.getElementById('int-ex2').value) / 100;
    let n = parseInt(document.getElementById('yrs-ex2').value);
    let m = parseInt(document.getElementById('cmpd-ex2').value);
    let ans = document.getElementById('answer-ex2');
    console.log(`First here: ${PV} ${i} ${n} ${m}`)
    if (isNaN(PV) || PV <= 0) {
      ans.innerHTML = `Present value must be a valid number greater than zero.`;
    }
    else if (isNaN(i) || i <= 0) {
      ans.innerHTML = `Annual rate must be a valid number greater than zero.`;
    }
    else if (isNaN(n) || n <= 0) {
      ans.innerHTML = `Years must be a valid number greater than zero.`;
    }
    else if (isNaN(m) || m <= 0) {
      ans.innerHTML = `Compounding number must be a valid number greater than zero.`;
    }
    else {
      let FV = PV * (Math.pow((1 + (i / m)), (n * m)));
      console.log(`and finally: ${PV} ${i} ${n} ${m} ${FV}`)
      FV = FV.toFixed(2);
      ans.innerHTML = `The future value (FV) is $${FV}`;
    }

  }

  function exercise3() {
    let PV = parseFloat(document.getElementById('pvalue-ex3').value);
    let i = parseFloat(document.getElementById('int-ex3').value) / 100;
    let n = parseInt(document.getElementById('yrs-ex3').value);
    let m = parseInt(document.getElementById('cmpd-ex3').value);
    let ans = document.getElementById('answer-ex3');
    console.log(`${PV} ${i} ${n} ${m}`)
    if (isNaN(PV) || PV <= 0) {
      ans.innerHTML = `Present value must be a valid number greater than zero.`;
    }
    else if (isNaN(i) || i <= 0) {
      ans.innerHTML = `Annual rate must be a valid number greater than zero.`;
    }
    else if (isNaN(n) || n <= 0) {
      ans.innerHTML = `Years must be a valid number greater than zero.`;
    }
    else if (isNaN(m) || m <= 0) {
      ans.innerHTML = `Compounding number must be a valid number greater than zero.`;
    }
    else {
      let FV = PV * (Math.pow((1 + (i / m)), (n * m)));
      console.log(`and finally: ${PV} ${i} ${n} ${m} ${FV}`)
      FV = FV.toFixed(2);
      ans.innerHTML = `The future value (FV) is $${FV}`;
    }
  }

  // ear ************* 
  function calc_ear() {
    let i = parseFloat(document.getElementById('int-ex6').value) / 100;
    let m = parseInt(document.getElementById('cmpd-ex6').value);
    let ans = document.getElementById('answer-ex6');

    if (isNaN(i) || i <= 0) {
      ans.innerHTML = `Annual rate must be a valid number greater than zero.`;
    }
    else if (isNaN(m) || m <= 0) {
      ans.innerHTML = `Compounding number must be a valid number greater than zero.`;
    }
    else {
      let ear = Math.pow(1 + (i / m), m) - 1;
      ear = ear.toFixed(3);
      
      ans.innerHTML = `The EAR is ${ear}%`;
    }

  }

}); // end jquery document ready function
