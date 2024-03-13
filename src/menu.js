import './styles.css';

function addToMenu(header, array) {
    // add header
    let placement = document.querySelector('.menu');
    const heading = document.createElement('h1');
    heading.textContent = header;
    placement.appendChild(heading);

    // create list of items
    for (let i = 0; i < array.length; i++) {  
        // create item: name, price & description)
        let item = document.createElement('div');
        item.classList.add('menu-item');
        let itemRow1 = document.createElement('div');
        itemRow1.classList.add('name-and-price');
        let itemRow2 = document.createElement('div');
        itemRow2.classList.add('description');
        let name = document.createElement('h3');
        name.textContent = array[i]["name"];
        let price = document.createElement('h4');
        price.textContent = array[i]["price"] + "€";
        let description = document.createElement('h5');
        description.textContent = array[i]["description"];
        // append item to menu
        itemRow1.append(name, price);
        itemRow2.appendChild(description);
        item.append(itemRow1, itemRow2);        
        placement.appendChild(item);
    }
}

let foodMenu = [
    {
        "name": "Burger-meal",
        "price": "12",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
        "name": "Spaghetti",
        "price": "10",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
        "name": "Steak",
        "price": "25",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
    },
    {
        "name": "Pizza",
        "price": "15",
        "description": "Lorem ipsum dolor sit amet, consectetur."
    }
];

let drinkMenu = [
    {
        "name": "Soda",
        "price": "2",
        "description": "Lorem ipsum dolor"
    },
    {
        "name": "Beer",
        "price": "4",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
        "name": "Wine",
        "price": "6",
        "description": "Lorem ipsum dolor sit amet."
    }
];

let dessertMenu = [
    {
        "name": "Cupcakes",
        "price": "3",
        "description": "Lorem ipsum dolor"
    },
    {
        "name": "Pancakes",
        "price": "5",
        "description": "Lorem ipsum dolor sit amet."
    },
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

    // add items to menu
    addToMenu("Food", foodMenu);
    addToMenu("Desserts", dessertMenu);
    addToMenu("Drinks", drinkMenu);

}

export default menuTab;