// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [

{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},

{
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
},

{
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
},


{
    type: 'input',
    name: 'appLink',
    message: 'Provide the link to your deployed application:'
},

{
    type: 'input',
    name: 'screenshot',
    message: 'Provide the path to the screenshot for your deployed application:',
},

{
    type: 'input',
    name: 'contributing',
    message: 'What sources did you use for your application?',
},

{
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
},

{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'None'],
},

{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
},

{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
}

];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
       if (err) {
        console.error(err);
       } else {
        console.log('The README.md was generated!')
       }
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const markdown = generateMarkdown(response);
    writeToFile('README.md', markdown);
    });
};

// Function call to initialize app
init();
