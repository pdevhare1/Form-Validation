// Enter valid username
function validate() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;

  checkUsername(username);
  checkEmail(email);
  checkPassword(password);
  checkPasswordMatch(password, cpassword);
}

function checkUsername(username) {
  if (username.length > 7 && username.length < 15) {
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.replace("error", "success");
    document.getElementById("username_error").innerHTML = "";
  } else {
    document.getElementById("username").classList.add("error");
    document.getElementById("username_error").innerHTML =
      "Username must be between 8 and 14 characters";
  }
}

function checkEmail(email) {
  if (email.includes("@") && email.includes(".") && email.includes("@gmail")) {
    document.getElementById("email").classList.add("success");
    document.getElementById("email").classList.replace("error", "success");
    document.getElementById("email_error").innerHTML = "";
  } else {
    document.getElementById("email").classList.add("error");
    document.getElementById("email_error").innerHTML = "Invalid email";
  }
}

function checkPassword(password) {
  if (
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    )
  ) {
    document.getElementById("password").classList.add("success");
    document.getElementById("password").classList.replace("error", "success");
    document.getElementById("password_error").innerHTML = "";
  } else {
    document.getElementById("password").classList.add("error");
    document.getElementById("password_error").innerHTML =
      "Password must be at least 8 characters, contain at least one letter, one number and one special character";
  }
}

function checkPasswordMatch(password, cpassword) {
  if (password === cpassword) {
    document.getElementById("cpassword").classList.add("success");
    document.getElementById("cpassword").classList.replace("error", "success");
    document.getElementById("cpassword_error").innerHTML = "";
  } else {
    document.getElementById("cpassword").classList.add("error");
    document.getElementById("cpassword_error").innerHTML =
      "Passwords do not match";
  }
}
