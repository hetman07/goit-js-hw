import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

//плагин модального окна basicLightbox

const galleryContainer = document.querySelector('.js-gallery'); //ul для вставки li

galleryContainer.onclick = (e) => {
  let imgItem = e.target; //выдает конкретный тэг IMG в основной галерее
  //проверка что клик произошел на теге IMG
  if (e.target.nodeName !== 'IMG') {
    return;
  };
  //создаю шаблон для модального окна
  const html = `
    <div id="image">
    <img class="lightbox-img" width="1400" src="" />
  </div>
  `

  const instance = basicLightbox.create(html);
  instance.show(() => {

    const imgLightBox = document.querySelector('.lightbox-img');
    const getSrcAttribut = imgItem.dataset.source; //из этого конкретного тэга IMG вытягиваю его атрибут source

    //Подмена значения атрибута src элемента img.lightbox-img
    //даю атрибут src адреса картинки
    imgLightBox.setAttribute("src", getSrcAttribut);

  });
};
