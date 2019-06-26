const player = document.querySelector('.player');


player.addEventListener('click', function(e){
  let songName = e.target.getAttribute('data-src');
  const songPlaying = document.querySelector('audio');


  if(songPlaying) {
    if(songName===songPlaying.getAttribute('src')){
      if(songPlaying.paused){
        songPlaying.play();
        songPlaying.id = 'playing';
      } else {
        songPlaying.pause();
        songPlaying.id = 'paused';
      }

    } else {
      // e.target.classList.add('playing');
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

$(document).ready(function(){
  $('.player').on('click', function(event){
    if($(event.target).hasClass('playing')){
      $(event.target).removeClass('playing');
      $(event.target).addClass('paused');

    } else {
      $(event.target).removeClass('paused');
      $(event.target).addClass('playing');
      $(event.target).siblings().removeClass('playing');
      $(event.target).siblings().removeClass('paused');
    }
  })
})
