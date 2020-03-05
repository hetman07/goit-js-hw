'use strict';

const formatString = function (string) {
    const limit = 40;
    let lengthString = string.length;
    if (lengthString > limit) {
        const point = '...';
        let newString = string.slice(0, 39); //создаю новую строку необходимой величины
        string = newString.concat('...');
    }
    return string;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);