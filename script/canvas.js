/**
 * Summary. 
 * Mandala interactive generator.
 *
 * Description.
 * Mandala generator with canvas.
 *
 * @link   https://skailish.github.io/mandalaGenerator/
 * @author Daniela Capponi.
 * @since  09.07.2020
 */


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
    drawingCanvas = document.getElementById("canvasMandala");
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
    if (confirm("¿Seguro que querés limpiar el lienzo?")) {
        canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
    }
}

const getColor = () => {
    return document.getElementById("color").value;
}

window.onload = initialize;

// /* Variables de Configuracion */
// var idCanvas = 'canvas';
// var idForm = 'formCanvas';
// var inputImagen = 'imagen';
// var estiloDelCursor = 'crosshair';
// var colorDeFondo = '#fff';
// var grosorDelTrazo = 2;

// /* Variables necesarias */
// var contexto = null;
// var valX = 0;
// var valY = 0;
// var flag = false;
// var imagen = document.getElementById(inputImagen);
// var anchoCanvas = document.getElementById(idCanvas).offsetWidth;
// var altoCanvas = document.getElementById(idCanvas).offsetHeight;
// var pizarraCanvas = document.getElementById(idCanvas);


// function IniciarDibujo() {
//     /* Creamos la pizarra */
//     pizarraCanvas.style.cursor = estiloDelCursor;
//     contexto = pizarraCanvas.getContext('2d');
//     contexto.fillStyle = colorDeFondo;
//     contexto.fillRect(0, 0, anchoCanvas, altoCanvas);
//     contexto.strokeStyle = colorDelTrazo;
//     contexto.lineWidth = grosorDelTrazo;
//     contexto.lineJoin = 'round';
//     contexto.lineCap = 'round';
//     /* Capturamos los diferentes eventos */
//     pizarraCanvas.addEventListener('mousedown', MouseDown, false);// Click pc
//     pizarraCanvas.addEventListener('mouseup', MouseUp, false);// fin click pc
//     pizarraCanvas.addEventListener('mousemove', MouseMove, false);// arrastrar pc

//     pizarraCanvas.addEventListener('touchstart', TouchStart, false);// tocar pantalla tactil
//     pizarraCanvas.addEventListener('touchmove', TouchMove, false);// arrastras pantalla tactil
//     pizarraCanvas.addEventListener('touchend', TouchEnd, false);// fin tocar pantalla dentro de la pizarra
//     pizarraCanvas.addEventListener('touchleave', TouchEnd, false);// fin tocar pantalla fuera de la pizarra
// }

// function MouseDown(e) {
//     flag = true;
//     contexto.beginPath();
//     valX = e.pageX - posicionX(pizarraCanvas); valY = e.pageY - posicionY(pizarraCanvas);
//     contexto.moveTo(valX, valY);
// }

// function MouseUp(e) {
//     contexto.closePath();
//     flag = false;
// }

// function MouseMove(e) {
//     if (flag) {
//         contexto.beginPath();
//         contexto.moveTo(valX, valY);
//         valX = e.pageX - posicionX(pizarraCanvas); valY = e.pageY - posicionY(pizarraCanvas);
//         contexto.lineTo(valX, valY);
//         contexto.closePath();
//         contexto.stroke();
//     }
// }

// function TouchMove(e) {
//     e.preventDefault();
//     if (e.targetTouches.length == 1) {
//         var touch = e.targetTouches[0];
//         MouseMove(touch);
//     }
// }

// function TouchStart(e) {
//     if (e.targetTouches.length == 1) {
//         var touch = e.targetTouches[0];
//         MouseDown(touch);
//     }
// }

// function TouchEnd(e) {
//     if (e.targetTouches.length == 1) {
//         var touch = e.targetTouches[0];
//         MouseUp(touch);
//     }
// }

// function posicionY(obj) {
//     var valor = obj.offsetTop;
//     if (obj.offsetParent) valor += posicionY(obj.offsetParent);
//     return valor;
// }

// function posicionX(obj) {
//     var valor = obj.offsetLeft;
//     if (obj.offsetParent) valor += posicionX(obj.offsetParent);
//     return valor;
// }

// /* Limpiar pizarra */
// function LimpiarTrazado() {
//     contexto = document.getElementById(idCanvas).getContext('2d');
//     contexto.fillStyle = colorDeFondo;
//     contexto.fillRect(0, 0, anchoCanvas, altoCanvas);
// }

// /* Enviar el trazado */
// function GuardarTrazado() {
//     imagen.value = document.getElementById(idCanvas).toDataURL('image/png');
//     document.forms[idForm].submit();
// }

// /* Esperamos el evento load */
// window.addEventListener('load', IniciarDibujo, false);
