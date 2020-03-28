'use strict';

const TodoEditor = function(todos = []) {
    this.todos = todos;
};

TodoEditor.prototype.saveTodo = function(todo){
    this.todos.push(todo);
};

const todoEditor = new TodoEditor();

todoEditor.saveTodo({ text: 'new todo'});
//console.log(TodoEditor);
class Storage{
    constructor(items = []){
        this.items = items
    }

getItems(items){
console.table(this.items)
}

addItem(item){
    this.items.push(item)
}

removeItem(item){
  this.items.splice(this.items.indexOf(item),1);
}
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
const items = storage.getItems();
 storage.getItems();
  //console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  storage.getItems(); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
    storage.removeItem('Пролонгер');
    storage.getItems();
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
