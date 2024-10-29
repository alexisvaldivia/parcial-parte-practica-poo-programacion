export default class User {
    username;
    password;
    accounts;

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.accounts = [];
    }

    addAccount(account) {
        this.accounts.push(account);
    }
}