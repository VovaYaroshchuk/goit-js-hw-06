const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");

const ingredientList = document.createElement('li')
for (const ingredient of ingredients) {
  const ingredientList = document.createElement('li');
 ingredientList.textContent = ingredient;
 ingredientList.classList.add('item');
 ingredientsListEl.appendChild(ingredientList, ingredientsListEl.firstElementChild)
  }
 
