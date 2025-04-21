const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function appendFunction(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Optional keyboard input
document.addEventListener("keydown", function (e) {
  if ((e.key >= '0' && e.key <= '9') || "+-*/.()%".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
