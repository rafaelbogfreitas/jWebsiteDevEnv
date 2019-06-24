const player = document.querySelector('.songs');

player.addEventListener('click', function(e){
  let audio = document.createElement('audio');
  audio.id = 'playing';
  audio.src = 'songs/getOut.mp3';
  document.body.appendChild(audio);
  audio.play();
  player.removeEventListener('click');

  player.addEventListener('click', function(){
    audio.pause();
  }, false)

  audio.addEventListener('ended', function(e){
    audio.parentNode.removeChild(audio);
    e.id = '';
  }, false);
})
