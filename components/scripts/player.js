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
    if($(event.target).hasClass('playing'))

      $(event.target).removeClass('playing').addClass('paused');
      
    else

      $(event.target).removeClass('paused').addClass('playing')
      .siblings().removeClass('playing paused');

  });//player event listener

  //songs area event listener to remove player classes and pause the song.
  $('.songs').on('click', function(e){
    if($(e.target).hasClass('songs')){
      let audio = document.querySelector('audio');
      audio.parentNode.removeChild(audio);
      $('.player').children().removeClass('playing paused');
    }

  });//songs event listener

});
