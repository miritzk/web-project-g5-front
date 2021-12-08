function checkpsw() {
    if (document.getElementById('psw').value ==
      document.getElementById('psw-repeat').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'הסיסמה תואמת';
      document.getElementById('signupbtn').disabled = false;
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'הסיסמה אינה תואמת';
      document.getElementById('signupbtn').disabled = true;
    }
  }
  
  function SignUp(){
    if ((document.getElementById('name').value != "")&&
        (/\S+@\S+\.\S+/.test((document.getElementById('email').value)))&&
        (document.getElementById('email').value != "")&&
        (document.getElementById('message').style.color == 'green')&&
        (document.getElementById('name').value != "")&&
        (document.getElementById('phone').value != "")&&
        (document.getElementById('city').value != "")&&
        (document.getElementById('street').value != "")&&
        (document.getElementById('apartment').value != "")&&
        (document.getElementById('postalcode').value != "")
  
    ){
        alert("פרטיך נשמרו במערכת!");
    }
  }