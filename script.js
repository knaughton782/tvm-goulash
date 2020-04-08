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
  /* ******* for first exercise slide in lecture ********** */

  

  $(document).on('click', '.calculate-btn', calc_FV)
  
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







}); // end jquery document ready function
