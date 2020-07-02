const refs = {
  switchInput: document.querySelector('.js-switch-input'),
  bodyEl: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//при первой загрузке страницы
const persistedTheme = localStorage.getItem('Theme');
console.log('persistedTheme', persistedTheme);
if (persistedTheme === null || persistedTheme === Theme.LIGHT) {
  //при первой загрузке странице по умолчанию светлая тема поэтому даю класс light-theme тегу body
  refs.bodyEl.classList.add(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.LIGHT);
} else if (persistedTheme === Theme.DARK) {
  refs.bodyEl.classList.add(Theme.DARK);
  refs.switchInput.setAttribute('checked', true);
};

//вешаю слушатель на инпут чекбокса
refs.switchInput.addEventListener('change', handleCheckBox);

function handleCheckBox(event) {
  if (event.target) { //если произошел клик
    if (refs.bodyEl.classList.contains(Theme.LIGHT)) { //если была светлая тема то ...
      refs.bodyEl.classList.replace(Theme.LIGHT, Theme.DARK); //меняем тему на темную
      localStorage.setItem('Theme', Theme.DARK); //записываю в локалсторадже темную тему
      refs.switchInput.setAttribute('checked', true); //ползунок сдвинулся в правильное положение
    } else if (refs.bodyEl.classList.contains(Theme.DARK)) { //если тема не светлая то ...
      refs.bodyEl.classList.replace(Theme.DARK, Theme.LIGHT, ); //меняем тему на темную
      localStorage.setItem('Theme', Theme.LIGHT);
      refs.switchInput.removeAttribute('checked'); //удаляю атрибут чекбокс
    }
  }
}
