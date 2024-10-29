export default class Account {
    static idAccount = 0
    #balance; #owner; #id;

    constructor(balance, owner) {
        Account.idAccount++;
        this.#id = Account.idAccount;
        this.#balance = balance;
        this.#owner = owner;
    }

    getId() {
        return this.#id;
    }

    getBalance() {
        return this.#balance;
    }

    transfer(amount) {
        amount <= this.#balance ? this.#balance -= amount : alert('Saldo insuficiente.')
    }

    deposit(amount) {
        amount > 0 ? this.#balance += amount : alert('No se puede depositar valores negativos.');
    }

    getAccInfo() {
        return `Dueño de la cuenta: ${this.#owner} Saldo: ${this.#balance}`
    }
}