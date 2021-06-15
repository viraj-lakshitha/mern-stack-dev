console.log(process.versions.node); // Check the Node JS version
console.log(process.argv)

//-------------------------------------------------

const [, , firstName, lastName] = process.argv
console.log(`My name is ${firstName} ${lastName}`);

// run command : node globalprocess.js Viraj Lakshitha

//-------------------------------------------------

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

// run command : node globalprocess --user Viraj --greeting "Hello"