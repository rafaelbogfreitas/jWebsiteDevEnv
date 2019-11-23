let banner = document.querySelector('.meet');
let headerMeet = document.querySelector('.meet h2');

let options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(function(entries, observer){

  entries.forEach(entry => {
    if(entry.isIntersecting){
      headerMeet.classList.add('appear');
    } else {
      headerMeet.classList.remove('appear');
    }
  })

}, options);

if(window.innerWidth > 1000)
observer.observe(banner);
