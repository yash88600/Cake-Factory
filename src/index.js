import './style.css';
import { contactPage } from './contact';
import { CoverImage, MainMessage,  About, Samples, footerPage} from './home';
import { menuPage } from './menu';

const a = document.querySelector('.container');



function NavBar()
{
    const navbar = document.createElement('div');
    navbar.setAttribute("id", "nav");

    const name = document.createElement('div');
    name.setAttribute("id", "name");
    name.textContent = "Cake Factory";

    const options = document.createElement('div');
    options.setAttribute("id", "options");

    const home = document.createElement('button');
    home.setAttribute("id", "home");
    home.textContent = 'Home';
    const menu = document.createElement('button');
    menu.setAttribute("id", "menu");
    menu.textContent = 'Menu';
    const contact = document.createElement('button');
    contact.setAttribute("id", "contact");
    contact.textContent = 'Contact';

    options.appendChild(home);
    options.appendChild(menu);
    options.appendChild(contact);

    navbar.appendChild(name);
    navbar.appendChild(options);

    home.addEventListener('click',homepage);
    contact.addEventListener('click',contactpage);
    menu.addEventListener('click',menupage);
    return navbar;
}


a.appendChild(NavBar());
a.appendChild(CoverImage());
a.appendChild(MainMessage());
a.appendChild(About());
a.appendChild(Samples());
a.appendChild(footerPage());

function homepage()
{
    removeAllChildNodes(a);
    a.appendChild(NavBar());
    a.appendChild(CoverImage());
    a.appendChild(MainMessage());
    a.appendChild(About());
    a.appendChild(Samples());
    a.appendChild(footerPage());
}


function contactpage()
{
    removeAllChildNodes(a);
    a.appendChild(NavBar());
    a.appendChild(contactPage());
    a.appendChild(footerPage());
}

function menupage()
{
    removeAllChildNodes(a);
    a.appendChild(NavBar());
    a.appendChild(menuPage());
    a.appendChild(footerPage());
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}