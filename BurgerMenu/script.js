"use strict";

var menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener('click', openMenu);

function openMenu() {
    var menu = document.querySelector('.menu');

    menu.classList.toggle('menu--open');
}