/* adjust Hero image with width*/
var initWidth = 1281;
var docWidth = window.innerWidth;
var image = document.querySelector(".image0");

if (docWidth >= initWidth) {
    console.log("we are getting bigger");
    var diff = (docWidth - initWidth) / 100;

    image.style.top = -1 * (55 + diff * 16) + "%";
}
