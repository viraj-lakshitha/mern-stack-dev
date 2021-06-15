/* 

process.stdin // Implement read method
process.stdout // Implement write method 

*/

// Method 01 =================================

/* const questions = [
    "What is your name?",
    "What would you rather doing?",
    "What is the preferred programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();

const answers = []
process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`

        Thank you for your answer

        Go ${activity} ${name} you can write ${lang} code later !!!

    `);
}) */

// Method 02 =================================
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const quections = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do?"
];

const collectAnswers = (quections, done) => {
    const answers = [];
    const [ firstQuestion ] = quections;

    const questionAnswered = answer => {
        answers.push(answer);

        if (answers.length < quections.length) {
            rl.question(quections[answers.length], questionAnswered)
        } else {
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered)
}

collectAnswers(quections, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
})