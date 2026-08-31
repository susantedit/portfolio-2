const menu = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav__menu');
const links = document.querySelectorAll('.nav__link');

if (menu && nav) {
  menu.addEventListener('click', function () {
    nav.classList.toggle('show-menu');
    menu.classList.toggle('active');
  });
}

links.forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('show-menu');
    menu.classList.remove('active');
  });
});

const sections = document.querySelectorAll('section[id]');

function highlightMenu() {
  const scrollPosition = window.scrollY + 150;

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const link = document.querySelector(
      '.nav__link[href*="' + sectionId + '"]'
    );

    if (
      link &&
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      links.forEach(function (item) {
        item.classList.remove('active-link');
      });

      link.classList.add('active-link');
    }
  });
}

window.addEventListener('scroll', highlightMenu);

const header = document.querySelector('.header');

function changeHeader() {
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  }
}

window.addEventListener('scroll', changeHeader);

const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    alert('Thanks for your message!');

    contactForm.reset();
  });
}