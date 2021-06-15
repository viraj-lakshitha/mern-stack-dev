const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const timeInc = () => {
    currentTime += waitInterval;
    const cp = Math.floor((currentTime/waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${cp} %`);
}

const userInfo = [
    "What is your name?",
    "What is your email?",
    "What is your phone?",
    "What is your university?"
]

const userInputs = [];

const askQuections = (i=0) => {
    process.stdout.write(`\n ${userInfo[i]}`);
}

askQuections();

process.stdin.on('data', (data) => {
    userInputs.push(data.toString().trim());

    if (userInputs.length < userInfo.length) {
        askQuections(userInputs.length);
    } else {
        exitFunction();
    }
});

const exitFunction = () => {
    intervals = setInterval(timeInc, waitInterval);
    setTimeout(previewUser, waitTime);
}

const previewUser = () => {
    clearInterval(intervals);
    const [name, email, phone, university] = userInputs;
    
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`

        ----- User Profile -----
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        University: ${university}
    
    `);
    process.exit(0);
}

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    previewUser();
}



