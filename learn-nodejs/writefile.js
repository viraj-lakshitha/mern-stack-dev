const fs = require("fs");

const md = `

# This is a new file 

We can write/read text to the file with fs module

* fs.readdir
* fs.readFile
* fs.writeFile
 
`;

fs.writeFile("./assets/notes.md", md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("File Saved")
})