// 🔐 PASSWORD (your anniversary)
const PASSWORD = "14102022";
let input = "";

// Make functions GLOBAL so buttons always work
function pressDigit(digit) {
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
    dot.classList.toggle("filled", index < input.length);
  });
}

function checkPassword() {
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("valentine-screen").classList.remove("hidden");
    error.textContent = "";
  } else {
    error.textContent = "Wrong password 😢 Try again";
    input = "";
    updateDots();
  }
}

// 💖 YES button
function sayYes() {
  alert("YAYYYYY 💖💖💖");
}

// 😈 NO button chaos
document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  if (!noBtn) return;

  const messages = [
    "Nice try 😏",
    "Dubious!! PICK YES! 😠",
    "Wrong answer 💀",
    "Be CEREAL rn 😒",
    "You know what to do 😘"
  ];

  let count = 0;

  function moveNo() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.textContent = messages[count % messages.length];
    count++;
  }

  noBtn.addEventListener("mouseenter", moveNo);
  noBtn.addEventListener("click", moveNo);
});
