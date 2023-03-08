const navLinks = document.querySelectorAll('.header__nav > a.header__link')
const heroLink = document.querySelector('.hero__link')
contactsBlock = document.querySelector('#contacts')

navLinks.forEach((link)=> {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
})

heroLink.addEventListener('click', (e)=> {
  e.preventDefault()
  contactsBlock.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

