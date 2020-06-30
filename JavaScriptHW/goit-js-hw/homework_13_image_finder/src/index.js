//ИМПОРТ
import Masonry from 'masonry-layout';
import InfiniteScroll from 'infinite-scroll'; // подкл. инфинити скролл
import imagesLoaded from 'imagesloaded';
import {
  alert,
  notice,
  info,
  success,
  error
} from '@pnotify/core';
// import * as basicLightbox from 'basiclightbox';

//JS
import apiPixabay from './apiPixabay.js'; //импортирую файл который формируют адресную строку для запроса
import './scroll.js'; //подк скролл для прокрутки экрана вверх
import spinner from './spinner.js'; //для отображения слоя со спинером
import './modal.js';

//ШАБЛОН
import galleryTemplate from './template/galleryPixabay.hbs'; //подкл. шаблон для вставки

// CSS
import 'material-design-icons/iconfont/material-icons.css'; //отображение иконок

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
// import 'basiclightbox/dist/basicLightbox.min.css';
import './styles.css';

//ссылки на DOM-узлы
const refs = {
  galleryContainer: document.querySelector('.js-gallery'), //ul для вставки li
  searchForm: document.querySelector('#search-form'), // форма
};

//используем плагин Masonry созд экземпляр
const msnry = new Masonry('.grid', {
  itemSelector: '.photo-item',
  columnWidth: '.grid__col-sizer',
  gutter: '.grid__gutter-sizer',
  percentPosition: true,
  stagger: 30,
  transitionDuration: '0.3s',
  // nicer reveal transition
  visibleStyle: {
    transform: 'translateY(0)',
    opacity: 1,
  },
  hiddenStyle: {
    transform: 'translateY(100px)',
    opacity: 0,
  },
});
//для исп инфинити скролла созд с помощью конструктора необх 2 параметра
const infScrollInstance = new InfiniteScroll(refs.galleryContainer, {
  //1й пар-р - контейнер куда  будем рендерить
  responseType: 'text', //2-й параметр options {}
  history: false,
  outlayer: msnry, //исп Масонри
  path() {
    return apiPixabay.fetchUrl() + `${this.pageIndex}`;
  },
});

infScrollInstance.on('load', async (response, url) => {
  //слушатель инфинитискролла
  //response строка с данными с бэкенда

  spinner.show(); //даем класс is-hidden пока делаем запрос на бекэнд

  const images = await JSON.parse(response); //трансформируем ее в обьект с данными
  const arrayHits = images.hits; //массив из обьектов с картинками и данными

  if (arrayHits.length === 0) {
    //pnotify сообщение если введен не коректный запрос в поиск
    error({
      title: 'Uh Oh!',
      text: 'Not find pictures, please try again!',
      hide: true,
      delay: 2000,
    });
  }

  const markup = arrayHits.map(image => galleryTemplate(image)).join(''); //создаем разметку по шаблону

  const proxyEl = document.createElement('div');

  proxyEl.innerHTML = markup; // convert HTML string into elements

  const parsedItems = proxyEl.querySelectorAll('.js-gallery__item'); //перерисовываем в определенном месте наш DOM согласно свормированной разметкой

  imagesLoaded(parsedItems, () => { //с помощью плагина imagesLoaded что бы не было наложения картинок вставляем полученые данные с бэкенда
    infScrollInstance.appendItems(parsedItems); //с помощью встроеного  в инфинитескролл метода appendItems добавляем в ДОМ
    //Добавляем элементы в контейнер
    msnry.appended(parsedItems); //Добавляет и размещает добавленные элементы элемента в конце макета.
    spinner.hidden(); //прячем спиннер
  });
});

infScrollInstance.loadNextPage(); //с помощью встроеного метода loadNextPage в инфинитескролле дозагружаем следующую страницу

// Сабмит формы с новым параметром запроса для картинок
refs.searchForm.addEventListener('submit', e => {
  e.preventDefault(); //остановка отправки формы

  const form = e.currentTarget;
  const input = form.elements.query;
  const inputValue = input.value; //значения которые вводяться в поле инпута
  apiPixabay.query = inputValue; //подставляем введеные данные в значение ключа query для генерации путя

  const galleryItems = document.querySelectorAll('.js-gallery__item');

  infScrollInstance.pageIndex = 1; //сброс пар-ра pageIndex в 1 для рендеринга нового запроса
  if (inputValue !== '') {
    infScrollInstance.option({
      path() {
        return apiPixabay.fetchUrl() + `${this.pageIndex}`;
      },
    });

    imagesLoaded(galleryItems, () => {
      return galleryItems.forEach(item => {
        msnry.remove(item); //очистка экрана от старых запросов
        msnry.layout(msnry); //запуск построения новой разметки по новому поиску
      });
    });

    infScrollInstance.loadNextPage();
  }
});

// //плагин модального окна basicLightbox

// refs.galleryContainer.onclick = (e) => {
//   let imgItem = e.target; //выдает конкретный тэг IMG в основной галерее
//   //проверка что клик произошел на теге IMG
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   };

//   //создаю шаблон для модального окна
//   const html = `
//   <div id="image">
//   <img class="lightbox-img" width="1400" src="" />
// </div>
// `

//   const instance = basicLightbox.create(html, {
//     onShow: (instance) => console.log('onShow', instance),
//     onClose: (instance) => console.log('onClose', instance)
//   });
//   instance.show(() => {
//     const imgLightBox = document.querySelector('.lightbox-img');
//     const getSrcAttribut = imgItem.dataset.source; //из этого конкретного тэга IMG вытягиваю его атрибут source

//     //Подмена значения атрибута src элемента img.lightbox__img
//     //даю атрибут src адреса картинки
//     imgLightBox.setAttribute("src", getSrcAttribut);
//   });
// };
