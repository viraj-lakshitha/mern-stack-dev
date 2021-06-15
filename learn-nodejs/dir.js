const fs = require("fs");


if (fs.existsSync("temp-file")) {
    console.log("Already Exists")
} else {
    fs.mkdir("temp-file", err => { // create new dir
        if (err) {
            throw err;
        }
        console.log("Directory Created !")
    })
}