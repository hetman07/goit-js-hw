'use strict';

const findLongestWord = function (string) {
    let wordsArray = string.split(' ');
    let longerWord = wordsArray[0]; //по умолчанию переменной присваиваю первое слово

    for (const word of wordsArray) {
        if (word.length > longerWord.length) {
            longerWord = word;
        }
    }
    return longerWord;
}
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'