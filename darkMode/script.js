"use strict";

var btnTheme = document.querySelector('.btn--darkMode');

btnTheme.addEventListener('click', themeSelect);

function themeSelect() {
    var currentMode = document.body.getAttribute("data-theme");
    var systemThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if((!currentMode && systemThemeDark) || currentMode == "dark") {
        document.body.setAttribute('data-theme', "light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}

var activeTheme = localStorage.getItem("theme");
if(activeTheme) {
    document.body.setAttribute("data-theme", activeTheme);
}