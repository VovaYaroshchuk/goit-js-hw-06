const inputEmail = document.querySelector('[name="email"]')
const inputPass = document.querySelector('[name="password"]')
const inputForm = document.querySelector('.login-form')

inputForm.addEventListener('submit', formSubit)

function formSubit(event) {
    event.preventDefault()
    if (inputEmail.value === '' || inputPass.value === '')
    {alert('Увага! Всі поля повинні бути заповнені')}
    else {
        const email = event.currentTarget.elements.email.value;
        const pass = event.currentTarget.elements.password.value;
        console.log({email, pass});

        event.currentTarget.reset()
    }
}