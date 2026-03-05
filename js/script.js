window.onload = function() {
    document.getElementById("status").innerText = "Welcome back, Builder.";
}

function updateMessage() {
    document.getElementById("status").innerText = "Day 3 Completed 🚀";
}
const toggleButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});