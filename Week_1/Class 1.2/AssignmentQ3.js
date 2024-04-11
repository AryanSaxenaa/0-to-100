let hour = 0;
let minute = 0;
let seconds = 0;

function printTime() {
    console.log(`${hour}:${minute}:${seconds}`);
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minute++;
        if (minute === 60) {
            minute = 0;
            hour++;
            if (hour === 24) {
                hour = 0;
            }
        }
    }
    if (hour < 24) {
        setTimeout(printTime, 1000);
    }
}

printTime(); // Start the simulation
