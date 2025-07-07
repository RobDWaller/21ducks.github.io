document.addEventListener('DOMContentLoaded', () => {
    const closePopupBtn = document.getElementById('closePopup');
    const popupOverlay = document.getElementById('popupOverlay');

    // Function to show the pop-up
    function showPopup() {
        popupOverlay.classList.remove('hidden');
    }

    // Function to hide the pop-up
    function hidePopup() {
        popupOverlay.classList.add('hidden');
    }

    // Event listener for closing the pop-up
    closePopupBtn.addEventListener('click', hidePopup);

    // Optional: Close pop-up if user clicks outside the content
    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            hidePopup();
        }
    });

    // Optional: Close pop-up if user presses the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !popupOverlay.classList.contains('hidden')) {
            hidePopup();
        }
    });

    showPopup();
});
