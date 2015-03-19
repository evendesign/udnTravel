if ( $('.hero').length != 0 ) {
   $('.hero-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.hero-slider-nav'
  });
  $('.hero-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: '0px',
    asNavFor: '.hero-slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true
  });
}