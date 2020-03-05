'use strict';

const checkForSpam = function (message) {
    let result = false;
    let messageString = message.toLowerCase();
    console.log(messageString);
    if (messageString.includes('spam') || messageString.includes('sale')) {
        result = true;
    }
    return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true