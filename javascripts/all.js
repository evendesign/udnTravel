$('.travel-photo-img').load(function(){
  var targetImage = new Image;
  var targetTag = $(this);
  var imgSource = targetTag.attr('src');
  targetImage.src = imgSource;
  var colorThief = new ColorThief();
  var color = colorThief.getColor(targetImage);
  targetTag.parent().next().children('.travel-info').children('.enter').css('background-color', "rgb(" + color + ")");
});


$(function(){
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
      autoplay: true,
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
});
