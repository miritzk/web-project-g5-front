// -- stop motion exp -- //

var images = ["images/aboutPic2.JPG",
             "images/aboutPic3.JFIF", 
             "images/aboutPic4.JPG",
             "images/aboutPic5.JFIF",
             "images/aboutPic6.JFIF",
             "images/aboutPic7.JFIF", 
             "images/aboutPic8.JFIF",
             "images/aboutPic9.JPG",
             "images/aboutPic10.JPG"];
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
    }, 1500)
}