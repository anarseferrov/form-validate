const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");

//errors
const name_error = document.getElementById("name_error");
const last_error = document.getElementById("last_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("pass_error");
const error_icon = document.getElementById("error-icon");

document.getElementById("submit").addEventListener("submit", (e) => {
  console.log("Clicked");
  if (first_name.value === "") {
    document.getElementById("icon-1").style.display = "block";
    name_error.style.display = "block";
    setTimeout(() => {
      name_error.style.display = "none";
      document.getElementById("icon-1").style.display = "none";
    }, 3000);
  }
  if (last_name.value === "") {
    document.getElementById("icon-2").style.display = "block";
    last_error.style.display = "block";
    setTimeout(() => {
      last_error.style.display = "none";
      document.getElementById("icon-2").style.display = "none";
    }, 3000);
  }
  if (email.value === "") {
    email_error.style.display = "block";
    document.getElementById("icon-3").style.display = "block";
    setTimeout(() => {
      email_error.style.display = "none";
      document.getElementById("icon-3").style.display = "none";
    }, 3000);
  }
  if (password.value === "") {
    password_error.style.display = "block";
    document.getElementById("icon-4").style.display = "block";
    setTimeout(() => {
      password_error.style.display = "none";
      document.getElementById("icon-4").style.display = "none";
    }, 3000);
  }
  e.preventDefault();
});
