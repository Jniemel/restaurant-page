import './styles.css';
const lorem = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

function initPage() {
    // references
    const header = document.querySelector('header');
    const nav = header.querySelector('nav');
    const content = document.querySelector('#content');    
    // create nav buttons
    const homeBtn = document.createElement('button');
    homeBtn.id = '#home-btn';
    homeBtn.textContent = 'Home'
    const menuBtn = document.createElement('button');
    menuBtn.id = '#menu-btn';
    menuBtn.textContent = 'Menu'
    const aboutBtn = document.createElement('button');
    aboutBtn.id = '#about-btn';
    aboutBtn.textContent = 'About';
    nav.append(homeBtn, menuBtn, aboutBtn);    
    const navBtns = nav.querySelectorAll('button');
    navBtns.forEach(btn => {
        btn.classList.add('nav-button');        
    });
    header.appendChild(nav);
}

export default initPage;