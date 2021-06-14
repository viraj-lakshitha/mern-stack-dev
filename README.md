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

#### Alternative for NPM

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

## MongoDB

---

[Link to Documentation](https://docs.mongodb.com/manual/core/document/)

## References

---
