function checkpsw() {
    if (document.getElementById('psw').value == document.getElementById('psw-repeat').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Matching password';
        document.getElementById('signupbtn').disabled = false;
    }
    else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Password does not match';
      document.getElementById('signupbtn').disabled = true;
    }
  }
  
  function SignUp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const color = document.getElementById('message').style.color;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const street = document.getElementById('street').value;
    const apartment = document.getElementById('apartment').value;
    const postalcode = document.getElementById('postalcode').value;


    if ((name != "") && (/\S+@\S+\.\S+/.test(email)) &&
        (email != "") && (color == 'green') &&
        (phone != "") && (city != "") &&
        (street != "") && (apartment != "") &&
        (postalcode != "") ) 
    {
        alert("Your details have been saved in the system!");
    }
  }