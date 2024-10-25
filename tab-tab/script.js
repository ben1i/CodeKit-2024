"use strict";

var buttonAll = document.querySelectorAll('.tab__btn');

for (let value of buttonAll) {
    value.addEventListener('click', selectTab);
}

function selectTab(event) {
    let tabAll = document.querySelectorAll('.tab__content');

    for (let value of tabAll) {
        value.classList.add('tab__content--hidden');
    }

    let tabId = event.currentTarget.getAttribute('data-tab');
    let currentTab = document.querySelector('#' + tabId);
    currentTab.classList.remove('tab__content--hidden');
}