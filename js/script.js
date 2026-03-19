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
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
// Skill animation on scroll
const skillSection = document.querySelector("#skills");

window.addEventListener("scroll", () => {
  const sectionTop = skillSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint) {
    document.querySelectorAll(".progress-bar").forEach(bar => {
      bar.style.width = bar.classList.contains("html")
        ? "90%"
        : bar.classList.contains("css")
        ? "80%"
        : "65%";
    });
  }
});