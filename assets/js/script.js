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

// Offcanvas menu script
document.addEventListener('DOMContentLoaded', () => {
    const offcanvasBtn = document.querySelector('.header__offcanvasBtn');
    const offcanvasMenu = document.querySelector('.offcanvas-menu');

    if (offcanvasBtn && offcanvasMenu) {
        offcanvasBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            offcanvasMenu.classList.toggle('active');
        });
    }
});