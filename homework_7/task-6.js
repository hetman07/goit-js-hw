'use strict';
//выбираю input
const dataInput = document.querySelector('#validation-input');

//вешаю слушатель при фокусе на input
//handleInputNew очищает стиль так как будут введены новые данные которые необходимо проверить
dataInput.addEventListener('focus', handleInputNew);
//вешаю слушатель при ПОТЕРИ фокуса на input
//handleInputChange проверка введеных данных и соотв приминение необх стилей
dataInput.addEventListener('blur', handleInputChange);

function handleInputChange(event) {
  if (dataInput.value.length < dataInput.getAttribute('data-length')) {
    dataInput.classList.add('invalid');
  } else {
    dataInput.classList.add('valid');
  }
};

function handleInputNew(event) {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
  }
};