// -- stop motion exp -- //

var images = ["images/aboutPic2.JPG",
             "images/aboutPic3.JFIF", 
             "images/aboutPic4.JPG",
             "images/aboutPic5.JFIF",
             "images/aboutPic6.JFIF"];
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
        }
    }, 2500)
}