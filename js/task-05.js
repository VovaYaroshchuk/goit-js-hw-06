
const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

function newInput() {
   
    span.textContent = input.value;

    if (input.value === "") {
        span.textContent = 'Anonymous'
    }
}


input.addEventListener('input', newInput)
  