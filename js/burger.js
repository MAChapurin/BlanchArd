'use strict'

const btn = document.querySelector('.header__burger-btn')
const menu = document.querySelector('.header__burder-menu')
const links = document.querySelectorAll('nav.header__burder-menu > a.header__link')
console.log(links)

links.forEach((link) => {
  link.addEventListener('click', ()=> {
    btn.classList.remove('header__burger-btn_active')
    menu.classList.remove('header__burder-menu_active')
  })
})

btn.addEventListener('click', ()=> {
  btn.classList.toggle('header__burger-btn_active')
  menu.classList.toggle('header__burder-menu_active')
})


const searchBlock = document.querySelector('.header__search')
const searchIcon = document.querySelector('#search-icon')
const logo = document.querySelector('.logo')
const closeBtn = document.querySelector('.header__search-close')

searchIcon.addEventListener('click', ()=> {
  logo.style.opacity = 0
  setTimeout(()=>{
    searchBlock.classList.add('header__search_active')
    logo.style.opacity = 1;
  },300)
})

closeBtn.addEventListener('click', ()=> {
  searchBlock.classList.remove('header__search_active')
  searchIcon.style.opacity = 0;
  logo.style.opacity = 0
  setTimeout(()=>{
    searchIcon.style.opacity = 1;
    logo.style.opacity = 1;
  },300)
})
