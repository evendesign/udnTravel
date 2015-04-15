function loaded(id) {
  var img = new Image;
  var targetTag = $('#'+id);
  img.src = targetTag.attr('src');

  var interval = window.setInterval(function () {
    // console.log('img loading');
  }, 250);
  img.onload = function () { window.clearInterval(interval); }

  var colorThief = new ColorThief();
  var color = colorThief.getColor(img);

  targetTag.parents('.travel-item').find('.enter').css('background-color', "rgb(" + color + ")");
}