'use strict';

const value = document.querySelector('#value');

let counterValue = 0; //значение перем.хранит текущее значение счетчика

const decrementButton = document.querySelector('button[data-action="decrement"]');
decrementButton.addEventListener('click', (event) => {
    const element = event.currentTarget;
    counterValue -= 1;
    value.textContent = counterValue;
});
const incrementButton = document.querySelector('button[data-action="increment"]');
incrementButton.addEventListener('click', (event) => {
    const element = event.currentTarget;
    counterValue += 1;
    value.textContent = counterValue;
});