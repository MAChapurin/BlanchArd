// import {JustValidate} from '../libs/just-validate.min.';

const form = document.querySelector(".form");
const inputName = form.querySelector('[type="text"]');
const inputPhone = form.querySelector('input[type="tel"]');
const inputBtn = form.querySelector('[type="submit"]');
const formModal = form.querySelector(".form__modal");

console.log(inputName, inputPhone);

let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

const validate = new JustValidate(".form");

validate
  .addField(inputName, [
    {
      rule: "required",
      errorMessage: "Имя обязательно к заполнению",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Имя слишком короткое",
    },
    {
      rule: "maxLength",
      value: 10,
      errorMessage: "Имя слишком длинное",
    },
  ])
  .addField(inputPhone, [
    {
      rule: "required",
      errorMessage: "Телефон обязателен к заполнению",
    },
    {
      validator: function(name, value) {
      const phone = selector.inputmask.unmaskedvalue()
      return Number(phone) && phone.length === 10
      },
      errorMessage: 'Номер должен содержать 10 цифр',
      }
  ])
  .onSuccess(() => {
    console.log(inputName.value, inputPhone.value);
    inputName.value = "";
    inputPhone.value = "";
    validate.refresh();
    formModal.style.display = "flex";
    setTimeout(() => {
      formModal.style.opacity = 1;
    }, 0);
    setTimeout(() => {
      formModal.style.opacity = 0;
    }, 3000);
    setTimeout(() => {
      formModal.style.display = "";
    }, 3500);
  });
