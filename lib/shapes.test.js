const fs = require('fs');
const test = require('./test.js');
const Shapes = require('./shapes.js');


describe('Test', () => {

    describe('Circle', () => 
    
    it(`should generate a blue circle with the text XYZ inside`, () => {
        const circle = new Test ('XYZ','blue')
        const svg = Circle.generateSvg();
        expect(svg).toContain('<circle');
    }));
});


describe('Triangle', () => {
    it(`should generate a red triangle with the text XYZ inside`, () => {
const triangle = new Triangle('XYZ', 'red')
const svg = triangle.generateSvg();
expect(svg).toContain('<polygon');
    });
});


describe('Square', () => {
    it(`should generate a green square with the text XYZ inside`, () => {
const square = new Square ('XYZ', 'green')
const svg = square.generateSvg();
expect(svg).toContain('rect');

    });
});