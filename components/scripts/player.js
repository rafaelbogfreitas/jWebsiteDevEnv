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

  if(songName != null)
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

    } else if (songName != null){
      songPlaying.src = songName;
      songPlaying.play();
    }
  } else if (songName != null){

    let audio = document.createElement('audio');
    audio.id = 'playing';
    audio.src = songName;

    document.body.appendChild(audio);

    audio.play();


    audio.addEventListener('ended', function(e){
      audio.parentNode.removeChild(audio);

      let lis = document.querySelectorAll('.player li');
      for(let i = 0; i < lis.length; i++) {
        lis[i].classList.remove('playing');
      }
      for(let i=0; i<btns.length; i++) btns[i].src = 'images/play.svg';
      e.id = '';

    }, false); //music finished event listener
  }
}, false);

const playerOptions = {
  threshold:0.3
}

const playerObserver = new IntersectionObserver(function(entries, playerObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      let audio = document.querySelector('audio');
      let playerPLaying = document.querySelector('.player .playing');
      let playerPLayingImg = document.querySelector('.player .playing img');
      document.querySelector('body').removeChild(audio);
      playerPLaying.classList.remove('playing');
      playerPLayingImg.src = 'images/play.svg';
    }
  })
}, playerOptions)

playerObserver.observe(player);
