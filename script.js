// HERO SLIDES
let currentSlide = 0;
const slides = document.querySelectorAll(".hero img");
const heroCaption = document.getElementById("hero-caption");
const heroText = [
  "Second or never.",
  "I see red.",
  "Rising star."
];

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
  heroCaption.textContent = heroText[n];
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

showSlide(currentSlide);

// MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const navOverlay = document.getElementById("nav-overlay");

menuToggle.addEventListener("click", () => {
  navOverlay.classList.toggle("active");
});

// close bila click link
document.querySelectorAll("#nav-overlay a").forEach(link => {
  link.addEventListener("click", () => {
    navOverlay.classList.remove("active");
  });
});

// SHOP PREVIEW
const shopPreview = document.getElementById("shop-preview");
function openShopPreview(){shopPreview.classList.add("active");}
function closeShopPreview(){shopPreview.classList.remove("active");}
