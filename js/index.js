const para = document.getElementById('#btn__burger');
const links = document.querySelector('.links');
const nav__burger = document.querySelector('.nav__burger')

function myFunc() {
    links.classList.toggle("is-active");
    nav__burger.classList.toggle("is-active");
    console.log('funciono')
}