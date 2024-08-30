
$('.header__menu-btn, .header__mobile-menu-btn').click(function () {
    $('.header__menu').fadeToggle(100, function () {
        if ($('.header__menu').is(':visible')) {
          $('.header__menu-btn, .header__mobile-menu-btn').addClass('active');
          $('.header__mobile-menu-btn > .btn__icon').text('close')
          $('.header__menu-btn > .btn__icon').css({transform:'rotateZ(180deg)'})
        } else {
          $('.header__menu-btn, .header__mobile-menu-btn').removeClass('active');
          $('.header__mobile-menu-btn > .btn__icon').text('menu');
          $('.header__menu-btn > .btn__icon').css({ transform: 'rotateZ(0deg)' });
        }
    });
});

//NAV TAB FOR DESKTOP
$('.nav__link').each(function () {
  $(this).click(function () {
    $('.nav__link').removeClass('active');
    $(this).addClass('active');
    const btn_text = $(this).text();
    $('.nav__dynamic-text').text(btn_text);
  })
})

//NAV TAB FOR MOBILE
$('.nav__dynamic-btn').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.nav__list').addClass('active');
  } else {
    $('.nav__list').removeClass('active');
  }
})

$('.nav__link').each(function () {
  $(this).click(function () {
    $('.nav__list').removeClass('active');
    $('.nav__dynamic-btn').removeClass('active');
  })
})

$('.nav__filter-btn').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.nav__filter-content').fadeIn(200)
  } else {
    $('.nav__filter-content').fadeOut(200);
  }
})


//TOGGLE HEADER FORM INPUT FOR MOBILE
$('.header__form-icon').click(function () {
  $('.header__form-icon').toggleClass('active');
  $('.header__form').toggleClass('active');
  $('.header__form-input').toggleClass('active');
})

//MODAL ADD
$('.header__add-btn').click(function () {
  $('#modal-add').fadeIn(200)
})

$('.modal__btn-close').click(function (e) {
  $('#modal-add').fadeOut(200);
});

//MODAL REGISTER
$('.header__register-btn').click(function () {
  $('#modal-register').fadeIn(200)
})

$('.modal__btn-close').click(function () {
    $('#modal-register').fadeOut(200);
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,
    slidesPerView: 7,
    spaceBetween: 8,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // 640: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      // },
      // 768: {
      //     slidesPerView: 4,
      //     spaceBetween: 40,
      // },
      1024: {
          slidesPerView: 5,
          spaceBetween: 8,
      },
    },
});




