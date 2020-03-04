let credits = 23580;
const pricePerDroid = 3000;
let message;

let input = prompt('Введите количество дронов, которые Вы хотите купить:');

if (input === null) {
    console.log('Отменено пользователем!');
} else {
    input = Number(input);
    const totalPrice = input * pricePerDroid;
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits = credits - totalPrice;
        console.log(
            `Вы купили ${input} дроидов, на счету осталось  ${credits} кредитов.`,
        );
    }
}