var askSlider = new Swiper(".askSlider", {
    slidesPerView: 1,
    freeMode: true,
    spaceBetween: 24,
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    navigation: {
        nextEl: ".ask-button-next",
        prevEl: ".ask-button-prev",
    },
});