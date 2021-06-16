import express from "express";
import data from "../02_ServerFromScratch/data/data.json";

const app = express();
const PORT = 5000;

app.get('/', (req,res) =>{
    res.send('Server Works !');
})

// This is the method to use JSON
app.use(express.json());

// This is the method to use urlencoded
app.use(express.urlencoded({extended: true}));

app.post('/newUser', (req,res) => {
    console.log(req.body);
    res.send(req.body);
})

app.get('/user/:id', (req,res) =>{
    // Middleware - Func that are happening before send response
    let userId = Number(req.params.id)-1;
    console.log(data[userId]);
    console.log(`Response Status: ${res.statusCode}`)
    console.log(`Request Original URL: ${req.originalUrl}`)

    res.send(data[userId]);
});

/*

**JSON Data**
{
    "id" : 1,
    "name" : viraj
}

**URL Encoded Data**
hello=URLEncoded+is+cool

*/

app.route('/test') // Multiple Routes
    .get((req,res) => {
        res.send('GET method');
    })
    .put((req, res) => {
        res.send('PUT method');
    })
    .delete((req, res) => {
        res.send('DELETE method');
    })
    .post((req, res) => {
        res.send('POST method');
    }
);

app.listen(PORT, () => {
    console.log(`SERVER :  Server working at port ${PORT}`);
})