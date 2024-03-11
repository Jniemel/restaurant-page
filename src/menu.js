import './styles.css';

let foodMenu = [
    {
        "name": "Burger-meal",
        "price": "12",
    },
    {
        "name": "Spaghetti",
        "price": "10",
    },
    {
        "name": "pancakes",
        "price": "5",
    }
];

let drinkMenu = [
    {
        "name": "Cola",
        "price": "2",
    },
    {
        "name": "Beer",
        "price": "4",
    },
    {
        "name": "Wine",
        "price": "6",
    }
];

function menuTab() {
    // references
    const content = document.querySelector('#content');
    const toClear = content.querySelectorAll('div');

    // clear content
    toClear.forEach(div => {
        div.remove();
    });

    // create menu-container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    content.appendChild(menuContainer);

    // add food items to menu
    const headingFood = document.createElement('h1');
    headingFood.textContent = "Food";
    menuContainer.appendChild(headingFood);
    for (let i = 0; i < foodMenu.length; i++) {
        const foodItem = document.createElement('div');
        foodItem.classList.add('menu-item');
        const foodName = document.createElement('h3');
        foodName.textContent = foodMenu[i]["name"];
        const foodPrice = document.createElement('h4');
        foodPrice.textContent = foodMenu[i]["price"] + "€";
        foodItem.append(foodName, foodPrice);
        menuContainer.appendChild(foodItem);
    }
    // add drink items to menu
    const headingDrinks = document.createElement('h1');
    headingDrinks.textContent = "Drinks";
    menuContainer.appendChild(headingDrinks);
    for (let j = 0; j < drinkMenu.length; j++) {
        const drinkItem = document.createElement('div');
        drinkItem.classList.add('menu-item');
        const drinkName = document.createElement('h3');
        drinkName.textContent = drinkMenu[j]["name"];
        const drinkPrice = document.createElement('h4');
        drinkPrice.textContent = drinkMenu[j]["price"] + "€";
        drinkItem.append(drinkName, drinkPrice);
        menuContainer.appendChild(drinkItem);
    }
}

export default menuTab;