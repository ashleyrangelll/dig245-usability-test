const swiper = new Swiper('.card-wrapper', {
  loop: true,
  speed: 700,
  spaceBetween: 70,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('[data-slide]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    swiper.slideToLoop(Number(link.dataset.slide));
    document.querySelector('.card-wrapper').scrollIntoView({ behavior: 'smooth' });
  });
});