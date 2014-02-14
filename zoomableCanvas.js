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
    var zoom = 1,
        zoomSpeed = 1;

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

    Object.defineProperties(canvas, properties);
    
    return Object.create({}, properties);
}