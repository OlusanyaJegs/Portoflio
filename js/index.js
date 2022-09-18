// variables assigned to IDs in the html file
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// validats if the constraint exists 
// condition to Show Menu 
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// condition to Hide Menu 
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// remove menu on the mobile view
const navLink = document.querySelectorAll('.nav__link');
// function to remove the show menu on mobile view
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // show menu is hidden/removed at the click of every nav-link
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));