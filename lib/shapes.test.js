// const Test = require('./test.js');
const Circle = require('./shapes.js').Circle;
const Triangle = require('./shapes.js').Triangle;
const Square = require('./shapes.js').Square;

describe('Test', () => {

    describe('Circle', () => 
    
    it(`should generate a blue circle with the text XYZ inside`, () => {
        const circle = new Circle ('XYZ','blue', 'circle')
        const svg = circle.generateSvg();
        expect(svg).toContain('<circle');
    }));
});


describe('Triangle', () => {
    it(`should generate a red triangle with the text XYZ inside`, () => {
const triangle = new Triangle('XYZ', 'red', 'triangle')
const svg = triangle.generateSvg();
expect(svg).toContain('<polygon');
    });
});


describe('Square', () => {
    it(`should generate a green square with the text XYZ inside`, () => {
const square = new Square ('XYZ', 'green', 'square')
const svg = square.generateSvg();
expect(svg).toContain('rect');

    });
});