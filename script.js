// HERO SLIDES
let currentSlide = 0;
const slides = document.querySelectorAll(".hero img");
const heroCaption = document.getElementById("hero-caption");
const heroTexts = ["Second or never.", "I see red.", "Rising star."];

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
  heroCaption.textContent = heroTexts[n];
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

showSlide(currentSlide);

// MENU
const menuToggle = document.getElementById("menu-toggle");
const navOverlay = document.getElementById("nav-overlay");

menuToggle.addEventListener("click", () => {
  navOverlay.classList.toggle("active");
});


// SHOP LINK (buat visible bila klik menu)
const shopLink = document.getElementById("shop-link");
const shopSection = document.getElementById("shop");

shopLink.addEventListener("click", (e) => {
  e.preventDefault();
  shopSection.classList.remove("hidden"); // buka shop
  navOverlay.classList.remove("active");  // tutup menu
  document.querySelector("#shop").scrollIntoView({behavior:"smooth"});
});

// SHOP PREVIEW
const shopPreview = document.getElementById("shop-preview");
function openShopPreview(){shopPreview.classList.add("active");}
function closeShopPreview(){shopPreview.classList.remove("active");}
