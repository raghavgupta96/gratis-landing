/* adjust Hero image with width*/
var initWidth = 1281;
var image = document.querySelector(".image0");

window.addEventListener("resize", function () {
    var docWidth = window.innerWidth;

    if (docWidth >= initWidth) {
        var diff = (docWidth - initWidth) / 100;
        image.style.top = -1 * (55 + diff * 16) + "%";
    } else {
        image.style.top = "-290px";
    }
});
