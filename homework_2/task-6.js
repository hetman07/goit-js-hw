'use strict';

let input;
const numbers = [];
let total = 0;
do {
    input = prompt('Введите число:');
    if (input === null) {
        break;
    }
    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        input = 0;
    }
    input = Number(input);
    numbers.push(input);
} while (input !== null);
for (const i of numbers) {
    total += i;
}
alert(`Общая сумма чисел равна ${total}`);