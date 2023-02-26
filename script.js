var hr = 0; // HOUR
var min = 0; // MINUTE
var sec = 0; //SECOND
var count = 0; // COUNT TO 100 FOR EVERY ONE SECOND

var timer = false; // IT USE TO CHAECK THE CONDITION TO START THE TIMER OR STOP OR RESET

// START THE FUNCTION(TIMER) WHEN START BUTTON CLICK
function start() {
  timer = true; //SET THE TIMER TO TRUE SO THAT FUNCTION START RUN
  stopWatch(); // CALLING THE STOPWATCH FUNCTION
}

// IT ACTIVE WHEN STOP BUTTON CLICK AND SET THE TIMER VARIABLE TO FALSE
function stop() {
  timer = false;
}

// IT RESET THE ALL VARIABLE AND THE THE TIMER SET TO ZERO
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  //   SETTING EVERY VALUE TO ZERO BECAUSE THE RESET BUTTON IS CLICKED
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

// IT MAIN FUNCTION TO RUN THE TIMER
// IT ALSO TELL THE MAIN LOGIC AND HOW IT'S EXECUTED
function stopWatch() {
  if (timer == true) {
    count = count + 1;

    // IF THE COUNT IS EQUAL TO 100 THEN COUNT SHOLD STOP AND SET TO ZERO(0)
    //AND SEC SHOULD INCREMENT BY ONE(1)
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    /*IF THE SEC IS EQUAL TO 60 THEN WE SHOULD INCREMENT MIN BY ONE AND SET SECOND TO ZERO*/
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    // IF MIUTES IS EQUAL TO 60 THEN WE SHULD INCREMENT THE HOUR AND SET MINUTES AND SECOND TO ZERO
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    // MAKING ALL THESE VARIABLE BECAUSE WE WANT WHEN THE HOUR,MIN SEC VALUE ARE SINGLE DIGIT THNE O IS ADDED
    // AND WHEN DIGIT BECOME 10 IT'S NORMAL
    var hour = hr;
    var minute = min;
    var second = sec;
    var _count = count;
    // IF WE WANT WHEN DIGIT IS LESS THEN 10 OR SINGLE DIGIT THEN WE ADD ZERO TO THE STRING TO APPEAR AS DOUBLE DIGIT ON THE SCREEN

    if (hr < 10) {
      hour = "0" + hour; // IT LOOK LIKE 01 BY SETTING THIS VLAUE
    }

    // SAME AS FOR THE MINUTE AND SECOND
    if (min < 10) {
      minute = "0" + minute;
    }
    // IT USE BECAUSE I WANT THAT IF THE MIN OR HOUR OR SEC DIGIT IS SINGLE FROM 1TO 9
    // THEN WE ADD 0 ZER AS STRING OT APPEAR THE NUMBER AS A TWO DIGIT
    if (sec < 10) {
      second = "0" + second;
    }
    if (count < 10) {
      _count = "0" + _count;
    }

    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("sec").innerHTML = second;
    document.getElementById("count").innerHTML = _count;
    setTimeout("stopWatch()", 10);
  }
}
