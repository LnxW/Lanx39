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
const shopPreviewImg = document.getElementById("shop-preview-img");
const shopPreviewText = document.getElementById("shop-preview-text");
const shopItems = [
  {img:"image/shop1.jpg",text:"Red Motion Tee"},
  {img:"image/shop2.jpg",text:"Black Velocity Hoodie"},
  {img:"image/shop3.jpg",text:"Grey Speed Cap"}
];
function openShopPreview(index){
  shopPreviewImg.src = shopItems[index].img;
  shopPreviewText.textContent = shopItems[index].text;
  shopPreview.classList.add("active");
}
function closeShopPreview(){ shopPreview.classList.remove("active"); }

function openShopPreview(){
  shopPreview.classList.add("active");

  // bagi effect fade + scale
  const imgs = shopPreview.querySelectorAll("img");
  imgs.forEach((img, i) => {
    setTimeout(() => {
      img.classList.add("active");
    }, i * 100); // delay sikit kalau banyak gambar
  });
}

function closeShopPreview(){
  shopPreview.classList.remove("active");

  // reset effect bila close
  const imgs = shopPreview.querySelectorAll("img");
  imgs.forEach(img => img.classList.remove("active"));
}

