// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use for your project?',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3'],
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'If you would like other developers to contribute to your application, you can include guidelines for how to do so.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write tests for your application then provide examples on how to run them here.'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the best email address users can use to contact you?'
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
    

