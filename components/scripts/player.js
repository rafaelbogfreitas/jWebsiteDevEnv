$(document).ready(function(){

  $('.player').on('click', function(event){


    if($(event.target).is('img') && $(event.target).parent().hasClass('playing')) $(event.target).parent().removeClass('playing').addClass('paused');

    else if ($(event.target).is('img')) $(event.target).parent().removeClass('paused').addClass('playing').siblings().removeClass('playing paused');

  });//player event listener

  //TO-DO click event that deletes 'audio' if anywhere is clicked but the player

  //TO-DO touch events
  // $('.player').on('touchstart', function(e){
  //   if($(e.target).is('li')){
  //     $(e.target).css({'background':'black'});
  //   }
  // }).on('touchend', function(e){
  //   if($(e.target).is('li')){
  //     $(e.target).css({'background':'white'});
  //   }
  // });

});

const player = document.querySelector('.player');


player.addEventListener('click', function(e){
  let songName = e.target.getAttribute('data-src');
  const songPlaying = document.querySelector('audio');
  let btns = document.querySelectorAll('.player img');

  console.log(e);

  for(let i=0; i<btns.length; i++) btns[i].src = 'images/play.svg';

  e.target.src = 'images/pause.svg';

  if(songPlaying) {
    if(songName===songPlaying.getAttribute('src')){
      if(songPlaying.paused){
        songPlaying.play();
        songPlaying.id = 'playing';
        e.target.src = 'images/pause.svg';
      } else {
        songPlaying.pause();
        songPlaying.id = 'paused';
        e.target.src = 'images/play.svg';
      }

    } else {
      songPlaying.src = songName;
      songPlaying.play();
    }
  } else {

    let audio = document.createElement('audio');
    audio.id = 'playing';
    audio.src = songName;

    document.body.appendChild(audio);

    audio.play();


    audio.addEventListener('ended', function(e){
      audio.parentNode.removeChild(audio);
      e.id = '';
    }, false);
  }
}, false);
