import { showMessage } from "./popup";

export function removeAllIframes() {
    const iframes = document.querySelectorAll('iframe');
    if (iframes.length > 0) {
        iframes.forEach(iframe => {
            if (iframe.dataset.signupForm === 'true') {
                showMessage('The sign up form on this page has been disabled due to cookie preferences. You can amend '+
                'your cookie preferences in the footer of this page and then reload the page.');
            }

            iframe.remove();
        });
    }
}
