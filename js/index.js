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

// services section functionality
// variable assigned to the services modal in the html
const modalViews = document.querySelectorAll('.services__modal');
// variable assigned to the services button in the html
const modalBtns = document.querySelectorAll('.services__button');
// variable assigned to the services modal close button in the html
const modalCloses = document.querySelectorAll('.services__modal-close');

// function to target the modal sections when clicked
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

// iterate through every modal to activate click
modalBtns.forEach((modalBtn, i) => {
    // add an eventlistener of click
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

// iterate through every modal to activate close
modalCloses.forEach((modalClose) => {
    // add an eventlistener of click
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

// Portfolio swiper
var swiper = new Swiper('.mySwiper', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
});

// scroll selections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

// change background header
function scrollHeader() {
    const nav = document.getElementById('header');
    // when the scroll is greater than 80 viewport height, add teh scroll header class
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// show scroll up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is greater than 200 viewport height, add teh scroll header class
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// dark light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
// validate if the user previously chose a topic
if (selectedTheme) {
    //conditon to check if the validation is fulfilled
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme); 
}
// activate or deactivate the theme manaually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // we svae the theme and the current icon that the user choice
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})