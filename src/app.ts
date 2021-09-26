import * as paper from "paper/dist/paper-core";

// @ts-ignore
paper = paper.default;

// Only executed our code once the DOM is ready.
window.onload = function() {
    // Create an empty project and a view for the canvas:
    paper.setup('myCanvas');
    // Create a Paper.js Path to draw a line into it:
    const path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = new paper.Color('black');
    const start = new paper.Point(100, 100);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add(new paper.Point(200, -50)));
};
