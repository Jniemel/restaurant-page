import "./styles.css";
import init from './initPage';
import home from './home';
import menu from './menu';

init();

// Add event listeners to nav-buttons
const homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', home)

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', menu);
