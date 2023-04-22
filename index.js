// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPL']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err =>
        err ? console.error(err) : console.log('Success!')))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
