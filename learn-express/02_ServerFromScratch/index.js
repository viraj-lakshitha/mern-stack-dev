import express from "express";
import data from "./data/data.json";

const app = express();
const PORT = 3000;

// This is for the public folder on path /
app.use(express.static('public'));

// This is for images folder on path /img
app.use('/img', express.static('images'));

app.get("/", (req,res) => {
    res.json(data);
})

// You can have multiple method, but only have one response
app.get('/item/:id', (req,res) => {
    let user = Number(req.params.id); // Convert String to a Number
    res.send(data[user-1]);

    next(); // to move next func
}, (req,res) => {
    console.log('Second Function');
});

app.get('/test', (req, res) => {

    // Check : https://expressjs.com/en/guide/routing.html

    // res.download('images/rocket.jpg'); // download file

    // res.redirect('/') // redirected to the '/' page

    // res.end(); // end the response
})

app.post("/post", (req,res) => {
    res.send('<h1>POST Request on PORT=3000</h1>');
})

app.put("/put", (req,res) => {
    res.send('<h1>PUT Request on PORT=3000</h1>');
})

app.delete("/delete", (req,res) => {
    res.send('<h1>DELETE Request on PORT=3000</h1>');
})

app.listen(PORT, () => { // all command display in server
    console.log(`Server Running on ${PORT}`);
})