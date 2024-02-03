const Circle = require('./circle.js')
const Triangle = require('./triangle.js')
const Square = require('./square.js')
// const Shape = require('./lib/shape.js')

describe("Triangle", () => {
test("Testing triangle", () => {
var Shape = new Triangle();
Shape.setColor("blue");
expect(Shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
});
});

describe("Square", () => {
test("Testing square", () => {
var Shape = new Square();
Shape.setColor("pink");
expect(Shape.render()).toEqual('<rect x="50" height="200" width="200" fill="pink"/>');
});
});


describe("Circle", () => {
test("Testing circle", () => {
var Shape = new Circle();
Shape.setColor("green");
expect(Shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" fill="green"/>');
});
});