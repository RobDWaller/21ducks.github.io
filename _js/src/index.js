'use strict';

import { toggleMenu } from './menu.js';
import { initPopup } from './popup.js';
import * as CookieConsent from 'vanilla-cookieconsent';
import { removeAllIframes } from './iframes.js';

window.onload = function() {
    document.getElementById('hamburger').addEventListener('click', function(e) {
       e.preventDefault();

       toggleMenu();
    });

    if (document.getElementById('popup').value === 'on') {
        initPopup();
    }

    CookieConsent.run({
        categories: {
            necessary: {
                enabled: true,  // this category is enabled by default
                readOnly: true  // this category cannot be disabled
            },
            analytics: {}
        },
        language: {
            default: 'en',
            translations: {
                en: {
                    consentModal: {
                        title: 'We use cookies',
                        description: 'This site has some third-party integrations which may use cookies, select' +
                        ' "Reject all" to disable these integrations.',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Reject all'
                    },          
                }
            }
        },
        onConsent: () => {
            if (CookieConsent.getUserPreferences().acceptType === 'necessary') {
                removeAllIframes();
            }
        },
        onChange: () => {
            if (CookieConsent.getUserPreferences().acceptType === 'necessary') {
                removeAllIframes();
            } 
        }
    });
}
