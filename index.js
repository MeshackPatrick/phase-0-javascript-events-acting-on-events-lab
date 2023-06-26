// Your code here
function moveDodgerLeft() {
    var dodger = document.getElementById('dodger');
    var left = parseInt(dodger.style.left);
    var newLeft = left - 1; 
    dodger.style.left = newLeft + 'px';
  }
  
  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var left = parseInt(dodger.style.left);
    var newLeft = left + 1; 
    dodger.style.left = newLeft + 'px';
  }
  