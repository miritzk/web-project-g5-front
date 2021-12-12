// check email & password input
function checkLogin() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (!email.checkValidity()) {
        document.getElementById("error_msg").innerHTML = email.validationMessage;
    }
    else if (password.value.length < 6) {
        document.getElementById("error_msg").innerHTML = "Passwords must have at least 6 characters";
    }
    else {
        document.getElementById("error_msg").innerHTML = "";
    }
}
