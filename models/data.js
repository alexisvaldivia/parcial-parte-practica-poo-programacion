import User from './user.js'
import Account from './account.js'

const users = [
    new User('Pepe', '123'),
    new User('Roco', '321'),
    new User('Luca', '1234'),
]

users[0].addAccount(new Account(1200, users[0].username));
users[0].addAccount(new Account(5000, users[0].username));
users[1].addAccount(new Account(3000, users[1].username));
users[1].addAccount(new Account(3500, users[1].username));
users[2].addAccount(new Account(2000, users[2].username));
users[2].addAccount(new Account(5500, users[2].username));

export { users }