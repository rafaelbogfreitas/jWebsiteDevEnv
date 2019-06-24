
$(document).ready(function(){


  $('.meet-btn').on('click', function() {
    pickElement($('.meet'));
  });
  $('.songs-btn').on('click', function() {
    pickElement($('.songs'));
  });
  $('.videos-btn').on('click', function() {
    pickElement($('.video'));
  });
  $('.contact-btn').on('click', function() {
    pickElement($('.contact'));
  });
  $('.back-btn').on('click', function() {
    pickElement($('.banner'));
  });


  function pickElement(elem) {
    let position = elem.position();
    position.top = position.top;
    position.behavior = 'smooth';
    window.scroll(position);
  }

});
