'use strict';

export function toggleMenu() {
    var menu = document.getElementById('menu');
       
    if (menu.classList.contains('menu--on')) {
        menu.classList.remove('menu--on');
    } else {
        menu.classList.add('menu--on');
    }
}
