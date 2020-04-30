'use strict';

const elem = document.querySelector('#categories');
//elem.children - псевдо-массив хранит только дочерние узлы-элементы, то есть соответствующие тегам.
console.log(`В списке ${elem.children.length} категории.`);

// const itemLi = document.querySelector('.item');
// const firstItem = itemLi.firstElementChild;
// console.log(`Категория: `,firstItem.textContent);
// const secondItem = firstItem.nextElementSibling;
// console.log('Количество элементов:',secondItem.children.length);


const elemArray = [...document.querySelectorAll('.item')];

const aaa = elemArray.map((el, i) => {
  const first = el.children[0].textContent;
  const second = el.children[0].nextElementSibling.children.length
  return `Категория: ${first} 
Количество элементов: ${second}
`;
});
console.log(...aaa);