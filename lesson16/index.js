const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', (e) => {
    e.preventDefault();
    if (headerMenu.style.visibility === 'hidden') {
        headerMenu.style.visibility = 'visible';
        headerMenu.style.opacity = '1';
    } else {
        headerMenu.style.visibility = 'hidden';
        headerMenu.style.opacity = '0';
    }
});