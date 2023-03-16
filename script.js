const password = document.querySelector('.password');
const mostrar = document.querySelector('#show');
const ocultar = document.querySelector('#hide')

function eyeclick() {
    let inputTypeIsPasseord = password.type == "password"

    if (inputTypeIsPasseord) {
        showPassword()
    } else{
        hidePassword()
    }
}

function showPassword() {
    password.setAttribute("type", "text")
    ocultar.style.display = 'inline'
}

function hidePassword() {
    password.setAttribute("type", "password")
    ocultar.style.display = 'none'
}
