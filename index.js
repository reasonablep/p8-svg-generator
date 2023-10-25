const inquirer = require(inquirer);
const fs = require('fs');

function generateSvg () {

    inquirer.prompt ([
        {
            type: 'input',
            message: 'Please enter three character',
            name: 'text'
        },
        

        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal color code',
            name: 'color'
        },

        {
            type: 'list',
            message: 'Please select a shape',
            name: 'shape'

        }

    ])
}

generateSvg();