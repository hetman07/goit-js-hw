'use strict';

//dataInput для получения кол-ва divов которые необх вставить
const dataInput = document.querySelector('input[type="number"]');

//render кнопка для слушателя чтобы добавить в разметку
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
//вешаем слушателя на событие click
render.addEventListener('click', createBoxes);
//выделяем куда будем вставлять
const div_boxes = document.querySelector('#boxes');


//создаем переменную которая хранит виртуальную разметку 
//которая создается с помощью функций
const boxes = [];
//создаю функцию которая по шаблону создаст div
function createBoxes() {

  new Array(Number(dataInput.value)).fill(0).map((num, i) => {
    const div = document.createElement("div");
    div.classList.add("controls__div");
    div.style.width = `${30 + (i * 10)}px`;
    div.style.height = `${30 + (i * 10)}px`;
    div.style.background = get_rand_color();

    boxes.push(div);
  });

  ////добавляем виртуальную разметку в html разметку
  div_boxes.append(...boxes);

};

//функция случайных цветов
function get_rand_color() {
  const color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
};

//функция для очистки div#boxes.
//вешаю слушатель на кнопку destroy
destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  div_boxes.innerHTML = "";
  dataInput.value = 0;
  boxes.length = 0;
};