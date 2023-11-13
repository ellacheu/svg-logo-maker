const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Square, Circle } = require('./lib/shapes')

// prompt questions for svg traits //
const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'Enter up to three characters for the logo text',
        validate: function(answer) {
            if (answer.length > 3) {
                return console.log(" Attention: Input needs to be 3 characters or less")
            }
            return true
        }
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
function generateLogo(answers) {
    const { characters, textColor, shape, shapeColor } = answers;
    let shapeGenerate;

    switch (shape) {
        case 'triangle':
            shapeGenerate = new Triangle();
            break;

        case 'square':
            shapeGenerate = new Square();
            break;

        case 'circle':
            shapeGenerate = new Circle();
            break;

        default:
            console.log('Invalid Shape');
            return;
    }

    shapeGenerate.setColor(shapeColor);

    const svgImage = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeGenerate.render()}
    <text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' fill='${textColor}' font-size='50' font-family='serif'>${characters}</text>
    </svg>
    `;

    fs.writeFile('logo.svg', svgImage, (err) => {
        if (err) {
            console.error('Error generating SVG file', err);
        
        } else {
            console.log('SVG logo generated successfully!');
        }
    });
}

// initalize application //
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        generateLogo(answers)
    });
}

init();
