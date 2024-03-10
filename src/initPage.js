import './styles.css';
import home from './home';

function initPage() {
    // references
    const header = document.querySelector('header');
    const nav = header.querySelector('nav');
    const content = document.querySelector('#content');    
    // create nav buttons
    const homeBtn = document.createElement('button');
    homeBtn.id = '#home-btn';
    homeBtn.textContent = 'Home'
    //homeBtn.addEventListener('click', )
    const menuBtn = document.createElement('button');
    menuBtn.id = '#menu-btn';
    menuBtn.textContent = 'Menu'
    //menuBtn.addEventListener('click', )
    const aboutBtn = document.createElement('button');
    aboutBtn.id = '#about-btn';
    aboutBtn.textContent = 'About';
    nav.append(homeBtn, menuBtn, aboutBtn);
    //aboutBtn.addEventListener('click', )
    const navBtns = nav.querySelectorAll('button');
    navBtns.forEach(btn => {
        btn.classList.add('nav-button');        
    });
    header.appendChild(nav);
    
    home();
     
    
}

export default initPage;