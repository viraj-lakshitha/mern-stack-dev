const fs = require("fs");

/* fs.renameSync("./temp-file/colors.md", "./temp-file/old-colors.md"); */

fs.rename("./temp-file/colors.md", "./temp-file/old-colors.md", err => {
    if (err) {
        throw err;
    }
    console.log("File Renamed...")
});


// Delete Files
setTimeout(() => {

    fs.unlinkSync("./assets/alex.jpg");

}, 4000);