import './styles.css';
import burger from './burger.jpg';
import spaghetti from './spaghetti.jpg';
import pancakes from './pancakes.jpg';

function homeTab() {
    // clear content
    const content = document.querySelector('#content');
    const toClear = content.querySelectorAll('div');
    if (toClear.length > 0) {        
        toClear.forEach(div => {
            div.remove();
        });
    }

    // create container 1    
    const container1 = document.createElement('div');
    container1.classList.add('content-container');

    // add text + img
    const burgerImg = new Image();
    burgerImg.src = burger;
    const burgerTxt = document.createElement('div');
    burgerTxt.textContent = "Here is a picture of a burger-meal. This text would describe how great of a meal it is. The patty is surely 100% beef. Maybe. The fries are there too. There is no ketchup in the cup. Sad. Then some more text, and more, and more... Until there is no more text. But this is not that point yet. One more row, and we are done with this one. Here it is.";

    // append contents to container
    container1.append(burgerTxt, burgerImg);

    // do the same for container2 & 3
    const container2 = document.createElement('div');
    container2.classList.add('content-container');
    const spaghettiImg = new Image();
    spaghettiImg.src = spaghetti;
    const spaghettiTxt= document.createElement('div');
    spaghettiTxt.textContent = 'Here is another picture of food. Nice. Then there is yet another filler text right here, followed by even more filler. Then, a quote from a customer: "Here, there would exist a very real review of the food".';
    container2.append(spaghettiImg, spaghettiTxt);

    const container3 = document.createElement('div');
    container3.classList.add('content-container');
    const pancakesImg = new Image();
    pancakesImg.src = pancakes;
    const pancakesTxt= document.createElement('div');
    pancakesTxt.textContent = "Lastly, let us add some lorem ipsum: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut."
    container3.append(pancakesTxt, pancakesImg);

    // append containers to #content    
    content.append(container1, container2, container3);
}

export default homeTab;