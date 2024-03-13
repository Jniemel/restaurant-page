import './styles.css';
import home from './home';
import menu from './menu';
import about from './about';

function initPage() {
    // references
    const header = document.querySelector('header');
    const nav = header.querySelector('nav');
    const content = document.querySelector('#content');
    
    // create nav buttons
    const homeBtn = document.createElement('button');
    homeBtn.id = 'home-btn';
    homeBtn.textContent = 'HOME' 
    homeBtn.addEventListener('click', home)   

    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu-btn';
    menuBtn.textContent = 'MENU'
    menuBtn.addEventListener('click', menu);    

    const aboutBtn = document.createElement('button');
    aboutBtn.id = 'about-btn';
    aboutBtn.textContent = 'ABOUT';
    aboutBtn.addEventListener('click', about);

    // append buttons to nav
    nav.append(homeBtn, menuBtn, aboutBtn);    

    // add class to nav buttons
    const navBtns = nav.querySelectorAll('button');
    navBtns.forEach(btn => {
        btn.classList.add('nav-button');        
    });    
    
    // append nav
    header.appendChild(nav);
        
    // init home-tab as default 
    home();    
}

export default initPage;