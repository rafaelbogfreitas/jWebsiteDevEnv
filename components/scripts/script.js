
//This is script controls the navigation of th Website
//====================================================


let nav = document.querySelector('.main-nav');

nav.addEventListener('click', function(e){
  let elem = document.querySelector(e.target.getAttribute('data-src'));
  elem.scrollIntoView({'behavior':'smooth'});

}, false);

//scroll event listener for window

window.addEventListener('scroll', function(){

  //This bit of code controls the display of the nav in mobile version
  //the idea being to display the nav only when the pageYOffset is equal to zero.

    if(window.innerWidth <= 400 && window.pageYOffset > 5){
    $('.main-nav ul').slideUp();

    //display a 'back' arrow img that bring the pageYOffset back to 0 when clicked.
    $('.backArrow').show();
  }
  else {
    $('.main-nav ul:last-child').hide();
    $('.main-nav ul').slideDown();

    //hides the arrow img
    $('.backArrow').hide();
  }


  // This code changes the background color depending on the page offset to contrast
  // with the page background and allow reading.

  let li = document.querySelectorAll('.main-nav ul li');

  if(window.pageYOffset > 2442 && window.innerWidth >= 1000){

    for(let i=0; i<li.length;i++){
      li[i].style.background = 'rgba(210, 255, 113, 0.9)';
      li[i].style.color = 'black';
    }

  }else if(window.pageYOffset <= 2442 && window.innerWidth >= 1000) {

    for(let i=0; i<li.length;i++){
      li[i].style.background = 'rgba(163, 96, 247, 1)';
      li[i].style.color = 'white';
    }

  } else if (window.innerWidth < 400){

    for(let i=0; i<li.length;i++){
      li[i].style.background = 'rgba(163, 96, 247, 1)';
      li[i].style.color = 'white';
    }

  }

}, false);

//resize event listener to change background color of nav when it is fixed
//horizontally on the top.
window.addEventListener('resize', function(){
  let li = document.querySelectorAll('.main-nav ul li');
  if(window.innerWidth < 1000 && window.innerWidth >= 400){

    for(let i=0; i<li.length;i++){
      li[i].style.background = 'rgba(255,255,255,1)';
      li[i].style.color = 'black';
    }

  } else {

    for(let i=0; i<li.length;i++){
      li[i].style.background = 'rgba(163, 96, 247, 1)';
      li[i].style.color = 'white';
    }

  }

}, false);//resize event
