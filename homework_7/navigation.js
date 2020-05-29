'use strict';

//  const listCategories = document.querySelectorAll('#categories > .item');
//  console.log(listCategories);
// // const lengthList = listCategories.length;
// // console.log(`В списке ${lengthList} категории.`);

// const categ = document.body.childNodes;
// console.log(categ);

//  const title =  document.querySelectorAll('#categories > .item > h2');
//  const aaa = title.textContent;
//  console.log(`Категория: ${aaa}`);
// const titleLi = document.querySelectorAll('#categories > .item > ul > li');
// console.log(title);
// console.log(titleLi);
// function countLi()
const elem = document.querySelector('#categories');

console.log(elem);

// elem.parentNode - выберет родителя elem
console.log('parent UL: ',elem.parentNode);

// elem.childNodes - псевдо-массив хранит все дочерние элементы, включая текстовые.
console.log('псевдо-массив хранит все дочерние элементы, включая текстовые: ',elem.childNodes);

//elem.children - псевдо-массив хранит только дочерние узлы-элементы, то есть соответствующие тегам.
console.log('псевдо-массив хранит только дочерние узлы-элементы: ',elem.children, elem.children.length);

const title =  document.querySelectorAll('#categories > .item > h2');
console.log('Title: ', title);
const titleContent = title.firstElementChild;
//const arrayTitle = Array.from(title.children);
console.log('Array: ', titleContent);



//elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
console.log('1 дочерний эл-т внутри elem, включая текст узлы: ',elem.firstChild);

//elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem
console.log('выберет 1ый дочерний узел-элемент внутри elem: ',elem.firstElementChild);

//elem.previousSibling - выберет элемент "слева" от elem (его предыдущего соседа)
console.log(elem.previousSibling);

//elem.previousElementSibling - выберет узел-элемент "слева" от elem (его предыдущего соседа)
console.log(elem.previousElementSibling);

const elemH2 = elem.children;
console.log(elemH2.textContent);

