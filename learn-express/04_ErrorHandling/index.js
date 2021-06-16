import express from "express";
import favicon from "serve-favicon";
import path from "path";

const PORT = 4000;
const app = express();

// This is for the public folder on path /
app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req, res) => {
  res.send("Server Works !");
});

app
  .route("/serve")
  .get((req, res) => {
    throw new Error();
  })
  .put((req, res) => {
    res.send("PUT method fires !");
  })
  .delete((req, res) => {
    res.send("DELETE method fires !");
  });
/* 
Third Party Middleware Error Handlers
https://expressjs.com/en/resources/middleware.html 
*/

// Error Handling (before app.listen and after the routes, use)
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(`Hello Error: ${err.stack}`);
});

app.listen(PORT, () => {
  console.log(`Server works @ ${PORT}`);
});
