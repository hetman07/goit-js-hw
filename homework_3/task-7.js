'use strict';

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