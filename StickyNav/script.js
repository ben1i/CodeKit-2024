"use strict";

var elderScroll = 0;
var menu = document.querySelector('.menu');

window.addEventListener('scroll', scrollListener);

function scrollListener() {

    if(elderScroll > window.scrollY) {
        menu.classList.remove('menu--close');
    } else {
        menu.classList.add('menu--close');
    }

    elderScroll = window.scrollY;
}