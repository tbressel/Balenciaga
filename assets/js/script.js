const ELEMENT__burger = document.querySelector(".menu-burger");

ELEMENT__burger.addEventListener('click', () => {
    console.warn('on entre dans la fonction')

    document.querySelector("nav ul").classList.toggle("on");
    document.querySelector("nav ").classList.toggle("on");
    
let ELEMENT__line = document.querySelector(".burger-line1").classList.toggle("croix1");
 ELEMENT__line = document.querySelector(".burger-line2").classList.toggle("croix2");
 ELEMENT__line = document.querySelector(".burger-line3").classList.toggle("croix3");


})