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