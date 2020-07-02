import menu from './menu.json';
import menuItemTemplate from './template/menu.hbs';

const refs = {
  menuFeed: document.querySelector('.js-menu'),
};

// Создаем всю разметку из шаблона элемента списка
buildMenuFeed(menu);

function buildMenuFeed(menu) {
  const markup = menu.map(item => menuItemTemplate(item)).join('');
  refs.menuFeed.insertAdjacentHTML('beforeend', markup);
}
