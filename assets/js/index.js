//All images
const items = document.querySelectorAll('img');
const nbSlide = items.length; //3
console.log(nbSlide -1 );

const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');

let count = 0;

suivant.addEventListener('click', ()=> {
  items[count].classList.remove('active');

  if(count < nbSlide - 1) {
    count++;
  }else{
    count = 0;
  }

  items[count].classList.add('active');
})

precedent.addEventListener('click', ()=> {
  items[count].classList.remove('active');

  if(count > 0 ) {
    count--;
  }else{
    count = nbSlide - 1;
  }
  
  items[count].classList.add('active');
})