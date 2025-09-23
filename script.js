// Hero slideshow
const slides = ["image/hero1.jpg","image/hero2.jpg","image/hero3.jpg"];
let currentSlide = 0;
const heroImage = document.getElementById("heroImage");

function showSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  heroImage.style.opacity = 0;
  setTimeout(() => {
    heroImage.src = slides[currentSlide];
    heroImage.style.opacity = 1;
  }, 500);
}

setInterval(showSlide, 4000);

// Toggle menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
