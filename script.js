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
  { img: "image/hero1.jpg", text: "Second or never.", color: "#fff" },
  { img: "image/hero2.jpg", text: "I see red.", color: "#ff0000" },
  { img: "image/hero3.jpg", text: "Rising star.", color: "#fff" }
];

let heroIndex = 0;

function showHero() {
  heroBg.style.opacity = 0; // fade out
  setTimeout(() => {
    heroBg.style.backgroundImage = url('${heroSlides[heroIndex].img}');
    heroCaption.textContent = heroSlides[heroIndex].text;
    heroCaption.style.color = heroSlides[heroIndex].color;
    heroBg.style.opacity = 1; // fade in
    heroIndex = (heroIndex + 1) % heroSlides.length;
  }, 500);
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

// Contact Modal
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close");

contactBtn.addEventListener("click", () => {
  contactModal.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

// Dummy form action
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (dummy mode)");
  contactModal.style.display = "none";
});
