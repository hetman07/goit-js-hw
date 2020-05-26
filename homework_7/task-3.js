'use strict';

const images = [{
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//выделяем куда будем вставлять
const table = document.querySelector('#gallery');
//создаем переменную которая хранит виртуальную разметку 
//которая создается с помощью функций
const markup = createGalleryItems(images);

//добавляем в разметку
table.insertAdjacentHTML('beforeend', markup);

//создаю функцию которая по шаблону создаст li>img
function createGalleryItemMarkup({
  url,
  alt
}) {
  const row = `
  <li class = 'gallery__item'>
    <img class = 'gallery__item-img'
  src=${url}
  alt="${alt}"
  sizes="252px"
  height="142">
    </li>
  `;
  return row;
};

//создаю функцию которая всю виртуальную разметку добавит в DOM
function createGalleryItems(images) {
  return images.reduce((acc, images) => acc += createGalleryItemMarkup(images), '');
};