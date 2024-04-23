const CLI = require("./lib/cli")
const fs = require(`fs`)
const inquirer = require(`inquirer`);

const myCLI = new CLI()
myCLI.run();






























// var firstName = "Alex"
// var lastName = "Gonzalez"
// var age = 26

// console.log("My name is " + firstName + " " + lastName + " and I'm " + age + " years old")
// console.log(`My name is ${firstName} ${lastName} and I'm ${age} years old`)
// class title {
//     constructor(name){
//         this.name = name
//     }
// }
// console.log(title)
// logo generator
// step 1: a promopt that asks you what your logo should look
    //prompted for text - up to 3 characters
    //prompted for text color - color keyword OR a hexadecimal number
    //prompted for a shape - a dropdown should appear with three options, either circle triangle or square.
    // when i am prompted for the shapes color - with a color keyword or a hexadecimal number.
// step2: after finishing inputing the data a logo.svg file will be created
    // the file will be created with fs.writefile(string, string, function(err){} )
    // 1st Argument: path of the file
    // 2nd argument: my svg logo as a string

// how to create a logo - an svg logo

//svg fill is the color; stroke is the border; stroke-width is the border thickness
//shape here is a Circle()
{/* `<svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="75" cy="50" r="40" fill="${userInput.shapeColor}" />
  ${shape.render()}
  <text x="75" y="60" font-size="30" text-anchor="middle" fill="${userInput.userTextColorPreference}">${userInput.textTheyWant}</text>
</svg>` */}
//shape here is a Tringle()
{/* <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
 ${shape.render()}
 <text x="75" y="60" font-size="30" text-anchor="middle" fill="red">SVG</text>
</svg> */}
//shape here is a new Rectangle()
{/* <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" x="10" y="10" rx="20" ry="20" fill="blue" />
   <text x="75" y="60" font-size="30" text-anchor="middle" fill="red">SVG</text>
</svg> */}