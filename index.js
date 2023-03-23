//Variable declaration
window.onload = function () {
  var sec = 00; 
  var mili = 00; 
  var appendMili = document.getElementById("mili")
  var appendSec = document.getElementById("sec")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;
  
  //Function
  buttonStart.onclick = function() {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  buttonReset.onclick = function() {
     clearInterval(Interval);
    mili = "00";
  	sec = "00";
    appendMili.innerHTML = mili;
  	appendSec.innerHTML = sec;
  }
  function startTimer () {
    mili++; 
    
    if(mili <= 9){
      appendMili.innerHTML = "0" + mili;
    }
    
    if (mili > 9){
      appendMili.innerHTML = mili;
      
    } 
    
    if (mili > 99) {
      console.log("sec");
      sec++;
      appendSec.innerHTML = "0" + sec;
      mili = 0;
      appendMili.innerHTML = "0" + 0;
    }
    
    if (sec > 9){
      appendSec.innerHTML = sec;
    }
  
  }
}
