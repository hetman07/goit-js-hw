'use strict';

const imagesInput = document.querySelector('.js-gallery');
const modal = document.querySelector('.lightbox');
const modalOverlay = document.querySelector('.lightbox__content');

const changeSrc = document.querySelector('.lightbox__image'); //тегIMG в модальном окне
const listImg = [...document.querySelectorAll('.gallery__image')];

listImg.forEach((img, index) => {
  img.setAttribute('data-id', index);
});


const lengthListImg = listImg.length;

//слушатель клика на тег IMG даю клас is-open для откр модального окна
//+дать атрибут src элемента img.lightbox__image
imagesInput.addEventListener('click', handleOpenModal);
modalOverlay.addEventListener('click', handleModalClick);

function handleOpenModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  modal.classList.add('is-open'); //открытие модального окна 

  window.addEventListener('keydown', handleKeyPress); //слушатель на нажтии Escape

  window.addEventListener('keydown', handleKeyArrow); //слушатель на нажатии '<-' '->' на модальном окне

  let imgItem = event.target; //выдает конкретный тэг IMG в основной галерее
  const getIdAttribut = imgItem.dataset.id; //из этого конкретного тэга IMG вытягиваю его атрибут id
  const getSrcAttribut = imgItem.dataset.source; //из этого конкретного тэга IMG вытягиваю его атрибут source
  const getAltAttribut = imgItem.getAttribute('alt');
  //Подмена значения атрибута src элемента img.lightbox__image.
  //даю атрибут src адреса картинки и alt
  changeSrc.setAttribute("src", getSrcAttribut);
  changeSrc.setAttribute("alt", getAltAttribut);
  changeSrc.setAttribute("data-id", getIdAttribut);

  function handleKeyArrow(event) {
    if (event.code === 'ArrowRight') {

      const index = Number(imgItem.getAttribute("data-id")) + 1;
      if (index === lengthListImg) {
        return;
      } else {
        imgItem = listImg[index];

        changeSrc.setAttribute('src', imgItem.dataset.source);
        changeSrc.setAttribute("alt", getAltAttribut);
        changeSrc.setAttribute("data-id", imgItem.dataset.id);
      }

    }
    if (event.code === 'ArrowLeft') {

      const index = Number(imgItem.getAttribute("data-id")) - 1;

      if (index < 0) {
        return;
      } else {
        imgItem = listImg[index];
        console.log('after imgItem:', imgItem);

        changeSrc.setAttribute('src', imgItem.dataset.source);
        changeSrc.setAttribute("alt", getAltAttribut);
        changeSrc.setAttribute("data-id", imgItem.dataset.id);
      }
    }
  };

};

//Закрытие модального окна по клику на кнопку button[data-action="close-modal"]
const buttonClose = document.querySelector('.lightbox__button');

buttonClose.addEventListener('click', closeModal);

function closeModal(event) {
  modal.classList.remove('is-open'); //закрытие модОкна а именно удалить класс is-open
  window.removeEventListener('keydown', handleKeyPress);
  //window.removeEventListener('click',handleClickImg);
  if (changeSrc.hasAttribute("src")) {
    changeSrc.setAttribute("src", '');
    changeSrc.setAttribute("alt", '');
    changeSrc.setAttribute("data-id", '');
  }
  console.log('атрибут пуст');
};

function handleModalClick(event) {

  if (event.target.nodeName === 'IMG') {
    return;
  }
  closeModal();
};

function handleKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
};