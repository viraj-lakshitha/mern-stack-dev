const fs =require("fs");

console.log('Started Reading Files...');

/* const files = fs.readdirSync("./assets") // Synchournous
console.log('Completed...');
console.log(files); */

fs.readdir("./assets", (err, files) => { // Asyncornous
    console.log('Completed...');
    if (err) {
        throw err;
    }
    console.log(files);
})
