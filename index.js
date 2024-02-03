const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js')
const Triangle = require('./lib/triangle.js')
const Square = require('./lib/square.js')
const Shape = require('./lib/shape.js')



class CreateSVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, textColor) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    } 
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the THREE letters you want on your logo:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo!',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape color to be?'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err) {
            return console.log('Error generating logo:(', err);
        }
        console.log('Your SVG logo has been generated!');
    });
}

async function init() {
    try {
        const answers = await inquirer.prompt(questions);

        let shape;
        switch (answers.shape) {
            case 'Circle':
                shape = new Circle();
                break;
            case 'Square':
                shape = new Square();
                break;
            case 'Triangle':
                shape = new Triangle();
                break;
        }

        shape.setColor(answers.shapeColor);

        const svg = new CreateSVG();
        svg.setTextElement(answers.text, answers.textColor);
        svg.setShapeElement(shape);

        
        const fileName = "./examples/logo.svg";
        writeToFile(fileName, svg.render());
    } catch (error) {
        console.error('An error occurred: ', error);
    }
}

init();