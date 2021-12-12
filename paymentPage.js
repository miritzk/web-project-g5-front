function allLetter() {
    // debugger;
    var lettersAndWhiteSpace = /^[a-zA-Z\s]*$/;
    const numbers = /^[0-9]+$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const fname = document.getElementById("fname");
    const email = document.getElementById("email");
    const cname = document.getElementById("cname");
    const expyear = document.getElementById("expyear");
    const cardNum = document.getElementById("ccnum");
    const cvv = document.getElementById("cvv");

    if (!fname.value.match(lettersAndWhiteSpace)) {
        alert("Fill in alphabet letters only in Full Name");
        return false;
    } else if (!cname.value.match(lettersAndWhiteSpace) || cname.value.length < 3) {
        alert("Fill in alphabet letters only in Card Name");
        return false;
    } else if (!email.checkValidity() || !email.value.match(emailRegex)) {
        alert(" Invalid email address");
        return false;
    } else if (!expyear.value.match(numbers) || parseInt(expyear.value) < moment().year()) {
        alert("Invalid expiry year");
        return false;
    }
    else if (!cardNum.value.match(numbers) || cardNum.value.length !== 16) {
        alert("Invalid card number");
        return false;
    }
    else if (!cvv.value.match(numbers) || cvv.value.length !== 3) {
        alert("Invalid cvv");
        return false;
    }
    else if (zip.value.length !== 5 || !zip.value.match(numbers)) {
        alert("Invalid zip code");
        return false;
    }
    else if (!city.value.match(letters) || city.value.length < 3) {
        alert("Invalid city");
        return false;
    }
    else {
        return true;
    }
}
