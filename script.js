const PASSWORD = "YYYYMMDD"; // <-- CHANGE THIS
let input = "";

function pressDigit(digit) {
  console.log("Pressed:", digit); // debug (safe to keep)

  if (input.length >= PASSWORD.length) return;

  input += digit;
  updateDots();

  if (input.length === PASSWORD.length) {
    setTimeout(checkPassword, 200);
  }
}

function deleteDigit() {
  input = input.slice(0, -1);
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    if (index < input.length) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
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
