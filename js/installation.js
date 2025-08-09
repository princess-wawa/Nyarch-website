const galleryImgs = Array.from(document.querySelectorAll('.installation-gallery .installation-img'));
let currentIdx = 2;
let autoSwitch = true;
let autoSwitchInterval;

function updateGallery() {
    galleryImgs.forEach((img, idx) => {
        img.classList.remove('prev-prev', 'prev', 'current', 'next', 'next-next');
        if (idx === currentIdx) {
            img.classList.add('current');
        } else if (idx === (currentIdx - 1 + galleryImgs.length) % galleryImgs.length) {
            img.classList.add('prev');
        } else if (idx === (currentIdx + 1) % galleryImgs.length) {
            img.classList.add('next');
        } else if (idx === (currentIdx - 2 + galleryImgs.length) % galleryImgs.length) {
            img.classList.add('prev-prev');
        } else if (idx === (currentIdx + 2) % galleryImgs.length) {
            img.classList.add('next-next');
        }
    });
}

function nextImage() {
    currentIdx = (currentIdx + 1) % galleryImgs.length;
    updateGallery();
}

function stopAutoSwitch() {
    if (autoSwitch) {
        autoSwitch = false;
        clearInterval(autoSwitchInterval);
    }
}

document.querySelector('.installation-btn.installation-left-btn').addEventListener('click', () => {
    currentIdx = (currentIdx - 1 + galleryImgs.length) % galleryImgs.length;
    updateGallery();
    stopAutoSwitch();
});
document.querySelector('.installation-btn.installation-right-btn').addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % galleryImgs.length;
    updateGallery();
    stopAutoSwitch();
});

// Optional: allow arrow keys
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
        currentIdx = (currentIdx - 1 + galleryImgs.length) % galleryImgs.length;
        updateGallery();
        stopAutoSwitch();
    } else if (e.key === 'ArrowRight') {
        currentIdx = (currentIdx + 1) % galleryImgs.length;
        updateGallery();
        stopAutoSwitch();
    }
});

updateGallery();

// Start auto-switching
autoSwitchInterval = setInterval(() => {
    if (autoSwitch) {
        nextImage();
    }
}, 2000);