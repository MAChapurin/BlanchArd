'use strict'
const modal = document.querySelector('.modal');
const modalLeft = document.querySelector('.modal__left');
const galery = document.querySelectorAll('.galery__swiper-slide');
const closeButton = document.querySelector('.modal__close');

galery.forEach((slide)=> {
  slide.addEventListener('click', ()=> {
    console.log(slide.innerHTML)
    modal.setAttribute('style', 'display: flex');
    modalLeft.innerHTML = slide.innerHTML;
    document.body.style.overflow = 'hidden';
  })

})

closeButton.addEventListener('click', ()=> {
  modal.setAttribute('style', 'display: none');
  document.body.style.overflow = 'visible';
})


document.body.addEventListener('click', (e)=> {
  if(e.target === modal) {
    modal.setAttribute('style', 'display: none');
    document.body.style.overflow = 'visible';
  }
})
