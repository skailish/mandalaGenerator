/**
 * Summary. 
 * Mandala interactive generator.
 *
 * Description.
 * Mandala generator with canvas.
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author AuthorName.
 * @since  x.x.x
 */

/** jshint {inline configuration here} */

let drawingCanvas = "";
let canvasContext = "";
let canvasWidth = 0;
let canvasHeight = 0;
let xPrev = 0;
let xCurrent = 0;
let yPrev = 0;
let yCurrent = 0;
let isDrawing = false;


const initialize = () => {
    drawingCanvas = document.getElementById("canvas");
    console.dir(drawingCanvas)
    canvasContext = drawingCanvas.getContext("2d");
    canvasWidth = drawingCanvas.width;
    canvasHeight = drawingCanvas.height;
    drawingCanvas.onpointermove = handleMove;
    drawingCanvas.onpointerdown = handleMoveDown;
    drawingCanvas.onpointerup = stopDrawing;
    drawingCanvas.onpointerout = stopDrawing;
    document.getElementById("clear").onclick = clearCanvas;
}

const getPointerOnDrawing = (event) => {
    xPrev = xCurrent;
    yPrev = yCurrent;
    xCurrent = event.clientX - drawingCanvas.offsetLeft;
    yCurrent = event.clientY - drawingCanvas.offsetTop;
}



const handleMove = (event) => {
    if (isDrawing) {
        getPointerOnDrawing(event);
        drawLine();
    }
}

const handleMoveDown = (event) => {
    getPointerOnDrawing(event);
    isDrawing = true;
}

const drawLine = () => {
    let positionA = xPrev;
    let tempA = positionA;
    let positionB = yPrev;
    let tempB = canvasHeight - positionB;
    let positionC = xCurrent;
    let tempC = positionC;
    let positionD = yCurrent;
    let tempD = canvasHeight - positionD;

    canvasContext.strokeStyle = getColor();
    canvasContext.lineWidth = 2;
    canvasContext.lineCap = "round";

    canvasContext.beginPath();

    canvasContext.moveTo(positionA, positionB);
    canvasContext.lineTo(positionC, positionD);

    canvasContext.moveTo(tempA, tempB);
    canvasContext.lineTo(tempC, tempD);

    tempA = canvasWidth - positionA; tempB = positionB;
    tempC = canvasWidth - positionC; tempD = positionD;
    canvasContext.moveTo(tempA, tempB);
    canvasContext.lineTo(tempC, tempD);

    tempA = canvasWidth - positionA; tempB = canvasHeight - positionB;
    tempC = canvasWidth - positionC; tempD = canvasHeight - positionD;
    canvasContext.moveTo(tempA, tempB);
    canvasContext.lineTo(tempC, tempD);

    tempA = canvasWidth / 2 + canvasHeight / 2 - positionB;
    tempB = canvasWidth / 2 + canvasHeight / 2 - positionA;
    tempC = canvasWidth / 2 + canvasHeight / 2 - positionD;
    tempD = canvasWidth / 2 + canvasHeight / 2 - positionC;
    canvasContext.moveTo(tempA, tempB);
    canvasContext.lineTo(tempC, tempD);

    tempA = canvasWidth / 2 + canvasHeight / 2 - positionB;
    tempB = canvasHeight / 2 - canvasWidth / 2 + positionA;
    tempC = canvasWidth / 2 + canvasHeight / 2 - positionD;
    tempD = canvasHeight / 2 - canvasWidth / 2 + positionC;
    canvasContext.moveTo(tempA, tempB);
    canvasContext.lineTo(tempC, tempD);

    tempA = canvasWidth / 2 - canvasHeight / 2 + positionB;
    tempB = canvasWidth / 2 + canvasHeight / 2 - positionA;
    tempC = canvasWidth / 2 - canvasHeight / 2 + positionD;
    tempD = canvasWidth / 2 + canvasHeight / 2 - positionC;
    canvasContext.moveTo(tempA, tempB);
    canvasContext.lineTo(tempC, tempD);

    tempA = canvasWidth / 2 - canvasHeight / 2 + positionB;
    tempB = canvasHeight / 2 - canvasWidth / 2 + positionA;
    tempC = canvasWidth / 2 - canvasHeight / 2 + positionD;
    tempD = canvasHeight / 2 - canvasWidth / 2 + positionC;
    canvasContext.moveTo(tempA, tempB);
    canvasContext.lineTo(tempC, tempD);

    canvasContext.stroke();
    canvasContext.closePath();
}

const stopDrawing = () => {
    isDrawing = false;
}

const clearCanvas = () => {
    if (confirm("Are you sure you want to lose your drawing?")) {
        canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
    }
}

const getColor = () => {
    return document.getElementById("color").value;
}

window.onload = initialize;
