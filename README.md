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

## References

---
