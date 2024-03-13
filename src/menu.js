import './styles.css';
import menu from './menu.JSON';

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
    addToMenu("Food", menu.food);    
    addToMenu("Desserts", menu.desserts);
    addToMenu("Drinks", menu.drinks);
}

export default menuTab;