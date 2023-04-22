// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your project?",
    choices: ["MIT", "Apache 2.0", 'GNU GPLv3'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers, answers.license);
        writeToFile('Test.md', markdown)
        console.log(answers);
    });
}

// Function call to initialize app
init() 
    

