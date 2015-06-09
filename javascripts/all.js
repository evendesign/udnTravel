$(function(){
  if ( $('.hero').length != 0 ) {
    $('.hero-holder').addClass('active');
    $('.hero-slider').slick({
      fade: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      autoplay: false,
      adaptiveHeight: true
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
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    }
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


