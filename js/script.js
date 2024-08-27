
$('.header__menu-btn, .header__mobile-menu-btn').click(function () {
    $('.header__menu').toggle(200, function () {
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


$('.header__form-icon').click(function () {
  $('.header__form-icon').toggleClass('active');
  $('.header__form').toggleClass('active');
  $('.header__form-input').toggleClass('active');
})