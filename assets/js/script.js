
$(document).ready(function () {

    setTimeout(function () {
        $(".lner-main").addClass("anime-act");
    }, 900);
});



const revealOnScroll = () => {
    const elementsToReveal = document.querySelectorAll('.animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

// 🔄 Attach listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);




let lnerSwiper = new Swiper(".lner-skil-slider", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '767': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            centeredSlides: true,
            spaceBetween: 20,

        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            centeredSlides: true,
            spaceBetween: 20,

        },

        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: true,
            spaceBetween: 20,

        },
    },
});







$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});










window.addEventListener('scroll', function() {
    const screen = document.querySelector('.screen-content');
    const section = document.querySelector('.laptop-section');
    const rect = section.getBoundingClientRect();

    // Процент скролла внутри секции
    let scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    if(scrollPercent < 0) scrollPercent = 0;
    if(scrollPercent > 1) scrollPercent = 1;

    // Параллакс движение картинки
    const maxTranslate = section.offsetHeight * 0.9; // подстраивается под длину картинки
    screen.style.transform = `translateY(-${maxTranslate * scrollPercent}px)`;
});
