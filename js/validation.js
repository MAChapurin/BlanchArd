const form = document.querySelector('.form');
const inputName = form.querySelector('[type="text"]');
const inputPhone = form.querySelector('[type="tel"]');
const inputBtn = form.querySelector('[type="submit"]');

function sendValidMessage(el, message) {
  el.classList.add('no-valid');
  el.value = message;
  setTimeout(()=> {
    el.classList.remove('no-valid');
    el.value = '';
    el.focus();
  }, 3000);
}

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  if(!inputName.value.length) {
   sendValidMessage(inputName, 'Вы не ввели имя');
  }
  if(!inputPhone.value.length) {
   sendValidMessage(inputPhone, 'Вы не ввели телефон');
  }
  if(inputName.value.length <= 1) {
    sendValidMessage(inputName, 'Имя слишком короткое');
  }

  if(inputName.value.match(/\d/)) {
    sendValidMessage(inputName, 'Недопустимое значение');
  }

  if(inputPhone.value.match(/\D/)) {
    sendValidMessage(inputPhone, 'Недопустимое значение');
  }

  else {
    inputName.value = '';
    inputPhone.value = '';
    inputBtn.innerHTML = 'Форма успешно отправлена';
    setTimeout(()=> {
      inputBtn.innerHTML = `  Заказать <span>обратный звонок</span>`;
    }, 5000)
  }
  console.log(inputName.value, inputPhone.value);
})
