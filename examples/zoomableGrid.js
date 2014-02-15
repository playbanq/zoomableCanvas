var canvas = document.getElementById('zoomableCanvas'),
    context = canvas.getContext('2d');

TiledCanvas.extend(canvas, 20);
    canvas.setSize();
    canvas.grid.setSize();

ZoomableCanvas.extend(canvas);

setInterval(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.grid.draw();
}, 33);