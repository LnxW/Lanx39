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
const slides = document.querySelectorAll(".hero-slide");
let current = 0;
function showSlide(){
  slides.forEach((s,i)=> s.classList.remove("active"));
  slides[current].classList.add("active");
  current = (current+1)%slides.length;
}
showSlide();
setInterval(showSlide,4000);

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
