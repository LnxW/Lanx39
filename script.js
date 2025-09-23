// HERO SLIDES
const heroBg = document.getElementById("hero-bg");
const heroCaption = document.getElementById("hero-caption");
const heroSlides = [
  {img:"image/hero1.jpg", text:"Second or never."},
  {img:"image/hero2.jpg", text:"I see red."},
  {img:"image/hero3.jpg", text:"Rising star."}
];
let heroIndex = 0;

function showHero(){
  heroBg.style.backgroundImage = `url('${heroSlides[heroIndex].img}')`;
  heroCaption.textContent = heroSlides[heroIndex].text;
  heroBg.style.opacity = 0;
  setTimeout(()=> heroBg.style.opacity = 1,100);
  heroIndex = (heroIndex+1)%heroSlides.length;
}
showHero();
setInterval(showHero,4000);

// MENU
const menuTrigger = document.getElementById("menu-trigger");
const menuLightbox = document.getElementById("menu-lightbox");
menuTrigger.addEventListener("click", ()=> menuLightbox.classList.toggle("active"));

// SHOP PREVIEW
const shopPreview = document.getElementById("shop-preview");
function openShopPreview(){shopPreview.classList.add("active");}
function closeShopPreview(){shopPreview.classList.remove("active");}

// script.js
const menuToggle = document.getElementById("menu-toggle");
const navOverlay = document.getElementById("nav-overlay");

menuToggle.addEventListener("click", () => {
  navOverlay.classList.toggle("active"); // buka/tutup overlay
});

// script.js
let currentSlide = 0;
const slides = document.querySelectorAll(".hero img");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

showSlide(currentSlide);

