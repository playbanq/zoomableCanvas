var canvas = document.getElementById('zoomableCanvas'),
    context = canvas.getContext('2d');

TiledCanvas.extend(canvas, 20);
    canvas.setSize();
    canvas.grid.setSize();
    canvas.grid.draw();

ZoomableCanvas.extend(canvas);