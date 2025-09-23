// Menu toggle
const menuToggle=document.getElementById('menu-toggle');
const menu=document.getElementById('menu');
menuToggle.addEventListener('click',()=>{menu.classList.toggle('active');});

// Hero slideshow
const heroBg=document.getElementById('hero-bg');
const slides=['hero1.jpg','hero2.jpg','hero3.jpg'];
let index=0;
function showSlide(i){
  heroBg.style.backgroundImage=`url('${slides[i]}')`;
  heroBg.classList.remove('active');
  setTimeout(()=>{heroBg.classList.add('active');},50);
}
showSlide(index);
setInterval(()=>{index=(index+1)%slides.length;showSlide(index);},4000);

// Shop preview
const boxes=document.querySelectorAll('.collection-box');
const overlay=document.getElementById('preview-overlay');
const closeBtn=document.getElementById('close-preview');
const previewSlide=document.getElementById('preview-slideshow');

boxes.forEach(box=>{
  box.addEventListener('click',()=>{
    const images=JSON.parse(box.getAttribute('data-images'));
    previewSlide.innerHTML="";
    images.forEach(src=>{
      const img=document.createElement('img');
      img.src=src;
      previewSlide.appendChild(img);
    });
    overlay.classList.add('active');
  });
});
closeBtn.addEventListener('click',()=>{overlay.classList.remove('active');});
