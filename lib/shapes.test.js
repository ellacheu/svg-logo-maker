// require shape classes to test
const Triangle = require('./shapes').Triangle;
const Circle = require('./shapes').Circle;
const Square = require('./shapes').Square;

// test function to return shape with set color
describe('Triangle', () => {
  test('render() returns the SVG shape with the set shape color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual("<polygon points='0, 260 150, 0 300, 260' fill='blue' />");
  });
});

describe('Circle', () => {
    test('render() returns the SVG shape with the set shape color', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual("<circle cx='150' cy='100' r='100' fill='red'/>")
    });
});

describe('Square', () => {
    test('render() returns the SVG shape with the set shape color', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual("<rect x='25' y='25' width='250' height='250' fill='green'/>")
    })
})

