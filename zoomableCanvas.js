/** Enables the zooming of maps by modifying a scale property that affects the drawing of its grid
 * @param {object} canvas - The canvas element object obtained from document.getElementById
 * @returns {object} - An object containing the methods used to extend the initial canvas object
 */
var ZoomableCanvas = Object.create({}, {
    'extend': {
        value: zoomableCanvas
    }
});

function zoomableCanvas(canvas) {
    if (canvas.nodeName !== 'CANVAS') {
        console.log('ERROR: The element provided is not a canvas element.');
        return;
    }

    // The zoom ratio
    var zoom = {
        scale: 1,
        speed: 1,
        keys: { // i, o
            'in': 73,
            'out': 79
        },
        'in': false,
        'out': false
    };

    var properties = {
        zoomOut: {
            value: function () {

            }
        },
        zoomOut: {
            value: function () {

            }
        },
        zoomTo: {
            value: function () {

            }
        },
        setSize: {
            writable: true,
            value: function (newWidth, newHeight) {
                canvas.width = newWidth || window.innerWidth;
                canvas.height = newHeight || window.innerHeight;
            }
        }
    };

    // Zoom key handling
    // On 'keydown' events
    var zoomInPressed, zoomOutPressed
    document.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode;
        if (!zoom.in && zoom.keys['in'] == keyCode) {
            zoom.in = true;
        } else if (!zoom.out && zoom.keys['out'] == keyCode) {
            zoom.out = true;
        }
    });

    // On 'keyup' events
    document.addEventListener('keyup', function () {
        var keyCode = event.keyCode;
        if (zoom.in && zoom.keys['in'] == keyCode) {
            zoom.in = false;
        } else if (zoom.out && zoom.keys['out'] == keyCode) {
            zoom.out = false;
        }
    });

    window.addEventListener('scroll', function () {
        console.log('scroll');
    });

    Object.defineProperties(canvas, properties);
    
    return Object.create({}, properties);
}