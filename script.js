const loginForm = document.getElementById('login-form');
const resetBtn = document.getElementById('reset-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const correctUsername = 'xyz';
const correctPassword = '1234';

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) 
    {
    window.location.href = 'stream.html';
    } 
    else 
    {
        alert('Invalid username or password');
    }
});

resetBtn.addEventListener('click', () => {
    alert('Password reset functionality goes here.');
});