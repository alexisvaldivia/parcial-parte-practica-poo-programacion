import { users } from "../models/data.js";

function $(el) {
    return document.getElementById(el);
}

const userLogged = localStorage.getItem('username');
const user = users.find(el => el.username === userLogged);

const greetingUser = $('greeting-user');
const transForm = $('trans-form');
const originAcc = $('origin-account');
const destinationAcc = $('destination-account');
const amountToTransfer = $('amount-to-transfer');

greetingUser.textContent = `Bienvenido ${userLogged}`;

// Fragment para el select de la cuenta de origen
const fOriginAccount = document.createDocumentFragment();

user.accounts.forEach(acc => {
    let option = document.createElement('option');
    option.textContent = acc.getAccInfo();
    option.value = acc.getId();
    fOriginAccount.appendChild(option);
});

originAcc.appendChild(fOriginAccount);

transForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!destinationAcc.value || !amountToTransfer.value || !originAcc.value) {
        return alert('Campos vacíos');
    }

    const amount = parseFloat(amountToTransfer.value);

    // Validación de importe positivo
    if (amount <= 0) {
        return alert('El monot debe ser mayor que 0');
    }

    // Encontrar la cuenta de origen del usuario logueado
    const originAccount = user.accounts.find(acc => acc.getId() === parseInt(originAcc.value));
    if (!originAccount) {
        return alert('Esta cuenta no te pertenece');
    }

    // Encontrar el usuario y la cuenta de destino
    const userToTransfer = users.find(el => el.username === destinationAcc.value);
    if (!userToTransfer) {
        return alert('La cuenta no existe');
    }

    // Evitar transferencia a la misma cuenta
    const destinationAccount = userToTransfer.accounts[0];
    if (originAccount.getId() === destinationAccount.getId()) {
        return alert('No puede transferir ya que la cuenta origen y destino son la misma');
    }

    // Realizar transferencia
    originAccount.transfer(amount);
    destinationAccount.deposit(amount);

    alert('Transferencia realizada con éxito');
});
