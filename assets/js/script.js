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
const brandsSliderLeft = new Swiper('.brands__dir-left', {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 4000,
    allowTouchMove: false,
    breakpoints: {
        480: {
            spaceBetween: 50
        },
        768: {
            spaceBetween: 70
        },
        1024: {
            spaceBetween: 70
        },
        1400: {
            spaceBetween: 120
        }
    }
});
const brandsSliderRight = new Swiper('.brands__dir-right', {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 4000,
    allowTouchMove: false,
    breakpoints: {
        480: {
            spaceBetween: 50
        },
        768: {
            spaceBetween: 70
        },
        1024: {
            spaceBetween: 70
        },
        1400: {
            spaceBetween: 120
        }
    }
});

const testimonialSwiper = new Swiper('.testimonial__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
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
