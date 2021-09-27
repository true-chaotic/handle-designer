import './app.scss';
import * as paper from "paper/dist/paper-core";

// @ts-ignore
paper = paper.default;

// Only executed our code once the DOM is ready.
window.onload = function() {
    // Create an empty project and a view for the canvas:
    paper.setup('myCanvas');
    paper.view.zoom = 5;

    const centersDistance = 70;

    const {x, y} = paper.view.center;

    const leftOuterRadius = 8;
    const leftInnerRadius = 4.2;
    const leftX = x - centersDistance/2;
    const leftY = y;

    const rightOuterRadius = 8;
    const rightInnerRadius = 4.2;
    const rightX = x + centersDistance/2;
    const rightY = y;

    const leftOuter = new paper.Path.Circle({
        center: new paper.Point(leftX, leftY),
        radius: leftOuterRadius,
        fillColor: 'red'
    });

    const leftInner = new paper.Path.Circle({
        center: new paper.Point(leftX, leftY),
        radius: leftInnerRadius,
        fillColor: 'blue'
    });

    const leftRing = leftOuter.subtract(leftInner);
    leftRing.strokeColor = new paper.Color('black');
    leftRing.fillColor = new paper.Color('white');
    leftRing.strokeWidth = 1;

    leftOuter.remove();
    leftInner.remove();

    const rightOuter = new paper.Path.Circle({
        center: new paper.Point(rightX, rightY),
        radius: rightOuterRadius,
        fillColor: 'red'
    });

    const rightInner = new paper.Path.Circle({
        center: new paper.Point(rightX, rightY),
        radius: rightInnerRadius,
        fillColor: 'blue'
    });

    const rightRing = rightOuter.subtract(rightInner);
    rightRing.strokeColor = new paper.Color('black');
    rightRing.fillColor = new paper.Color('white');
    rightRing.strokeWidth = 1;

    rightOuter.remove();
    rightInner.remove();
};
