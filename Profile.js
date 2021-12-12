function openTab(evt, id) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(id).style.display = "block";
  evt.currentTarget.className += " active";
}


function editForm() {
  arr = [
    document.getElementById("inputFullName"),
    document.getElementById("inputEmail"),
    document.getElementById("inputPhoneNumber"),
    document.getElementById("inputCity"),
    document.getElementById("inputStreet"),
    document.getElementById("inputAprtNum"),
    document.getElementById("inputZipCode"),
    document.getElementById("inputPassword")
  ]
  arr.forEach((element) => {
    element.disabled = false;
    element.className = "";
  })
  document.getElementById("updateDetails").hidden = true;
  document.getElementById("submitUpdate").hidden = false;
}

function submitForm() {
  arr = [
    document.getElementById("inputFullName"),
    document.getElementById("inputEmail"),
    document.getElementById("inputPhoneNumber"),
    document.getElementById("inputCity"),
    document.getElementById("inputStreet"),
    document.getElementById("inputAprtNum"),
    document.getElementById("inputZipCode"),
    document.getElementById("inputPassword")
  ]
  arr.forEach((element) => {
    element.disabled = true;
    element.className = "nonEdit";
  })
  document.getElementById("updateDetails").hidden = false;
  document.getElementById("submitUpdate").hidden = true;
}


function editCardInfo() {
  arr = [
    document.getElementById("inputCreditCard"),
    document.getElementById("inputExpirationDate"),
    document.getElementById("inputCVV"),
  ]
  arr.forEach((element) => {
    element.disabled = false;
    element.className = "";
  })
  document.getElementById("updateCardInfo").hidden = true;
  document.getElementById("submitCardInfo").hidden = false;
}

function submitCardInfo() {
  arr = [
    document.getElementById("inputCreditCard"),
    document.getElementById("inputExpirationDate"),
    document.getElementById("inputCVV"),
  ]
  arr.forEach((element) => {
    element.disabled = true;
    element.className = "nonEdit";
  })
  document.getElementById("updateCardInfo").hidden = false;
  document.getElementById("submitCardInfo").hidden = true;
}