import {
  alert,
  notice,
  info,
  success,
  error
} from '@pnotify/core';

import countryService from './fetchCountries.js';

import tamplate_countries from './template/countries.hbs'; //шаблон в который будут вставляться данные для формирования разметки
import tamplate_country from './template/country.hbs'; // шаблон для одной страны

const input = document.querySelector('#data-input');
const countryList = document.querySelector('.js-section');

input.addEventListener('input', _.debounce(loadQueryHandler, 500));
window.addEventListener('keydown', handleKeyPress); //слушатель на нажтии Escape

function loadQueryHandler(event) {

  const inputValue = input.value; //переменная inputValue хранит знач которое вводим в инпуте

  countryService.query = inputValue;

  clearListItems(); //ф-ция очистки страницы от предыдущей разметки

  if (inputValue !== '') {
    countryService
      .fetchCountries()
      .then(countries => {
        console.log('countries', countries.status);
        if (countries.length === 1) {

          const markup = buildItemMarkup(countries); //в data.countries обьект с данными которые вернулись с бекэнда
          //ф-ция buildListItemsMarkup заполняет шаблон hbs заполняется параметрами
          //и разметка готова

          insertListItem(markup); //вызываем ф-цию для отрисовки
        } else if (countries.length > 1 && countries.length < 10) {
          const markup = buildListItemsMarkup(countries);
          insertListItem(markup);
        } else if (countries.length > 10) {
          // pnotify
          error({
            title: 'Uh Oh!',
            text: "Too many matches found. Please enter a more specific query!",
            hide: true,
            delay: 2000,
          });
        } else if (countries.status === 404) {
          error({
            title: 'Uh Oh!',
            text: countries.message,
            hide: true,
            delay: 2000,
          });
        }
      })
      .catch(error => {
        console.warn(error);
      });
  }
}

//функция для заполнения данными разметки в шаблоне hbs для одной страны
function buildItemMarkup(item) {
  return tamplate_country(item);
}
//функция для заполнения данными разметки в шаблоне hbs для кол-ва стран < 10
function buildListItemsMarkup(items) {
  return tamplate_countries(items);
}

//функция для вставки отресованной разметки в html
function insertListItem(items) {
  countryList.insertAdjacentHTML('afterbegin', items); //items = markup
}

//функция для очистки страницы от предыдущих результатов поиска
function clearListItems() {
  // languagesList.innerHTML = '';
  countryList.innerHTML = '';
}

function handleKeyPress(event) {
  if (event.code === 'Escape') {
    input.value = '';
    clearListItems(); //ф-ция очистки страницы от предыдущей разметки
  }
};
