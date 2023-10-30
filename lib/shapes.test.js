const Circle = require('./shapes.js');
const Triangle = require('./shapes.js');
const Square = require('./shapes.js');


describe('Circle', () => {
    it(`should generate a blue circle from user selection`, () => {
        const circle = new Circle ('XYZ','blue')
        const svg = circle.generateSvg();
        expect(svg).toContain('<circle');
    });
});


describe('Triangle', () => {
    it(`should generate a red triangle SVG from user selection`, () => {
const triangle = new Triangle('XYZ', 'red')
const svg = triangle.generateSvg();
expect(svg).toContain('<polygon');
    });
});


describe('Square', () => {
    it(`should generate a green square SVG from user selection`, () => {
const square = new Square ('XYZ', 'green')
const svg = square.generateSvg();
expect(svg).toContain('rect');

    });
});