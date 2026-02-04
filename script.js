const PASSWORD = "14102022"; // CHANGE THIS
let input = "";

function pressDigit(digit) {
  if (input.length >= PASSWORD.length) return;

  input += digit;
  updateDots();

  if (input.length === PASSWORD.length) {
    checkPassword();
  }
}

function deleteDigit() {
  input = input.slice(0, -1);
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < input.length);
  });
}

function checkPassword() {
  if (input === PASSWORD) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("valentine-screen").classList.remove("hidden");
  } else {
    document.getElementById("error").textContent = "Wrong password 😢 Try again";
    input = "";
    updateDots();
  }
}

function sayYes() {
  alert("YAYYYYY 💖💖💖");
}
