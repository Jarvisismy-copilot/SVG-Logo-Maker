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
    type: 'input',
    name: 'textFont',
    message: 'Enter text font (e.g., Arial, Verdana):',
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

const generateSVG = ({ text, textColor, textFont, shape, shapeColor }) => {
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


return `
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  ${shapeElement}
  <text x="50" y="55" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;
};

inquirer.prompt(questions).then(answers => {
  const svgContent = generateSVG(answers);
  fs.writeFile('logo.svg', svgContent, err => {
    if (err) {
      console.error('Error generating logo:', err);
    } else {
      console.log('Logo saved as logo.svg');
    }
  });
});

// Export the function for testing
module.exports = { generateSVG }; 

