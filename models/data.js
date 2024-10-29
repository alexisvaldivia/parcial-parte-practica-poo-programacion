import User from './user.js'
import Account from './account.js'

const users = [
    new User('Pepe', '123'),
    new User('Roco', '321'),
    new User('Luca', '1234'),
]

const accounts = [
    new Account(1200, users[0].username),
    new Account(5000, users[0].username),
    new Account(3000, users[1].username),
    new Account(3500, users[1].username),
    new Account(2000, users[2].username),
    new Account(5500, users[2].username),
]

users[0].addAccount(accounts[0])
users[0].addAccount(accounts[1])
users[1].addAccount(accounts[2])
users[1].addAccount(accounts[3])
users[2].addAccount(accounts[4])
users[2].addAccount(accounts[5])

export { users, accounts }