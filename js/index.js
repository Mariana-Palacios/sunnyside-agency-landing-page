const links = document.querySelector('.links');
const nav__burger = document.querySelector('.nav__burger');
const top__text__title = document.querySelector('.top__text--title');

function myFunc() {
    links.classList.toggle("is-active");
    nav__burger.classList.toggle("is-active");
    top__text__title.classList.toggle("is-active");
    console.log('funciono');
}