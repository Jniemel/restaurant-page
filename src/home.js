import './styles.css';
import burger from './burger.jpg';
import spaghetti from './spaghetti.jpg';
import pancakes from './pancakes.jpg';

// lorem ipsum text
const lorem = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

function homeTab() {

    // create container 1    
    const container1 = document.createElement('div');
    container1.classList.add('content-container');

    // add text + img
    const burgerImg = new Image();
    burgerImg.src = burger;
    const burgerTxt = document.createElement('div');
    burgerTxt.textContent = lorem;

    // append contents to container
    container1.append(burgerTxt, burgerImg);

    // do the same for container2 & 3
    const container2 = document.createElement('div');
    container2.classList.add('content-container');
    const spaghettiImg = new Image();
    spaghettiImg.src = spaghetti;
    const spaghettiTxt= document.createElement('div');
    spaghettiTxt.textContent = lorem;
    container2.append(spaghettiImg, spaghettiTxt);

    const container3 = document.createElement('div');
    container3.classList.add('content-container');
    const pancakesImg = new Image();
    pancakesImg.src = pancakes;
    const pancakesTxt= document.createElement('div');
    pancakesTxt.textContent = lorem;
    container3.append(pancakesTxt, pancakesImg);

    // append containers to #content
    const content = document.querySelector('#content');
    content.append(container1, container2, container3);
}

export default homeTab;