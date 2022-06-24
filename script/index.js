import {fazLogin} from "./func.js"

let usuario = document.getElementById('user')
let senha = document.getElementById('psw')

const botao = document.querySelector('#btn-login')
botao.addEventListener('click', () => {
    fazLogin(usuario.value, senha.value)
})