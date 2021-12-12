function allLetter() {
  var letters = /^[A-Za-z]+$/;
  const input_full_name = document.getElementById("input_full_name");
  const email = document.getElementById("input_email");
  if (input_full_name.value.match(letters) && email.checkValidity()) {
    return true;
  }
  else if (!input_full_name.value.match(letters)) {
    alert("Fill in alphabet letters only");
    return false;
  }
  else if (!email.checkValidity()) {
    alert(" Invalid email address");
    return false;

  }
}
