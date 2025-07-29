export function removeAllIframes() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.remove();
    });
    console.log(`Removed ${iframes.length} iframe(s) from the page`);
}