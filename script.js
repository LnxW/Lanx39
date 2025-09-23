// Hero slideshow
const heroBg=document.getElementById('hero-bg');
const heroTitle=document.getElementById('hero-title');
const heroSubtitle=document.getElementById('hero-subtitle');

const slides=[
  {img:'image/hero1.jpg',title:'LANX',subtitle:'Focus on Style'},
  {img:'image/hero2.jpg',title:'I SEE RED',subtitle:'Bold Statement'},
  {img:'image/hero3.jpg',title:'RISING STAR',subtitle:'Next Level'}
];

let current=0;
function changeSlide(){
  heroBg.style.opacity=0; heroTitle.style.opacity=0; heroSubtitle.style.opacity=0;
  setTimeout(()=>{
    heroBg.style.backgroundImage=`url('${slides[current].img}')`;
    heroTitle.textContent=slides[current].title;
    heroSubtitle.textContent=slides[current].subtitle;
    heroBg.style.opacity=1; heroTitle.style.opacity=1; heroSubtitle.style.opacity=1;
    current=(current+1)%slides.length;
  },700);
}
changeSlide();
setInterval(changeSlide,4000);

// Shop Lightbox
const lightbox=document.getElementById('lightbox');
const lbImg=document.getElementById('lb-img');
const lbClose=document.getElementById('lb-close');
const lbExit=document.getElementById('lb-exit');
const lbPrev=document.getElementById('lb-prev');
const lbNext=document.getElementById('lb-next');
let lbCurrentImages=[]; let lbIndex=0;

function updateLightbox(){ lbImg.src=lbCurrentImages[lbIndex]; }
document.querySelectorAll('.collection-box').forEach(box=>{
  box.addEventListener('click',()=>{
    lbCurrentImages=JSON.parse(box.getAttribute('data-images'));
    lbIndex=0; updateLightbox(); lightbox.classList.add('active');
  });
});
lbClose.addEventListener('click',()=>{ lightbox.classList.remove('active'); lbImg.src=''; });
lbExit.addEventListener('click',()=>{ lightbox.classList.remove('active'); lbImg.src=''; });
lbPrev.addEventListener
