const btnScroll = document.querySelector('.scroll');

btnScroll.addEventListener('click', handleClickBtn);

function handleClickBtn(event) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  return false;
}
