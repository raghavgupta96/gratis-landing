/* adjust Hero image with width*/
var initWidth = 1281;
var image = document.querySelector(".image0");

var resize = function (docWidth) {
    if (docWidth >= initWidth) {
        var diff = (docWidth - initWidth) / 100;
        image.style.top = -1 * (55 + diff * 16) + "%";
    } else {
        image.style.top = "-250px";
    }
};

resize(window.innerWidth);


//If user resszizes the website
window.addEventListener("resize", function () {
    var width = window.innerWidth;
    resize(width);

});
