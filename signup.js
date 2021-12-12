function checkpsw() {
    if (document.getElementById('psw').value == document.getElementById('psw-repeat').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Matching password';
        document.getElementById('signupbtn').disabled = false;
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Password does not match';
        document.getElementById('signupbtn').disabled = true;
    }
}

function SignUp() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const numbersRegex = /^[0-9]+$/;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const color = document.getElementById('message').style.color;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const password = document.getElementById('psw').value;
    const street = document.getElementById('street').value;
    const apartmentNumber = document.getElementById('apartment').value;
    const postalcode = document.getElementById('postalcode').value;

    if (!name.match(nameRegex)) {
        alert('Name must contain only letters');
        return false;
    }

    if (!email.match(emailRegex)) {
        alert('Email is not valid');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 8 characters long');
        return false;
    }

    if (!phone.match(phoneRegex)) {
        alert('Phone number must contain only numbers and must be 10 digits long');
        return false;
    }

    if (!city.match(nameRegex)) {
        alert('City must contain only letters');
        return false;
    }

    if (!street.match(nameRegex)) {
        alert('Street must contain only letters');
        return false;
    }

    if (!apartmentNumber.match(numbersRegex)) {
        alert('Apartment number must contain only numbers');
        return false;
    }

    if (!postalcode.match(numbersRegex)) {
        alert('Postal code must contain only numbers');
        return false;
    }


    if ((name != "") && (/\S+@\S+\.\S+/.test(email)) &&
        (email != "") && (color == 'green') &&
        (phone != "") && (city != "") &&
        (street != "") && (apartmentNumber != "") &&
        (postalcode != "")) {
        alert("Your details have been saved in the system!");
        return true;
    }
}