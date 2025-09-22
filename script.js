// Fade-in sections
const sections=document.querySelectorAll('section');
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');}})},{threshold:0.2});
sections.forEach(s=>observer.observe(s));

// Hero slideshow
const heroBg=document.getElementById('hero-bg');
const slides=['motogp1.jpg','motogp2.jpg','motogp3.jpg'];
let index=0;
setInterval(()=>{index=(index+1)%slides.length; heroBg.style.backgroundImage=`url('${slides[index]}')`;},4000);

// Lightbox for shop
const lightbox=document.getElementById('lightbox');
const lbImg=document.getElementById('lb-img');
const lbClose=document.getElementById('lb-close');
const lbPrev=document.getElementById('lb-prev');
const lbNext=document.getElementById('lb-next');
let lbImages=[], lbIndex=0;

document.querySelectorAll('.collection-box').forEach(box=>{
  box.addEventListener('click', ()=>{
    lbImages=JSON.parse(box.getAttribute('data-images'));
    lbIndex=0; lbImg.src=lbImages[lbIndex];
    lightbox.classList.add('active');
  });
});

lbClose.addEventListener('click', ()=>{lightbox.classList.remove('active');});
lbPrev.addEventListener('click', ()=>{lbIndex=(lbIndex-1+lbImages.length)%lbImages.length; lbImg.src=lbImages[lbIndex];});
lbNext.addEventListener('click', ()=>{lbIndex=(lbIndex+1)%lbImages.length; lbImg.src=lbImages[lbIndex];});
