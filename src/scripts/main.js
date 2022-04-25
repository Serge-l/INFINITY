//===================================SLIDER========================================

let offset = 0;

const sliderLine = document.querySelector('.slider-line');
const btnPrev = document.querySelector('.btn-prev');
const btnNxt = document.querySelector('.btn-next');


btnNxt.addEventListener('click', () => {
    offset += 174;

    if (offset > 348) {
        offset = 0;
    }

    sliderLine.style.left = -offset + 'px';


})

btnPrev.addEventListener('click', () => {
    offset -= 174;

    if (offset < 0) {
        offset = 348;
    }

    sliderLine.style.left = -offset + 'px';
})


//==========================================DROPDOWN================================


const dropper = document.querySelector('.last');
const menu = document.querySelector('.drops');


dropper.addEventListener('click', () => {

    if (menu.classList.contains('drops--active')) {
        menu.classList.remove('drops--active')
    } else {
        menu.classList.add('drops--active')
    }

})

//========================================SIDE PANNEL======================================

const cart = document.querySelector('.cart-menu');
const commerce = document.querySelector('.section-hero-first__commerce-card');
const cross = document.querySelector('.cross');


commerce.addEventListener('click',(e) => {
    if(e.target.classList.contains('cross')) {
        e.target.closest('.commerce-card--active').remove();
    } 
})

cart.addEventListener('click', () => {
    if (commerce.classList.contains('commerce-card--active')) {
        commerce.classList.remove('commerce-card--active')
    } else {
        commerce.classList.add('commerce-card--active')
    }

})





