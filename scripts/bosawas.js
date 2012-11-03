$.fn.bosawas = function(){
  $ul = $(this);
  $lis = $ul.find('li');
  $thumbs = $lis.find('img');

  // Add CSS class
  $ul.addClass('bosawas-thumbs');
  $lis.addClass('bosawas-thumb');
  $thumbs.addClass('bosawas-thumb');

  // Main view
  $div = $('<div class="bosawas-full"/>');
  $img = $('<img/>');
  $description = $('<span class="bosawas-description"/>');
  $div.append($img).append($description);

  $ul.after($div);

  showImage = function(thumb){
    $img.attr('src', $(thumb).attr('data-full-url'));
    $description.text($(thumb).attr('data-description'));
  };

  $thumbs.on('hover', function(e){
    showImage($(this));
  });
  showImage($thumbs.first());
};
