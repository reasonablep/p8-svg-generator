const inquirer = require('inquirer');
const fs = require('fs')
const {Circle, Triangle, Square} = require('./lib/shapes.js');

function generateSvg () {

    inquirer.prompt ([
        {
            type: 'input',
            message: 'Please enter three characters for the logo.',
            name: 'text'
        },
        

        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal color code for the text.',
            name: 'textColor'
        },

        {
            type: 'list',
            message: 'Please select a shape.',
            name: 'shape',
            choices: ['triangle',
            'circle',
            'square']

        },

        {
            type: 'input',
            message: 'Please enter a color keyword or hexadecimal color code for the shape.',
            name: 'shapeColor'
        }

    ])

.then(answers => {

let userText = answers.text;
let userTextColor = answers.textColor;
let userShape = answers.shape;
let userShapeColor = answers.shapeColor;

console.log(userShape);

let svgContent = '';

if (userShape === 'circle') {

    const userCircle = new Circle (userText, userTextColor, userShape, userShapeColor);
    svgContent = userCircle.generateSvg();

} else if (userShape === 'triangle') {

    const userTriangle = new Triangle (userText, userTextColor, userShape, userShapeColor);
    svgContent = userTriangle.generateSvg();

} else if (userShape === 'square') {

    const userSquare = new Square (userText, userTextColor, userShape, userShapeColor);
    svgContent = userSquare.generateSvg();

}

    fs.writeFile('./examples/example.svg', svgContent, 'utf-8',   (err) => {
        err ? console.log(err) :
        console.log('SVG generated!');

    })
});

};

generateSvg();