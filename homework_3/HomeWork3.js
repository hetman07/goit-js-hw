'use strict';
//===============03-01================//
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }
//===============03-02================//
// const countProps = function (obj) {
//     // твой код
//     const keys = Object.keys(obj);
//     const total = keys.length;
//     return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({
//     name: 'Mango',
//     age: 2
// })); // 2

// console.log(countProps({
//     mail: 'poly@mail.com',
//     isOnline: true,
//     score: 500,
// })); // 3
//===============03-03================//
// const findBestEmployee = function (employees) {
//     let name;

//     const keys = Object.keys(employees);
//     const values = Object.values(employees);
//     let max = Math.max(...values);
//     for (const key of keys) {
//         if (max === employees[key]) {
//             name = key;
//         }
//     }
//     return name;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence

// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux
//===============03-04================//
// const countTotalSalary = function(employees) {
//   const values = Object.values(employees);
//   let total = 0;
//   for (const value of values) {
//     total = total + value;
//   }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
//===============03-05================//
// const products = [{
//         name: 'Радар',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Сканер',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Дроид',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Захват',
//         price: 1200,
//         quantity: 2
//     },
// ];

// const getAllPropValues = function (arr, prop) {
//     const newArr = [];
//     for (const element of arr) {
//         if (prop in element) {
//             newArr.push(element[prop]);
//         }
//     }
//     return newArr;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
//===============03-06================//
// const products = [{
//         name: 'Радар',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Сканер',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Дроид',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Захват',
//         price: 1200,
//         quantity: 2
//     },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//     // твой код
//     let sum = 0;
//     debugger;
//     for (const name of products) {
//         if (productName === name.name) {
//             sum = name.price * name.quantity;
//         }
//     }
//     return sum;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
//===============03-07================//
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [{
            id: '1dfdserf35546fgdta',
            amount: 100,
            type: 'deposit',
        },
        {
            id: 'dggdsfdsefdfjhfshfgb',
            amount: 700,
            type: 'deposit',
        },
    ],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        let id =
            Math.random()
            .toString(36)
            .substring(2, 15) +
            Math.random()
            .toString(36)
            .substring(2, 15);
        this.transactions.push({
            id,
            amount,
            type,
        });
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.createTransaction(amount, Transaction.DEPOSIT);
        let total = 0;
        for (const value of this.transactions) {
            total += value.amount;
        }
        return (this.balance = total);
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        this.createTransaction(amount, Transaction.WITHDRAW);
        let total = 0;
        for (const value of this.transactions) {
            if (amount > this.balance) {
                alert(`Снятие суммы ${amount} не возможно, недостаточно средств.`);
                break;
            }
            total = this.balance - value.amount;
        }
        return (this.balance = total);
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (let i = 0; i < this.transactions.length; i += 1) {
            const transaction = this.transactions[i];

            if ((transaction.id === id)) {
                return transaction;
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;

        for (const value of this.transactions) {

            if (value.type === type) {
                total += value.amount;
            }
        }
        return total;

    },
};

// account.createTransaction(100, 'withdraw');
// account.createTransaction(300, 'deposit');
// console.table(account.transactions);

account.deposit(6000);
console.table(account.transactions);
console.log(account.getBalance());

account.withdraw(6000);
console.table(account.transactions);

console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getBalance());

console.table(account.getTransactionDetails('1dfdserf35546fgdta'));