const password = document.querySelector('.password');
const showBtn = document.querySelector('#show');
const hideBtn = document.querySelector('#hide');

function togglePassword() {
    const isPassword = password.type === "password";
    password.type = isPassword ? "text" : "password";
    hideBtn.style.display = isPassword ? "inline" : "none";
}

// Event Listener for Show Button
showBtn.addEventListener('click', togglePassword);
// Event Listener for Hide Button
hideBtn.addEventListener('click', togglePassword);
