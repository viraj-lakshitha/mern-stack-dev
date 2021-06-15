const fs = require('fs');

/* const text = fs.readFileSync("./assets/Readme.md", "UTF-8");
console.log(text); */

/* fs.readFile("./assets/Readme.md", "UTF-8", (err, data) => {
    if(err) {
        throw err;
    }
    console.log('File Content Read');
    console.log(data);
});
 */

fs.readFile("./assets/alex.jpg", (err, img) => {
    if(err) {
        console.log(err.message);
        process.exit();
    }
    console.log('File Content Read');
    console.log(img);
});
