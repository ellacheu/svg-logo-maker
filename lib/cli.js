const inquirer = require('inquirer')

inquirer
.prompt ([
    {
        type: 'input',
        name: 'characters',
        message: 'Enter up to three characters for the logo text',
    },
    {
        type: 'input',
        name: 'text color',
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
        name: 'shape color',
        message: 'Enter the color for the shape (color keyword or hexadecimal number)',
    }
])