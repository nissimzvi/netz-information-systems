
document.querySelectorAll('[data-wa]').forEach(el=>{
  const msg=encodeURIComponent('שלום, הגעתי דרך אתר נץ מערכות מידע. נשמח לדבר על תהליך או פתרון שצריך לקדם.');
  el.href='https://wa.me/972508673333?text='+msg;
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  }));
}
