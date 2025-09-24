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
const slides=[
  {img:"image/hero1.jpg",text:"Second or never."},
  {img:"image/hero2a.jpg",text:"I see <span style='color:red'>red</span>."},
  {img:"image/hero3.jpg",text:"Rising star."}
];
let index=0;
function showSlide(){
  heroBg.style.backgroundImage=`url(${slides[index].img})`;
  heroCaption.innerHTML=slides[index].text;
  heroBg.classList.remove("show");
  void heroBg.offsetWidth;
  heroBg.classList.add("show");
  index=(index+1)%slides.length;
}
showSlide();
setInterval(showSlide,4000);

// SHOP PREVIEW
const shopProducts=[
  ["image/shop1_a.jpg","image/shop1_b.jpg","image/shop1_c.jpg"],
  ["image/shop2_a.jpg","image/shop2_b.jpg"],
  ["image/shop3_a.jpg","image/shop3_b.jpg","image/shop3_c.jpg"]
];
function openShopPreview(i){
  const container=document.getElementById("shop-slides");
  container.innerHTML="";
  shopProducts[i].forEach(src=>{
    const img=document.createElement("img");
    img.src=src;
    container.appendChild(img);
  });
  document.getElementById("shop-preview").classList.add("active");
}
function closeShopPreview(){
  document.getElementById("shop-preview").classList.remove("active");
}
