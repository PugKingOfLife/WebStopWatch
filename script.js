let hasStarted = false;

//timer pos
let mili0;
let mili1;
let second0;
let second1;
let minute0;
let minute1;
let hour0;
let hour1;

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const timer = document.getElementById("timer");
const title = document.getElementById("title");

setInitialTime();
function setInitialTime() {
    mili0 = 0;
    mili1 = 0;
    second0 = 0;
    second1 = 0;
    minute0 = 0;
    minute1 = 0;
    hour0 = 0;
    hour1 = 0;
    timer.textContent = hour1.toString() + hour0 + ":" + minute1 + minute0 + ":" + second1 + second0 + ":" + mili1 + mili0;
}

startButton.onclick = function() {
    startButton.style.display = "none";
    pauseButton.style.display = "inline-block";
    hasStarted = true;
    checkTimerProp();
}

pauseButton.onclick = function() {
    pauseButton.style.display = "none";
    startButton.style.display = "inline-block";
    hasStarted = false;
}

resetButton.onclick = function() {
    hasStarted = false;
    setInitialTime();
    pauseButton.style.display = "none";
    startButton.style.display = "inline-block";
    title.textContent = "Stopwatch";
}

timer.textContent = hour1.toString() + hour0 + ":" + minute1 + minute0 + ":" + second1 + second0 + ":" + mili1 + mili0;

function checkTimerProp() 
{
    setTimeout(function() {
        if (hasStarted) {
            mili0++
            if (mili0 === 10) {
                mili0 = 0;
                mili1++;
                if(mili1 === 10) {
                    mili1 = 0;
                    second0++;
                    if (second0 === 10) {
                        second0 = 0;
                        second1++;
                        if (second1 === 6) {
                            second1 = 0;
                            minute0++;
                            if (minute0 === 10) {
                                minute0 = 0;
                                minute1++;
                                if(minute1 === 6) {
                                    minute1 = 0;
                                    hour0++;
                                    if(hour0 === 10) {
                                        hour0 = 0;
                                        hour1++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            timer.textContent = hour1.toString() + hour0 + ":" + minute1 + minute0 + ":" + second1 + second0 + ":" + mili1 + mili0;
            title.textContent = hour1.toString() + hour0 + ":" + minute1 + minute0 + ":" + second1 + second0 + ":" + mili1 + mili0;
            checkTimerProp();
        }
    }, 10)
}