// using file system, inquirer, and generateMarkdown modules
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')

// All questions used in the command line are defined here
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
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'None'],
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
    name: 'contributing',
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

// This function will write the README file 
function writeToFile(fileName, data) { // The function is called within the init() function with the filename and data parameters
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Success!')) //checking for errors and logging success
}

// This function begins the entire process
function init() {
    inquirer.prompt(questions).then((answers) => { //Inquirer will prompt questions through the CL using the questions array
        const markdown = generateMarkdown(answers, answers.license); // Passing the answers to generateMarkdown 
        writeToFile('Test.md', markdown)
        console.log(answers);
    });
}

// Function call to initialize app
init() 
    

