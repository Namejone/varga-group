// Swiper js activation
const heroSwiper = new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 800,
});