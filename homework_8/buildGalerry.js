'use strict';

import galleries from "./gallery-items.js"; //подтянула файл с картинками

//куда буду вставлять картинки по шабл строке+вешаю слушатель
const imagesInput = document.querySelector('.js-gallery');

const markup = createGalerry(galleries); //переменная которая хранит ссылку на функцию которая по шаблону создает виртуальную разметку

imagesInput.insertAdjacentHTML('beforeend', markup); //вставка в dom разметку

//функция для генерации из массива обьектов виртуальную разметку по шаблону
function createGalerryMarkup({
  preview,
  original,
  description
}) {
  const newLiImg = `
    <li class="gallery__item">
    <a
      class="gallery__link"
      
    >
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </li>
  `;
  return newLiImg;
  console.log(newLiImg);
};
//функция, которая создает весь перечень виртуальной разметки 
//согласно нашего массива обьектов в gallery-items
function createGalerry(galleries) {
  return galleries.map(galler => createGalerryMarkup(galler)).join('');

};