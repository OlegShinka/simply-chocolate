const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // slideToClickedSlide: true,

  grabCursor: true,

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".pic-slide",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },

  //   кількість відображених слайдів  можливо показувати не цілу кільк. слайдів
  //   slidesPerView: 4,

  // відстань між слайдами
  spaceBetween: 18,

  // нескінченна прокрутка слайдера
  loop: true,

  //   автовисота слайду
  // autoHeight: true,

  // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
