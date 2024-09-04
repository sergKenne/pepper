var windowWidth = $(window).width();
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 56) {
        $('.header').css({
            opacity: 0,
            'z-index': -9,
        });
    } else {
        $('.header').css({
            opacity: 1,
            'z-index': 9,
        });
    }
});


$('.header__menu-btn, .header__mobile-menu-btn').click(function () {
    $('.header__menu').fadeToggle(100, function () {
        if ($('.header__menu').is(':visible')) {
            $('.header__menu-btn, .header__mobile-menu-btn').addClass('active');
            $('.header__mobile-menu-btn > .btn__icon').text('close');
            $('.header__menu-btn > .btn__icon').css({ transform: 'rotateZ(180deg)' });
        } else {
            $('.header__menu-btn, .header__mobile-menu-btn').removeClass('active');
            $('.header__mobile-menu-btn > .btn__icon').text('menu');
            $('.header__menu-btn > .btn__icon').css({ transform: 'rotateZ(0deg)' });
        }
    });
});

//TOGGLE SUBLIST FOOTER
$('.footer__list-title').click(function () {
  const icon = $(this).find('.footer__list-title-icon');
  const closestList = $(this).closest('.footer__list');
  closestList.find('.footer__sublist').slideToggle(200, function () {
    if (closestList.find('.footer__sublist').is(':visible')) {
        icon.css({ transform: 'rotateZ(180deg)' });
    } else {
        icon.css({ transform: 'rotateZ(0deg)' });
    }
  });
})

//NAV TAB FOR DESKTOP
$('.nav__link').each(function () {
    $(this).click(function () {
        $('.nav__link').removeClass('active');
        $(this).addClass('active');
        const btn_text = $(this).text();
        $('.nav__dynamic-text').text(btn_text);
    });
});

//NAV TAB FOR MOBILE
$('.nav__dynamic-btn').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('.nav__list').addClass('active');
    } else {
        $('.nav__list').removeClass('active');
    }
});

$('.nav__link').each(function () {
    $(this).click(function () {
        $('.nav__list').removeClass('active');
        $('.nav__dynamic-btn').removeClass('active');
    });
});

$('.nav__filter-btn').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('.nav__filter-content').fadeIn(200);
    } else {
        $('.nav__filter-content').fadeOut(200);
    }
});

//TOGGLE HEADER FORM INPUT FOR MOBILE
$('.header__form-icon').click(function () {
    $('.header__form-icon').toggleClass('active');
    $('.header__form').toggleClass('active');
    $('.header__form-input').toggleClass('active');
});

//MODAL ADD
$('.header__add-btn').click(function () {
    $('#modal-add').fadeIn(200);
});

$('.modal__btn-close').click(function (e) {
    $('#modal-add').fadeOut(200);
});

//MODAL REGISTER
$('.header__register-btn').click(function () {
    $('#modal-register').fadeIn(200);
});

$('.modal__btn-close').click(function () {
    $('#modal-register').fadeOut(200);
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 8,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8,
        },

        425: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        // 768: {
        //     slidesPerView: 4,
        //     spaceBetween: 8,
        // },
        1024: {
            slidesPerView: 5,
            spaceBetween: 8,
        },
        1300: {
            slidesPerView: 6,
            spaceBetween: 8,
        },
    },
});


const chatSwiper = new Swiper('.chatSwiper', {
    slidesPerView: 5,
    spaceBetween: 12,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        425: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        570: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 12,
        },
    },
});
