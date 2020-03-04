'use strict';

const formatString = function (string) {
    const limit = 40;
    let lengthString = string.length;
    if (lengthString < limit) {} else {
        let stringArray = string.split(''); //делаю массив
        stringArray.length = 40; // обрезаю до 40 символов
        stringArray.push('...'); // добавляю ... в конце
        string = stringArray.join(''); // склеиваю массив
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