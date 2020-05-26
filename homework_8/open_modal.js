'use strict';
const imagesInput = document.querySelector('.js-gallery');
const modal = document.querySelector('.lightbox');
const modalOverlay= document.querySelector('.lightbox__overlay');
console.log(modalOverlay);
const changeSrc = document.querySelector('.lightbox__image');

//слушатель клика на тег IMG даю клас is-open для откр модального окна
//+дать атрибут src элемента img.lightbox__image
imagesInput.addEventListener('click', handleOpenModal);
modal.addEventListener('click', handleModalClick);
modalOverlay.addEventListener('click', event => console.log('click'));

function handleOpenModal(event) {

//обязательно делать проверку куда кликаем!!!
// if(event.target !== event.currentTarget) {//избежать наложения класса nav__link--active на ul при нажатии на область ul контроль куда кликаем
//   return;
// }

  if(event.target.nodeName !== 'IMG') {
    return;
  }
  
  modal.classList.add('is-open'); //открытие модального окна 
  
  window.addEventListener('keydown', handleKeyPress);//слушатель на нажтии любой клавиши

const imgItem = event.target; //выдает конкретный тэг IMG
const getIdAttribut = imgItem.dataset.id; //из этого конкретного тэга IMG вытягиваю его атрибут id
const getSrcAttribut = imgItem.dataset.source;//из этого конкретного тэга IMG вытягиваю его атрибут source
const getAltAttribut = imgItem.getAttribute('alt');

//Подмена значения атрибута src элемента img.lightbox__image.
//даю атрибут src адреса картинки и alt
changeSrc.setAttribute("src", getSrcAttribut);
changeSrc.setAttribute("alt", getAltAttribut);

};

//Закрытие модального окна по клику на кнопку button[data-action="close-modal"]
const buttonClose = document.querySelector('.lightbox__button');

buttonClose.addEventListener('click', closeModal);



function closeModal(event) {
modal.classList.remove('is-open'); //закрытие модОкна а именно удалить класс is-open
window.removeEventListener('keydown', handleKeyPress);
  //window.removeEventListener('click',handleClickImg);
  if(document.querySelector('.lightbox__image').hasAttribute("src")) {
      document.querySelector('.lightbox__image').setAttribute("src",'');
      document.querySelector('.lightbox__image').setAttribute("alt",'');
  }
  console.log('атрибут пуст');
};

  function handleModalClick(event) {

    console.log('event_target', event.target);
    console.log('event_currenttarget', event.currentTarget)

      if (event.target === event.currentTarget){
        return;
      }
       closeModal(); 
  };

  function handleKeyPress(event) {
    
    if (event.code !== 'Escape') {
      return;
    }
  
    closeModal();
  }
