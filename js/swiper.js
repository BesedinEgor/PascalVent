const portfolioSwiper = new Swiper(".portfolio-swiper", {
  loop: false,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: ".portfolio-next",
    prevEl: ".portfolio-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const customersSwiper = new Swiper(".customers-swiper", {
  loop: false,
  slidesPerView: 1.3,
  // Navigation arrows
  navigation: {
    nextEl: ".customers-next",
    prevEl: ".customers-prev",
  },
});
