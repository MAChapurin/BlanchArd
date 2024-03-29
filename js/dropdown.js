document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})


const btns = document.querySelectorAll(".hero__button");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

const body = document.body;

body.addEventListener('click', (e)=> {
  hasClass(e.target, '.hero__nav')
})

function hasClass(el, className) {
  if(el.closest(className)) return;

  btns.forEach(el => {
    if (el != this) {
      el.classList.remove(activeClassbtns)
    }
  });
  dropdowns.forEach(el => {

      el.classList.remove(activeClassdropdowns)

  });
}
