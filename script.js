// MENU TOGGLE
const menuToggle=document.getElementById("menu-toggle");
const menuOverlay=document.getElementById("menu-overlay");
menuToggle.addEventListener("click",()=>menuOverlay.classList.toggle("active"));
document.querySelectorAll(".menu-overlay a").forEach(a=>{
  a.addEventListener("click",()=>menuOverlay.classList.remove("active"));
});

// HERO SLIDESHOW
const heroBg=document.getElementById("hero-bg");
const heroCaption=document.getElementById("hero-caption");
const heroSlides = [
  {img:"image/hero1.jpg", text:"Second Or Never."},
  {img:"image/hero2a.jpg", text:"I See <span class='RED'>red</span>."},
  {img:"image/hero3.jpg", text:"Rising Star."}
];

let heroIndex = 0;

function showHero(){
  heroBg.style.backgroundImage = url(${heroSlides[heroIndex].img});

  // fade transition
  heroBg.classList.remove("active");
  void heroBg.offsetWidth; // reset transition
  heroBg.classList.add("active");

  heroCaption.innerHTML = heroSlides[heroIndex].text;

  heroIndex = (heroIndex + 1) % heroSlides.length;
}
showHero();
setInterval(showHero, 4000);

// SHOP PREVIEW
cconst shopProducts = [
  ["image/shop1.jpg"], 
  ["image/shop2.jpg"], 
  ["image/shop3.jpg"]
];

function openShopPreview(index) {
  const slidesContainer = document.getElementById("shop-slides");
  slidesContainer.innerHTML = "";
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
