const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p} %`);
}

console.log(`Setting waiting  time to ${waitTime/1000} sec`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write('Done');
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);