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



gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 767px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".pin-section",
            start: "top top",
            end: "+=2500",
            pin: true,
            scrub: 1,
        }
    });

    tl.to(".center-item", {
        width: "100vw",
        height: "100vh",
        duration: 1.5,
        ease: "none"
    }, "start")
        .to(".main-img-wrap", {
            borderRadius: 0,
            duration: 1.5
        }, "start")
        .to(".content-overlay", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        }, ">-0.8")
        .to({}, { duration: 0.2 });

    return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
    };
});



// Service hero Animations
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
tl.to(".left", {
    x: 0,
    opacity: 1,
    duration: 1.2
})
    .to(".right", {
        x: 0,
        opacity: 1,
        duration: 1.2
    }, "<")

    .to(".main-circle", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.2)"
    }, "-=0.5").to(".ring-container", {
        opacity: 1,
        duration: 0.5,
        ease: "linear"
    }, "-=0.3");


// Testimonial Section Animation
gsap.registerPlugin(ScrollTrigger);
const testimonialtl = gsap.timeline({
    scrollTrigger: {
        trigger: ".testimonial__preloader",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

testimonialtl.from(".testimonial-preloader-content h2", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
})
    .from(".testimonial-preloader-content p", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")
    .to(".borderAnimation", {
        "--border-width": "100%",
        duration: 0.8,
        ease: "power1.inOut"
    })
    .to(".testimonial__preloader", {
        opacity: 0,
        autoAlpha: 0,
        duration: 0.5,
        delay: 1
    });