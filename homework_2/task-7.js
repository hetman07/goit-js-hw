'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    const min = 4;
    const max = 16;
    const loginLength = login.length;
    let result = true;
    if (loginLength < min || loginLength > max) {
        result = false;
    }
    return result;
};

const isLoginUnique = function (logins, login) {
    let result = true;
    if (logins.includes(login)) {
        result = false;
    }
    return result;
};

const addLogin = function (logins, login) {
    console.log(login);
    let result = false;

    if (isLoginValid(login) === true) {
        if (isLoginUnique(logins, login) === true) {
            logins.push(login);
            alert('Логин успешно добавлен!');
            result = true;
        } else {
            alert('Такой логин уже используется!');
        }
    } else {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');

    }
    return result;
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'