// Create an empty project and a view for the canvas:
import * as paper from "paper/dist/paper-core";

// @ts-ignore
paper = paper.default;

export default function drawHandle() {
    paper.view.zoom = 5;

    const centersDistance = 70;

    const {x, y} = paper.view.center;

    const leftOuterRadius = 6;
    const leftInnerRadius = 2.5;
    const leftX = x - centersDistance / 2;
    const leftXMax = leftX - leftOuterRadius;
    const leftY = y;

    const rightOuterRadius = 4;
    const rightInnerRadius = 2.1;
    const rightX = x + centersDistance / 2;
    const rightXmax = rightX + rightOuterRadius;
    const rightY = y;

    const mainRadius = 22;
    const connectorRadius = 2;
    const auxRadius = ((rightXmax - leftXMax) - (2 * mainRadius) - (2 * connectorRadius)) / 2;

    const rightArcTop = new paper.Path.Circle({
        center: new paper.Point(rightXmax - mainRadius, leftY),
        radius: mainRadius,
        fillColor: 'white',
        strokeColor: 'black',
        strokeWidth: 0.1
    });

    const rightArcBottom = new paper.Path.Circle({
        center: new paper.Point(rightXmax - 2 * connectorRadius - auxRadius, leftY),
        radius: auxRadius,
        fillColor: 'green'
    });

    const rightArcCutter = new paper.Path.Rectangle({
        position: new paper.Point(rightXmax - mainRadius, leftY + mainRadius),
        size: mainRadius * 2,
    });

    const rightOuter = new paper.Path.Circle({
        center: new paper.Point(rightX, rightY),
        radius: rightOuterRadius,
    });

    const rightInner = new paper.Path.Circle({
        center: new paper.Point(rightX, rightY),
        radius: rightInnerRadius,
    });

    const rightArc = rightArcTop.subtract(rightArcBottom);
    const rightArcClean = rightArc.subtract(rightArcCutter).unite(rightOuter).subtract(rightInner);

    rightArcTop.remove();
    rightArcBottom.remove();
    rightArc.remove();
    rightOuter.remove();
    rightInner.remove();

    const leftArcTop = new paper.Path.Circle({
        center: new paper.Point(leftXMax + mainRadius, leftY),
        radius: mainRadius,
        fillColor: 'white',
        strokeColor: 'black',
        strokeWidth: 0.1
    });

    const leftArcBottom = new paper.Path.Circle({
        center: new paper.Point(leftXMax + 2 * connectorRadius + auxRadius, leftY),
        radius: auxRadius,
        fillColor: 'green'
    });

    const leftArcCutter = new paper.Path.Rectangle({
        position: new paper.Point(leftXMax + mainRadius, leftY - mainRadius),
        size: mainRadius * 2,
    });

    const leftOuter = new paper.Path.Circle({
        center: new paper.Point(leftX, leftY),
        radius: leftOuterRadius,
    });

    const leftInner = new paper.Path.Circle({
        center: new paper.Point(leftX, leftY),
        radius: leftInnerRadius,
    });

    const leftArc = leftArcTop.subtract(leftArcBottom);
    const leftArcClean = leftArc.subtract(leftArcCutter).unite(leftOuter).subtract(leftInner);

    leftArcTop.remove();
    leftArcBottom.remove();
    leftArc.remove();
    leftOuter.remove();
    leftInner.remove();

    const complete = leftArcClean.unite(rightArcClean);
    leftArcClean.remove();
    rightArcClean.remove();
}
