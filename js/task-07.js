const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

input.addEventListener('input', changeText)

function changeText() {

    text.style.fontSize  = event.currentTarget.value +"px"

    console.log(text.style.fontSize);
}