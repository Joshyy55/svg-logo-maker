const inquirer = require(`inquirer`);
const SVG = require(`./svg`);
const { Square, Triangle, Circle } = require(`./shape`)
const { writeFile } = require(`fs/promises`);


class CLI {
    run() {
        const questions = [
            {
                name: "text",
                type: "input",
                message: "text for logo (cannot exceed 3 characters please):",
                validate: (text) => {
                    return text.legnth <= 3 || "message cant exceed over 3 characters please";
                }
            }
        ]
        return inquirer(questions).then(answers) => {
            console.log(answers);
        }
    }
}