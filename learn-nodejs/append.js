//  We dont need to fs to read json files
const fs = require("fs");
const colorData = require("./assets/colors.json")

colorData.colorList.forEach(c => {
    fs.appendFile("./temp-file/colors.md", `${c.color}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
        console.log("Done...")
    })
})