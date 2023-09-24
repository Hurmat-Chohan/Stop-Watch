let min = 0;
let sec = 0;
let msec = 0;
let minHeading = document.getElementById("min");
let secHeading = document.getElementById("sec");
let msecHeading = document.getElementById("msec");
let interval;
let button = document.getElementById("Button")

function timer() {
    msec++;
    msecHeading.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function onStart() {

    interval = setInterval(timer, 10);
    Button.disabled = true

}



function onStop() {
    clearInterval(interval); // Stop the clock
    Button.disabled = false
}

function onReset() {
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    onStop();
}

