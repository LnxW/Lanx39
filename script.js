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
  heroBg.style.opacity = 0;
  setTimeout(() => {
    heroBg.style.backgroundImage = `url('${heroSlides[heroIndex].img}')`;
    heroCaption.textContent = heroSlides[heroIndex].text;
    heroBg.style.opacity = 1;
  }, 400);
  heroIndex = (heroIndex+1)%heroSlides.length;
}
showHero();
setInterval(showHero,4000);

// MENU
const menuTrigger = document.getElementById("menu-trigger");
const menuLightbox = document.getElementById("menu-lightbox");
menuTrigger.addEventListener("click", ()=> {
  menuLightbox.classList.toggle("active");
});

// SCROLL REVEAL
const faders = document.querySelectorAll(".fade-section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < triggerBottom) {
      sec.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
