document.querySelectorAll('.app-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        document.querySelectorAll('.app-details').forEach(d => d.style.display = 'none');
        const appNum = this.getAttribute('data-app');
        const details = document.getElementById('app-details-' + appNum);
        if (details) details.style.display = 'block';
    });
});
// Show first app by default
document.querySelector('.app-icon').dispatchEvent(new Event('mouseenter'));