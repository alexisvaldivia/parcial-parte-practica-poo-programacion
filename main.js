console.log('JS Cargado');

import { users } from "./models/data.js";

const $ = el => document.querySelector('#' + el);

const singInForm = $('sing-in-form');

const usernameFormInput = $('username');
const passwordFormInput = $('password');

singInForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let userForm = usernameFormInput.value;
    let passwordForm = passwordFormInput.value;

    if (userForm.length && passwordForm.length > 0) {

        users.forEach(user => {
            if (user.username === userForm && user.password === passwordForm) {
                localStorage.setItem('username', userForm);
                localStorage.setItem('password', passwordForm);
                window.location.href = './pages/trans.html';
                return
            }
        })
    } else {
        alert('Usuario y constraseña requeridas');
    }
})