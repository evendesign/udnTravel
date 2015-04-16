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

  var deepcolor = new Array();
  deepcolor[0] = color[0] - 20;
  deepcolor[1] = color[1] - 20;
  deepcolor[2] = color[2] - 20;
  if (deepcolor[0] < 0) { deepcolor[0] = 0; };
  if (deepcolor[1] < 0) { deepcolor[1] = 0; };
  if (deepcolor[2] < 0) { deepcolor[2] = 0; };
  // console.log(deepcolor);

  targetTag.parents('.travel-item').find('.enter').css('background-color', "rgb(" + deepcolor + ")");
}