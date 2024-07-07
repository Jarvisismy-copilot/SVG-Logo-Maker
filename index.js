// Create variable that include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for the logo:',
    validate: input => 
        input.length <= 3 || 'Please enter up to 3 characters only.',
    },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (e.g., red, #ffffff):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (e.g., blue, #0000ff):',
  },
];

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
  let shapeElement;
  switch (shape) {
    case 'Circle':
      shapeElement = `<circle cx="50" cy="50" r="40" fill="${shapeColor}" />`;
      break;
    case 'Square':
      shapeElement = `<rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />`;
      break;
    case 'Triangle':
      shapeElement = `<polygon points="50,15 90,85 10,85" fill="${shapeColor}" />`;
      break;
    default:
      shapeElement = '';
  }
