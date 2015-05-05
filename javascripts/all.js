$(function(){
  if ( $('.hero').length != 0 ) {
    $('.hero-holder').addClass('active');
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
      autoplay: false,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });
  }

  $('.extra-option-btn').on('click', function(){
    $(this).toggleClass('active');
  });

  $('.badge').on('click', function(){
    $(this).toggleClass('active');
  });

  $('.record-photo-wrap').magnificPopup({
    type:'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('.option').on('click', function(){
    $(this).toggleClass('active');
  });

  $('.othercheckbox').on('click', function(){
    if ($(this).is(":checked")) {
      $(this).parents('.form-content').find('.otherinput').removeAttr('disabled');
    } else {
      $(this).parents('.form-content').find('.otherinput').attr('disabled', true);
    }
  })
});


