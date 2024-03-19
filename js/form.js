"use strict";
const formRegistrBox = document.getElementById("formRegistrBox");
const submitRegistre = document.getElementById("submitRegistre");
formRegistrBox.addEventListener("submit", (e) => {
  e.preventDefault();
  const errors = {};
  //იუზერის სახელი
  let FirstName = document.getElementById("FirstName").value;
  if (FirstName.value == "") {
    errors.FirstName = "can not be empty";
  }
  // იუზერის გვარი
  let LastName = document.getElementById("LastName").value;
  if (LastName.value == "") {
    errors.LastName = "can not be empty";
  }
  // პაროლი
  let passwordRegistr = document.getElementById("passwordRegistr").value;
  let RepeatPassword = document.getElementById("RepeatPassword").value;
  if (passwordRegistr == "") {
    errors.passw = "can not empty";
  }

  if (passwordRegistr != RepeatPassword) {
    errors.passw2 = "Passwords do not match";
  }
  // რადიო
  let gender = false;

  formRegistrBox
    .querySelectorAll('[genderWoman = "genderMan"]')
    .forEach((item) => {
      if (item.checked) {
        gender = true;
      }
    });

  if (!gender) {
    errors.gender = "Please select Your Gender";
  }
  // შეცდომები
  for (let item in errors) {
    console.log(item); //key: check, gender,passw,username

    let errorelement = document.getElementById("error-" + item);
    console.log(errorelement);

    if (errorelement) {
      errorelement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    formRegistrBox.submit();
  }

  console.log(errors);
});

// email

let Youremail = document.getElementById("Youremail");

function validationEmail() {
  let Youremail = document.getElementById("Youremail").value;
  let textError = document.getElementById("emailError");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailPattern.test(Youremail)) {
    textError.innerText = "Your Email is valid";
    textError.style.color = "green";
  } else {
    textError.innerText = "Your Email is Invalid";
    textError.style.color = "red";
  }

  if (Youremail == "") {
    textError.innerHTML = "";
  }
}

email.addEventListener("keyup", validationEmail);
