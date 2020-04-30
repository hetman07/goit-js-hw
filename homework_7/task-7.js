'use strict';

const dataInput = document.querySelector('#font-size-control');
dataInput.setAttribute('min', '8');
dataInput.setAttribute('max', '72');
dataInput.setAttribute('step', '2');

const spanText = document.querySelector('#text');

dataInput.addEventListener('input', handleInputRange);

function handleInputRange(event) {
    spanText.setAttribute('style', `font-size: ${dataInput.value}px`);
};