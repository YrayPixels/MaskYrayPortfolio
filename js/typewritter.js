$(document).ready(function () {
    function animate(elements, callback) {
        var i = 0;
        (function iterate() {
            if (i < elements.length) {
                elements[i].style.display = "block";
                animateNode(elements[i], iterate);
                i++;
            } else
                callback();
        })();
        function animateNode(element, callback) {
            var pieces = [];
            if (element.nodeType == 1) {
                while (element.hasChildNodes())
                    pieces.push(element.removeChild(element.firstChild));
                setTimeout(function childStep() {
                    if (pieces.length) {
                        animateNode(pieces[0], childStep);
                        element.appendChild(pieces.shift());
                    } else
                        callback();
                }, 10000 / 60);
            } else if (element.nodeType == 3) {
                pieces = element.data.match(/.{0,1}/g);
                element.data = "";
                (function addText() {
                    element.data += pieces.shift();
                    setTimeout(pieces.length
                        ? addText
                        : callback,
                        7000 / 60);
                })();
            }
        }
    }

    animate($("#Intro"));
});