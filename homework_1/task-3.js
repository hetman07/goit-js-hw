const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const promptLabel = prompt('Введите пароль:');

if (promptLabel === null) {
    message = "Отменено пользователем!";
} else if (ADMIN_PASSWORD === promptLabel) {
    message = "Добро пожаловать!";
} else {
    message = "Доступ запрещен, неверный пароль!";
};
alert(message);