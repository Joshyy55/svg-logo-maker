const { Test } = require("it/lib/interfaces")
const { Square, Triangle, Circle } = require("../lib/shape")

describe("Square", () => {
    test("should render svg for a red circle element", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="blue"/>`
        const circle = new Circle();
        circle.setColor("red");
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG)
    })

    test("should accept a fillColor input", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="blue"/>`
        const circle = new Circle()
        //setter method to purple
        circle.setColor("purple")
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG)
    })
})

describe("triangle", () => {
    test("should render svg for orange polygon element", () => {
        const expectedSVG = `ploygon points="150, 18, 244, 182, 56, 182" fill="teal" />`
        const triangle = new Triangle()
        triangle.setColor("teal")
        const actualSVG = triangle.render()
        expect(actualSVG).toEqual(expectedSVG)
    })

    test("", () => {
        
    })
})

describe("Square", () => {
    test("", () => {
        
    })

    test("", () => {
        
    })
})