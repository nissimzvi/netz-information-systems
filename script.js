const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const message = data.get('message') || '';
    const text = `שלום ניסים, שמי ${name}. טלפון: ${phone}. ${message}`;
    const whatsappUrl = `https://wa.me/972508673333?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  });
}
