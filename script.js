const PASSWORD = "14102022"; 

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("valentine-screen").classList.remove("hidden");
  } else {
    error.textContent = "Wrong password 😢 Try again!";
  }
}

function sayYes() {
  alert("YAYYY 💖💖💖");
}
