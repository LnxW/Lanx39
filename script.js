// MENU
const menuToggle = document.getElementById("menu-toggle");
const navOverlay = document.getElementById("nav-overlay");

menuToggle.addEventListener("click", () => {
  navOverlay.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll("#nav-overlay a").forEach(link => {
  link.addEventListener("click", () => {
    navOverlay.classList.remove("active");
  });
});
