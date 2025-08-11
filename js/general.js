window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.highlight');
    const triggerPoint = window.innerHeight * 0.8;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerPoint) {
            el.classList.add('in-view');
        } else if (rect.top > window.innerHeight) {
            el.classList.remove('in-view');
        }
    });
});