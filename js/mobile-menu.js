const button = document.getElementById('menu-button');
const menu = document.getElementById('mobile-menu');
const anchors = menu.getElementsByTagName('a');
const about = document.getElementById('about');
const awards = document.getElementById('awards');
const projects = document.getElementById('projects');
const contacts = document.getElementById('contacts');

button.addEventListener('click', toggleMenu);
Array.from(anchors).forEach((a) => {
    a.addEventListener('click', toggleMenu);
})

function toggleMenu() {
    button.classList.toggle('opened');
    menu.classList.toggle('hidden');
    about.classList.toggle('hidden');
    awards.classList.toggle('hidden');
    projects.classList.toggle('hidden');
    contacts.classList.toggle('hidden');
}