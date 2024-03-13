import './styles.css';
import egg from './egg.jpg';

function aboutTab() {

        // references
        const content = document.querySelector('#content');
        const toClear = content.querySelectorAll('div');
    
        // clear content
        toClear.forEach(div => {
            div.remove();
        });
    
        // create about-container
        const aboutContainer = document.createElement('div');
        aboutContainer.id = "about";
        aboutContainer.classList.add('content-container');
        content.appendChild(aboutContainer);

        // about
        const aboutTxt = document.createElement('div');        
        aboutTxt.textContent = "A very passionate text about food: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem";
        const aboutImg = new Image();
        aboutImg.src = egg;
        aboutContainer.append(aboutTxt, aboutImg);
        
        // create contact-container
        const contactContainer = document.createElement('div');
        contactContainer.id = "contact";
        contactContainer.classList.add('content-container');
        content.appendChild(contactContainer);

        // contact info
        const addrHeader = document.createElement('h2');
        addrHeader.textContent = "Address:";
        const addr = document.createElement('h1');
        addr.textContent = "Lorem road 55, Ipsum City, Dolor";
        const phoneHeader = document.createElement('h2');
        phoneHeader.textContent = "Phone:"
        const phone = document.createElement('h1');
        phone.textContent = "987 6543 210";
        const openHeader = document.createElement('h2');
        openHeader.textContent = "Open:";
        const monThu = document.createElement('h1');
        monThu.textContent = "Monday - Thursday: 09 - 20";
        const friSun = document.createElement('h1');
        friSun.textContent = "Friday - Sunday: 12 - 24";
        contactContainer.append(addrHeader, addr, phoneHeader, phone, openHeader, monThu, friSun);       

}

export default aboutTab;