let input;
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
    total += input;
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);