// HERO SLIDES
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
}, 4000);

showSlide(currentSlide);

// MENU
const menuTrigger = document.getElementById("menu-trigger");
const menuLightbox = document.getElementById("menu-lightbox");

menuTrigger.addEventListener("click", () => {
  menuLightbox.classList.toggle("active");
});

// SHOP PREVIEW
const shopPreview = document.getElementById("shop-preview");
function openShopPreview() {
  shopPreview.classList.add("active");
}
function closeShopPreview() {
  shopPreview.classList.remove("active");
}
