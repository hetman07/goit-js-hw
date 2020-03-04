'use strict';

const logItems = function (array) {
    let count = 0;
    for (let i = 0; i < array.length; i += 1) {
        count += 1;
        console.log(`${count} - `, array[i]);
    }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);