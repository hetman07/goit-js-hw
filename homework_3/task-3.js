'use strict';

const findBestEmployee = function (employees) {
    let name;

    const keys = Object.keys(employees);
    const values = Object.values(employees);
    let max = Math.max(...values);
    for (const key of keys) {
        if (max === employees[key]) {
            name = key;
        }
    }
    return name;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux