$ = require('jquery');

$(document).ready(function(){

  $('.header-logo').on('click', function() {
    let position = $('.contact').position();
    position.top = position.top - 50;
    position.behavior = 'smooth';
    window.scroll(position);

  });

  $('.songs h2').on('click', function(){
    let position = $('.meet').position();
    position.top = position.top;
    position.behavior = 'smooth';
    window.scroll(position);
  });

  $('.meet').on('click', function(){
    let position = $('.songs').position();
    position.top = position.top;
    position.behavior = 'smooth';
    window.scroll(position);
  });

  $('.video').on('click', function(){
    let position = $('.banner').position();
    position.top = position.top;
    position.behavior = 'smooth';
    window.scroll(position);
  });

});
