
const timerEl = document.getElementById("timer");

const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;

let timeInterval;

const formatTime = (elapsedTim) =>{
    const miliseconds = Math.floor((elapsedTim % 1000) / 10);

    const seconds = Math.floor((elapsedTim % (1000 *60)) / 1000)

    const minutes = Math.floor((elapsedTim % (1000 * 120)) / (1000 * 60))

    const hours = Math.floor((elapsedTim / (1000 * 120)))

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")
        + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
        + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
        + "." +
        (miliseconds > 9 ? miliseconds : "0" + miliseconds));

}

const startTimer = () =>{
    startTime = Date.now() - elapsedTime;

    timeInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    },10)

    startEl.disabled = true;
    stopEl.disabled = false;
}

const stopTimer = () =>{
    clearInterval(timeInterval);
    startEl.disabled = false;
    stopEl.disabled = true;
}

const resetTimer = () =>{
    clearInterval(timeInterval);
    startEl.disabled = false;
    stopEl.disabled = true;
    elapsedTime = 0;
    timerEl.textContent = "00:00:00";
}

startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer);
resetEl.addEventListener("click",resetTimer);