// Import the 'fs' module for file system operations
const fs = require('fs');
// Import the 'inquirer' module for interactive command line prompts
const inquirer = require('inquirer');

const questions = [
    {
    // Prompt for logo text with a limit of up to 3 characters
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for the logo:',
    validate: input => 
        input.length <= 3 || 'Please enter up to 3 characters only.',
    },
  {
    // Prompt for the text color 
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (e.g., red, #ffffff):',
  },
  {
    // Prompt for the text font
    type: 'input',
    name: 'textFont',
    message: 'Enter text font (e.g., Arial, Verdana):',
  },
  {
    // Prompt to choose a shape for the logo
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    // Prompt for the shape color
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (e.g., blue, #0000ff):',
  },
];

  // Function to generate SVG content based on user's answers
const generateSVG = ({ text, textColor, textFont, shape, shapeColor }) => {
  let shapeElement;

  // Determine the SVG element based on the chosen shape
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

  // Return the complete SVG content as a string
return `
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  ${shapeElement}
  <text x="50" y="55" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;
};

    // Use inquirer to prompt the questions to the user and handle their answers  
inquirer.prompt(questions).then(answers => {
  const svgContent = generateSVG(answers);

    // Write the SVG content to a file named 'logo.svg'
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

