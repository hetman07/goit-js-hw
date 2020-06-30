const spinner = document.querySelector('#spinner');

export default {
  show() {
    spinner.classList.remove('is-hidden'); //удаляем класс со стилем который отображает спинер
  },
  hidden() {
    spinner.classList.add('is-hidden');
  }
}
