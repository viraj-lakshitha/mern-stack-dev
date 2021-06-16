import express from "express";
import favicon from "serve-favicon";
import path from "path";

const PORT = 3000;
const app = express();

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get('/', (req,res) => {
    res.send('Server Works !');
})

app.listen(PORT, () => {
    console.log(`Server runs on ${PORT}`)
})