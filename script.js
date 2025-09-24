// ===== MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');

menuToggle.addEventListener('click', () => {
  menuOverlay.classList.toggle('active');
  // set aria
  menuOverlay.setAttribute('aria-hidden', !menuOverlay.classList.contains('active'));
});

// close menu when a link clicked
document.querySelectorAll('#menu-overlay a').forEach(a => {
  a.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    menuOverlay.setAttribute('aria-hidden', 'true');
  });
});

// ===== HERO SLIDESHOW (fade) =====
const heroBg = document.getElementById('hero-bg');
const heroCaption = document.getElementById('hero-caption');

const heroSlides = [
  { img: 'image/hero1.jpg', text: 'Second Or Never.' },
  { img: 'image/hero2a.jpg', text: 'I see <span style="color:#ff3b3b">RED</span>.' },
  { img: 'image/hero3.jpg', text: 'Rising Star.' }
];

let heroIndex = 0;
function showHero() {
  const slide = heroSlides[heroIndex];
  // set background (use quotes to avoid spaces issues)
  heroBg.style.backgroundImage = url('${slide.img}');
  // trigger fade
  heroBg.classList.remove('active');
  void heroBg.offsetWidth; // force reflow
  heroBg.classList.add('active');
  // set caption
  heroCaption.innerHTML = slide.text;
  heroIndex = (heroIndex + 1) % heroSlides.length;
}

// run once after page load, then interval
window.addEventListener('load', () => {
  showHero();
  setInterval(showHero, 4000);
});

// ===== SHOP PREVIEW POPUP =====
const shopProducts = [
  // if only single images, list one per product
  ['image/shop1.jpg'],
  ['image/shop2.jpg'],
  ['image/shop3.jpg']
];

function openShopPreview(index){
  const container = document.getElementById('shop-slides');
  container.innerHTML = '';
  shopProducts[index].forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Product image';
    container.appendChild(img);
  });
  document.getElementById('shop-preview').classList.add('active');
  document.getElementById('shop-preview').setAttribute('aria-hidden','false');
}

function closeShopPreview(){
  document.getElementById('shop-preview').classList.remove('active');
  document.getElementById('shop-preview').setAttribute('aria-hidden','true');
}

// close button listener
document.getElementById('shop-close')?.addEventListener('click', closeShopPreview);
// fallback: close when clicking close element (we also provided button .close in html)
document.querySelectorAll('.close').forEach(btn => btn.addEventListener('click', closeShopPreview));
