// HERO SLIDE
const heroBg = document.getElementById("hero-bg");
const heroCaption = document.getElementById("hero-caption");
const heroSlides = [
  {img:"image/hero1.jpg", text:"Second or never."},
  {img:"image/hero2.jpg", text:"I see red."},
  {img:"image/hero3.jpg", text:"Rising star."}
];
let heroIndex = 0;

function showHero(){
  heroBg.style.opacity = 0;
  setTimeout(()=>{
    heroBg.style.backgroundImage = `url('${heroSlides[heroIndex].img}')`;
    heroCaption.textContent = heroSlides[heroIndex].text;
    heroBg.style.opacity = 1;
  },300);
  heroIndex = (heroIndex+1)%heroSlides.length;
}
showHero();
setInterval(showHero,4000);

// MENU
const menuToggle = document.getElementById("menu-toggle");
const navOverlay = document.getElementById("nav-overlay");
menuToggle.addEventListener("click",()=> navOverlay.classList.toggle("active"));

// SHOP PREVIEW
const shopPreview = document.getElementById("shop-preview");
function openShopPreview(index){shopPreview.classList.add("active");}
function closeShopPreview(){shopPreview.classList.remove("active");}
