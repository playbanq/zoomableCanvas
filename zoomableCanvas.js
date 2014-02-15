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
        speed: 1.02,
        keys: { // i, o
            'in': 73,
            'out': 79
        },
        'in': false,
        'out': false
    };

    var properties = {
        zoom: {
            value: zoom,
        },
        zoomIn: {
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
    if (typeof KeyboardEvents === 'object') {
        var keyboard = new KeyboardEvents.emitter(),
            zoomTemp;
        keyboard.on('in', 73, {
            'onkeyhold': function (delta) {
                zoomTemp = zoom.scale * (zoom.speed); // + delta) / delta;
                zoom.scale = zoomTemp;
            }
        });
        keyboard.on('out', 79, {
            'onkeyhold': function (delta) {
                zoomTemp = zoom.scale / (zoom.speed); // + delta) / delta;
                if (canvas.width/zoomTemp <= Math.abs(canvas.grid.right - canvas.grid.left) &&
                    canvas.height/zoomTemp <= Math.abs(canvas.grid.bottom - canvas.grid.top)) {
                    zoom.scale = zoomTemp;
                    var offset = canvas.width/zoom.scale + canvas.grid.offset.left;
                    if (offset > canvas.grid.right) {
                        canvas.grid.offset.left = canvas.grid.right - canvas.width/zoom.scale;
                    }
                    offset = canvas.height/zoom.scale + canvas.grid.offset.top;
                    if (offset > canvas.grid.bottom) {
                        canvas.grid.offset.top = canvas.grid.bottom - canvas.height/zoom.scale;
                    }
                }   
            }
        });
    }

    window.addEventListener('scroll', function () {
        console.log('scroll');
    });

    Object.defineProperties(canvas, properties);
    
    return Object.create({}, properties);
}