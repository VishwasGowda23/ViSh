// Dashboard JS: Animated KPIs & Theme Toggle

console.log("📊 Data Analyst Dashboard Loaded");

// ----------- Animated KPIs -----------
document.addEventListener("DOMContentLoaded", () => {
  const kpiCards = document.querySelectorAll(".kpi-card h2");

  kpiCards.forEach((card) => {
    const target = parseInt(card.dataset.target, 10); // ensures numeric
    const hasPlus = card.innerText.includes("+");   // check if '+' should be added
    card.innerText = "0" + (hasPlus ? "+" : "");

    const increment = Math.ceil(target / 100); // smooth increment

    const updateNumber = () => {
      let current = parseInt(card.innerText.replace(/\D/g, ""), 10);

      if (current < target) {
        current += increment;
        if (current > target) current = target;

        card.innerText = current + (hasPlus ? "+" : "");
        setTimeout(updateNumber, 20);
      } else {
        card.innerText = target + (hasPlus ? "+" : "");
      }
    };

    updateNumber();
  });
});

// ----------- Theme Toggle -----------
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeToggle.textContent = document.body.classList.contains("light-theme") ? "🌞" : "🌙";
  });
}
