// -- stop motion exp -- //

var images = ["images/aboutPic2.jpeg",
    "images/aboutPic3.jpeg",
    "images/aboutPic4.jpeg",
    "images/aboutPic5.jpeg",
    "images/aboutPic6.jpeg",
    "images/aboutPic7.jpeg",
    "images/aboutPic8.jpeg",
    "images/aboutPic9.jpeg",
    "images/aboutPic10.jpeg"];
var i = 0;

function stopmotionloop() {
    setTimeout(() => {
        document.getElementById("p_1").src = images[i];
        i++;
        if (i < images.length) {
            stopmotionloop();
        }
        else {
            i = 0;
            stopmotionloop();
        }
    }, 1500)
}