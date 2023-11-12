const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Square, Circle } = require('./lib/shapes')

// prompt questions for svg traits //
const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'Enter up to three characters for the logo text',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color for the logo text (color keyword or hexadecimal number)',
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
        message: 'Choose the shape for the logo (circle, triangle, square)',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the shape (color keyword or hexadecimal number)',
    },
];

// generate logo based off of prompt inputs //
function generateLogo(answer) {
    const { characters, textColor, shape, shapeColor } = answers;
}

// initalize application //
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        generateLogo(answers)
    });
}

init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered