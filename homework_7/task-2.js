'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//выбираем тэг для вставки
const ulIngredients = document.querySelector('#ingredients');

const addList = createListItem(ingredients);

//так как li у нас 6 и они одинаковые по содержимому 
//напишем функцию которая будет создавать теги li

function createListItem() {
  return ingredients.reduce((acc, ingredient) => {
    acc = document.createElement('li'); //создаем li
    acc.textContent = ingredient; //наполняем контентом 
    return ulIngredients.appendChild(acc); //добавляем li в выбранный тег
  }, '');
};