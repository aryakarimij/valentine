document.addEventListener("DOMContentLoaded", () => {
  const PASSWORD = 14102022;
  let input = "";

  const dots = document.querySelectorAll(".dot");
  const errorText = document.getElementById("error");
  const passwordScreen = document.getElementById("password-screen");
  const valentineScreen = document.getElementById("valentine-screen");
  const noBtn = document.getElementById("noBtn");

  // ---------------- PASSWORD LOGIC ----------------

  window.pressDigit = function (digit) {
    if (input.length >= PASSWORD.length) return;

    input += digit;
    updateDots();

    if (input.length === PASSWORD.length) {
      setTimeout(checkPassword, 250);
    }
  };

  window.deleteDigit = function () {
    input = input.slice(0, -1);
    updateDots();
  };

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("filled", index < input.length);
    });
  }

  function checkPassword() {
    if (input === PASSWORD) {
      passwordScreen.classList.add("hidden");
      valentineScreen.classList.remove("hidden");
      errorText.textContent = "";
    } else {
      errorText.textContent = "Wrong password 😢 Try again";
      input = "";
      updateDots();
    }
  }

  // ---------------- NO BUTTON CHAOS ----------------

  const messages = [
    "Nice try 😏",
    "Dubious!! PICK YES! 😠",
    "Absolutely not 😤",
    "Wrong answer 💀",
    "You know what to do 😘",
    "Be serious rn 😒"
  ];

  let moveCount = 0;

  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);

  function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.textContent = messages[moveCount % messages.length];
    moveCount++;
  }

  // ---------------- YES BUTTON ----------------

  window.sayYes = function () {
    alert("YAYYYYY 💖💖💖");
  };
});
