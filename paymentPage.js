// function check_fullname() {
//     if (document.getElementById('fname').value.match(letters)) {
//         // document.getElementById('message').style.color = 'green';
//         // document.getElementById('message').innerHTML = 'Matching password';
//         document.getElementById('confirm_pay_btn').disabled = false;
//     }
//     else {
//       document.getElementById('message').style.color = 'red';
//       document.getElementById('message').innerHTML = 'Password does not match';
//       document.getElementById('confirm_pay_btn').disabled = true;
//     }
//   }


function allLetter()
  {
   var letters = /^[A-Za-z]+$/;
   const fname = document.getElementById("fname");
   const email = document.getElementById("email");
   const cname = document.getElementById("cname");
   const expyear = document.getElementById("expyear");
 


   if(fname.value.match(letters) && cname.value.match(letters) && email.checkValidity() && !expyear.value.match(letters)) {
      return true;
    }
    else if (!fname.value.match(letters) || !cname.value.match(letters)) {
        alert("Fill in alphabet letters only");
        return false;
    }
    else if (!email.checkValidity()) {
        alert(" Invalid email address");
        return false;
  }
  else if (!expyear.value.match(letters)) {
    alert(" Fill in numbers only");
    return false;
}
  }
