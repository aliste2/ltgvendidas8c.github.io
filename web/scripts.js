document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.filter = 'brightness(0)';
    } else {
        document.body.style.filter = 'brightness(1)';
    }
});
