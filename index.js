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
    name: 'Usage',
    message: 'Provide the link to your deployed application:'
},

{
    type: 'input',
    name: 'screenshot',
    message: 'Provide the path to the screenshot for your deployed application:',
},

{
    type: 'input',
    name: 'Credits',
    message: 'What sources did you use for your application?',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
       if (err) {
        console.error(err);
       } else {
        console.log('The README.md was generated!')
       }
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
