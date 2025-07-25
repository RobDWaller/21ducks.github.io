'use strict';

import { toggleMenu } from './menu.js';
import { initPopup } from './popup.js';

window.onload = function() {
    document.getElementById('hamburger').addEventListener('click', function(e) {
       e.preventDefault();

       toggleMenu();
    });

    if (document.getElementById('popup').value === 'on') {
        initPopup();
    }
}