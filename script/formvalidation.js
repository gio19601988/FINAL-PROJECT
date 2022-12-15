// რეგისტრაციის ფორმა
"use strict";
let formRegistration = document.getElementById("registration");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};
  let form = event.target;

  //username
  let username = document.getElementById("usernamefield").value;


  if (username == "" && username.length < 5) {
    errors.username =
      "Username field can not be empty and must be more then 5 characters";
  }

  usernamefield.addEventListener("keyup", function () {
    let userValue = document.getElementById("usernamefield").value;
    let errorsuser = document.getElementById("text");
    let userRegex =
    "^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$";
    if (userValue.match(userRegex)) {
      errorsuser.innerText = "Your users is Valid";
      errorsuser.style.color = "green";
    } else {
      errorsuser.innerText = "Your users is invalid";
      errorsuser.style.color = "red";
    }
  
    if (userValue == "") {
      errorsuser.innerText = " ";
    }
  });
  

  //password
  let password = document.getElementById("passwordfield").value;
  let password2 = document.getElementById("passwordfield2").value;

  if (password == "") {
    errors.pasww = "Password field can not be empty";
  }
  if (password != password2) {
    errors.pasww2 = "Passwords do not match";
  }

  //chechkox
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You must agree terms and conditions";
  }

  //radio
  let gender = false;
  form.querySelectorAll('[name="gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select your gender";
  }

  console.log(errors);

  form.querySelectorAll(".error-text").forEach((element) => {
    element.innerText = " ";
  });

  for (let item in errors) {


    let spanContent = document.getElementById("error_" + item);

    if (spanContent) {
      spanContent.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});



let showPassword = document.getElementById("passwordfield");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (showPassword.type == "password") {
    showPassword.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
    showPassword.setAttribute("type", "password");
  }
});

// email validation
let emailField = document.getElementById("email");

emailField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("email").value;
  let errorEmail = document.getElementById("text");
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(emailRegex)) {
    errorEmail.innerText = "Your Email is Valid";
    errorEmail.style.color = "green";
  } else {
    errorEmail.innerText = "Your Email is inalid";
    errorEmail.style.color = "red";
  }

  if (emailValue == "") {
    errorEmail.innerText = " ";
  }
});

emailField.addEventListener("focus", function (event) {
  event.target.style.border = "2px solid green";
  event.target.style.outline = "none";
});
