const inquirer = require(`inquirer`);
const SVG = require(`./svg`);
const { Square, Triangle, Circle } = require(`./shape`)
const { writeFile } = require(`fs/promises`);
const { default: Choices } = require("inquirer/lib/objects/choices");


class CLI {
    run() {
        const questions = [
            {
                name: "text",
                type: "input",
                message: "text for logo (cannot exceed 3 characters please):",
                validate: (text) => {
                    if (text.length > 3 ) {
                        return "message cant exceed over 3 characters please";
                    } 
                    return true;
                }
            },
            {
                name: "textColor",
                type: "input", 
                message: "Enter text color, please:",
            },
            {
                name: "shapeType",
                type: "list", 
                choices: ["circle", "triangle", "square"],
            }, 
            {
                name: "shapeColor",
                type: "input", 
                message: "Enter shape color, please:",
            }
        ]
        return inquirer.prompt(questions).then(({text, textColor, shapeType, shapeColor}) => {
            let shape;
            if (shapeType === "circle") {
               shape = new Circle(); 
            } else if(shapeType === "triangle") {
                shape = new Triangle();
            } else if(shapeType === "square") {
                shape = new Square();
            }

            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile(`./examples/${text}.svg`, svg.render())
        }).then(() => {
            console.log("SVG was created, thank you")
        }).catch((error) => {
            console.error("uh oh error ocurred: ", error)
        });
    }
}

module.exports = CLI;