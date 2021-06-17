# Mern Stack Devalopment 💻🔥

![mern-stack](https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg)
<br>
Mongo Express ReactJS and NodeJS | LinkedIn Learning Path [Link](https://www.linkedin.com/learning/paths/become-a-mern-stack-javascript-developer?u=76664938)

## Getting Started with NPM

---

[Link to Documentation](https://docs.npmjs.com/)

- Install NPM (NodeJS Package Manager)

  - Download NodeJS LTS package and install on your computer
  - Check the NodeJS version to verify installation `node -v`

- Initlize new package.json file

  - `npm init`

- Install Packages Locally and globally

  - Install Package Locally (Only Affect to the Project)

    - Install Express => `npm install express`
    - Install Dev Dependencies => `npm install babel-preset-env --save-dev` (Only include in devalopment stage not in production)

  - Install Package Globally
    - Install Express => `npm install --global express` or `npm i -g express`

- Check what are the outdated Packages => `npm outdated` ot `npm outdated -g`
  ![outdated-g](learn-npm\01_\outdated-g.png)

- Update packages => `npm update eslint` or `npm install eslint`

- Install the packages with specific version => `npm install react@<version>`

- Removing Package => `npm uninstall -g expo-cli`

- Delete NPM Cache => `npm cache verify` If there is any problem, then clean cache `npm cache clean --force`

- Check the Warning or Issues in installing `npm audit`

- How to work with '''npx'''

  - `npm -p @angular/cli ng new myapp` <= To create angular app, but angular/cli not installed. So basically npx install package and run the command

- By editing the script block in the package.json file, you can create new command lines (Eg: adding this code snippet to script in package.json `"createang" : "npx -p @angular/cli ng new myapp"` then run `npm createang` in cmd to create angular app called 'myapp' directly)

### Alternative for NPM

- Yarn => [https://yarnpkg.com/](https://yarnpkg.com/) - Introduced by the facebook team

## React JS

---

[Link to Documentation](https://reactjs.org/docs/getting-started.html)

## NodeJS Development

---

[Link to Documentation](https://nodejs.org/en/docs/)

## Express JS

---

[Link to Documentation](https://expressjs.com/en/starter/installing.html)

### Build an Express Project from Generator

- Install Express and Express Generator
    - Open terminal and run `npm install express express-generator -g`

- Generate Express Project using Express Generator
    - Open terminal and run `express --view=hbs` and for more command `express -h` in there you can change the type of stylesheets as well.

- Run the generated project,
    - First install all dependencies `npm install`
    - Run the project `npm start`

### Build a project from Scratch

- Install Express and Nodemon (Nodemon is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected )
    - `npm install --save express nodemon`

- Install Dev Dependencies to run the ES6 code
    -`npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0`

- Update the Script block in package.json file
``
"scripts": {
    "start": "nodemon ./index.js --exec babel-node -e js"
  },
``

- Then create a file as ***".babelrc"*** and update file as follows
``
{
    "presets": [
        "env",
        "stage-0"
    ]
}
``

- Create file called ***"index.js"*** and update with  following code and run `npm start`
```
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
    res.send('<h1>Hello World !</h1>');
})

app.listen(PORT, () => { // all command display in server
    console.log(`Server Running on ${PORT}`);
})
```

- Install Serve-Favicon to Handle the Errors
    - `npm install --save serve-favicon`


- Debugging in Express Application
    - Method 01: Open terminal => `set DEBUG=express:* & node index.js`
    - Method 02: Update package.json => script => `"debug": "set DEBUG=express:* & nodemon ./index.js --exec babel-node -e js"`
 



## MongoDB

---

[Link to Documentation](https://docs.mongodb.com/manual/core/document/)

### Install MongoDB on Windows
* Go to the [Download MongoDB Commiunity Edition](https://www.mongodb.com/try/download/community) and download the MongoDB Commiunity Edition and Install on your PC

* Setup the Enviroment Variables for Mongo
    * Go to the Edit the System Enviromental Variables > Edit > System Variables > Path > New
    * Find the location of the Mongo /bin folder and copy paste the path to the above and press 'OK'
    * Default MongoDB Location `C:\Program Files\MongoDB\Server\<version>\bin` (Replace the Version)

* Working with MongoDB Shell
    * After setting up enviromental variables, Open the terminal and run `mongo` to open shell
    * For mongodb shell commands [Link to Ref](https://docs.mongodb.com/manual/reference/mongo-shell/)
    * Or without using shell and shell command you can directly use mongodb compass

* How to import JSON files as collections in MongoDB
    * Copy Paste the JSON document to the /bin folder
    * Open the terminal and navigate to the /bin folder run the command `mongoimport.exe --db <database-name> <name-of-the-file>.json` (Eg: `mongoimport.exe --db sampledb users.json`)



## References

---

### MongoDB Shell Scripting and Query

#### **Create Document (using shell commnad)**
* First Open the terminal and make sure to up and running mongo server `mongo`
* Create Document => `doc = {"_id": 20191157, "name" : "viraj", "status" : "single"}`
* Insert Document into DB => `db.user.insertOne(doc)` (user == name of database, if database doesnt exist, then automatically create new one as *user*)
* To view the database => `db.user.find().pretty();`

#### **Shell Command**
*Open terminal and run the command `mongo` before access following commands*

***Basic Commands***

* Show all database: `show dbs;`
* Navigate to the certain database: `use <name-of-the-database>`
* Get the name of current database: `db.getName();`
* Show all collections, inside the current database:`show collections;`
* Create new collection: `db.<name-of-the-collection>.insertOne({});`

***Query Commands***

* If we pass command as,
    (before working with certain database, you have to navigate to that database)
    * `db.user.find()`, then show all the data in the database
    * `db.user.find({"name" : "viraj"});`, then it shows only the relavant details matches with **"name"**
    * `db.user.find({"_id" : 1}, {"name" : 1});`, only show the **"name"** of the user
    * `db.user.find({"_id" : 1}, {"name" : 0});`, show except the **"name"** of the user
    * `db.user.find({}, {"name":1})`, show only the **"name"** of the users

    Lets use the prevously added document 'recipes.json'
    * `db.recipes.find({"title" : { $regex: /taco/i }}, { "title": 1});`

    Count the Number of Documents
    * `db.recipes.find().count()` : Return an integer of count

    Limiting Results
    * `db.recipes.find({}, {"title" : 1}).limit(3);` : output only 3 documents

    Sorting Results
    * `db.recipes.find({}, {"title" : 1}).sort({"title" : 1});` : Ascending order to title param
    * `db.recipes.find({}, {"title" : 1}).sort({"title" : -1});` : Ascending order to title param

    Skipping Results
    * `db.recipes.find({}, {"title" : 1}).sort({"title" : -1}).skip(1);` Skip the first element of the decending ordered list
    * `db.recipes.find({}, {"title" : 1}).skip(1);` : Skip the first element of the list of documents


    Less than ($lt) and Greater than ($gt)
    * Query for all recipes which are less than 30 cookning time
        * `db.recipes.find({"cook_time" : { $lt: 30 }}, {"title" : 1});`

    * Query for all recipes which are greater than 30 cookning time
        * `db.recipes.find({"cook_time" : { $gt: 30 }}, {"title" : 1});`

    * Query for combinationation of both greather than and less than
        * `db.recipes.find({"cook_time" : { $gt: 10}, "cook_time" : {$lt: 40}}, {"title" : 1});`

    Mulitiple Conditions ( $all and $in operators)
    * Filter the recipe that have both easy and mexican tags
        * `db.recipes.find({"tags" : {$all :  ["mexican", "easy"] }}, {"tags" : 1});`
    * Filter the recipe that have easy or mexican tags
        * `db.recipes.find({"tags" : {$in :  ["mexican", "easy"] }}, {"tags" : 1});`
