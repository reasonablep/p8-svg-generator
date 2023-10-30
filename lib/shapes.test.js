const Triangle = require("./shapes.js");``

describe('Triangle', () => {
    it(`should generate a red triangle SVG from user selection`, () => {
const triangle = new Triangle('XYZ', 'blue')
const svg = triangle.generateSvg
expect(svg).toContain('<polygon');
    });
});