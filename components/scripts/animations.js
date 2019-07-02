let ball = document.querySelector('.meet h2');
let meet = document.querySelector('.meet-btn');


meet.addEventListener('click', function(){
  let elem = meet.getAttribute('data-src') + ' h2';
  console.log(elem);

  if(window.innerWidth > 600){

    ball.animate(
      [
        {'transform':'translateX(300px) skewX(-45deg)', 'opacity': 0},
        {'transform':'translateX(0px) skewX(0deg)', 'opacity': 1}
      ],
      {
        delay:100,
        duration:1000
      }
    );//animate function

  } else if (window.innerWidth < 600){

    ball.animate(
      [
        {'opacity': 0},
        {'opacity': 1},
      ],
      {
        delay:100,
        duration:1000
      }
    );//animate function

  }
}, false);
