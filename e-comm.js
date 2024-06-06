let loginForm = document.getElementById('login-form');
let signupForm = document.getElementById('signup-form');

document.getElementById('login').onclick = () => {
    loginForm.classList.toggle('active');
    signupForm.classList.remove('active');
}

document.getElementById('signin').onclick = () => {
    signupForm.classList.toggle('active');
    loginForm.classList.remove('active');
}

document.querySelectorAll('.toggleForm').forEach(item => {
    item.onclick = () => {
        loginForm.classList.toggle('active');
        signupForm.classList.toggle('active');
    }
});
