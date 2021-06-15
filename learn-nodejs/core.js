const path = require("path");
const util = require("util");
const v8 = require("v8");
const readline = require("readline");

/* const dirPoc = path.join(__dirname,"poc");
console.log(dirPoc);

util.log(path.basename(__filename));
util.log(' ^ The name of the current file');

util.log(v8.getHeapCodeStatistics()); */

// It is important to create interface before use the readline module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("How can I help you?", answer => {
    console.log(answer);
});

