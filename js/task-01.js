// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const listItems = document.querySelectorAll('.item');
console.log(`Число категорій: ${listItems.length}` );

// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

listItems.forEach((item) => {
    console.log(`Категорія: ${item.firstElementChild.textContent}`);
    console.log(`Кількість елеиентів: ${item.lastElementChild.children.length}`);
  });