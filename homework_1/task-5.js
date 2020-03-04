const promptLabel = `Введите название страны:`;
let price;

let userChoiseCountry = prompt(promptLabel); //делаем изменяемой переменной
userChoiseCountry = userChoiseCountry.toUpperCase(); //преобразование в верхний регистр;
switch (
    userChoiseCountry //строгое сравнение
) {
    case 'КИТАЙ':
        price = 100;
        // message = 'Вывоз самостоятельно!';
        break;
    case 'ЧИЛИ':
        price = 250;
        // message = 'Доставка курьером.';
        break;
    case 'АВСТРАЛИЯ':
        price = 170;
        // message = 'Поссылка на почте!';
        break;
    case 'ИНДИЯ':
        price = 80;
        // message = 'Поссылка на почте!';
        break;
    case 'ЯМАЙКА':
        price = 120;
        //  message = 'Поссылка на почте!';
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
console.log(`Доставка в ${userChoiseCountry} будет стоить ${price} кредитов`);