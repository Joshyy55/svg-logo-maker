const SVG = require("../lib/svg");

const {Square } = require("../lib/shapes");

Test("should render a 300x200 svg element", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    const svg = new SVG();
    const actualSVG = svg.render();
    expect(svg.render).toEqual(expectedSVG);

})

Test("should append text element", () => {
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">text x="150" y="125" font-size="60" text-anchor="middle" fill="black">A</text></svg>`
    const svg = new SVG();
    svg.settext("A", "black")
    expect(svg.render()).toEqual(expectedSVG)
})