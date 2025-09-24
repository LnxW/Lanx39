// MENU
const menuToggle = document.getElementById("menu-toggle");
const menuOverlay = document.getElementById("menu-overlay");

menuToggle.addEventListener("click", () => {
  menuOverlay.classList.toggle("active");
});

// Close menu bila klik link
document.querySelectorAll(".menu-overlay a").forEach(link => {
  link.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
  });
});

// HERO SLIDES
const heroBg = document.getElementById("hero-bg");
const heroCaption = document.getElementById("hero-caption");

const heroSlides = [
  {img:"image/hero1.jpg", text:"Second or never."},
  {img:"image/hero2a.jpg", text:'I see <span class="red">red</span>.'},
  {img:"image/hero3.jpg", text:"Rising star."}
];

let heroIndex = 0;

function showHero(){
  heroBg.style.opacity = 0; // fade out
  setTimeout(() => {
    heroBg.style.backgroundImage = `url('${heroSlides[heroIndex].img}')`;
    heroCaption.innerHTML = heroSlides[heroIndex].text;
    heroBg.style.opacity = 1; // fade in
    heroCaption.style.opacity = 0;
    setTimeout(() => heroCaption.style.opacity = 1, 300);
  }, 500);

  heroIndex = (heroIndex + 1) % heroSlides.length;
}

showHero();
setInterval(showHero, 4000);

// SHOP PREVIEW
const shopPreview = document.getElementById("shop-preview");
const shopSlides = document.getElementById("shop-slides");

// List product images
const shopProducts = [
  ["image/shop1_a.jpg", "image/shop1_b.jpg", "image/shop1_c.jpg"], // item 0
  ["image/shop2_a.jpg", "image/shop2_b.jpg"],                      // item 1
  ["image/shop3_a.jpg", "image/shop3_b.jpg", "image/shop3_c.jpg"]  // item 2
];

function openShopPreview(index) {
  const slidesContainer = document.getElementById("shop-slides");
  slidesContainer.innerHTML = ""; // reset
  shopProducts[index].forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    slidesContainer.appendChild(image);
  });
  document.getElementById("shop-preview").classList.add("active");
}

function closeShopPreview() {
  document.getElementById("shop-preview").classList.remove("active");
}

