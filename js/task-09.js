function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const background = document.querySelector('body')
const colorText = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color')

changeColorBtn.addEventListener('click' , changeColor)

function changeColor() {
  colorText.textContent = getRandomHexColor()
  background.style.background = `${getRandomHexColor()}`

}

console.log(getRandomHexColor());