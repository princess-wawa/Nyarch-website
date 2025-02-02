document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('download-btn');
    const dropdownContent = document.querySelector('.download .dropdown-content');
    const locations = document.querySelector('.locations');
    const nvidia = document.querySelector('.nvidia-options');
    const arrow = downloadBtn.querySelector('.arrow');

    function rotateArrow(degrees) {
        arrow.style.transform = `rotate(${degrees}deg)`;
    }
    rotateArrow(180);
    let isHovered = false;

    function showDropdown() {
        dropdownContent.style.opacity = '1';
        dropdownContent.style.visibility = 'visible';
        isHovered = true;
        rotateArrow(90); // Arrow points down
    }

    function hideDropdown() {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.visibility = 'hidden';
        isHovered = false;
        rotateArrow(180); // Arrow points left
    }

    function handleHover(event) {
        const isHoveringOverButton = downloadBtn.contains(event.target);
        const isHoveringOverDropdown = dropdownContent.contains(event.target);
        const isHoveringOverLocations = locations.contains(event.target);
        const isHoveringOverNvidia = nvidia.contains(event.target);

        if (isHoveringOverButton || isHoveringOverDropdown || isHoveringOverLocations || isHoveringOverNvidia) {
            if (!isHovered) showDropdown();
        } else {
            if (isHovered) hideDropdown();
        }
    }

    // Add event listener for hover detection on the document
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleHover);
});

document.addEventListener('DOMContentLoaded', function () {
    const serverBtn = document.querySelector('.our-servers');
    const dropdownContent = document.querySelector('.locations');

    let isHovered = false;

    function showDropdown() {
        dropdownContent.style.opacity = '1';
        dropdownContent.style.visibility = 'visible';
        isHovered = true;
    }

    function hideDropdown() {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.visibility = 'hidden';
        isHovered = false;
    }

    function handleHover(event) {
        const isHoveringOverButton = serverBtn.contains(event.target);
        const isHoveringOverDropdown = dropdownContent.contains(event.target);

        if (isHoveringOverButton || isHoveringOverDropdown) {
            if (!isHovered) showDropdown();
        } else {
            if (isHovered) hideDropdown();
        }
    }

    // Add event listener for hover detection on the document
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleHover);
});


document.addEventListener('DOMContentLoaded', function () {
    const nvidiaBtn = document.querySelector('.nvidia-version');
    const dropdownContent = document.querySelector('.nvidia-options');

    let isHovered = false;

    function showDropdown() {
        dropdownContent.style.opacity = '1';
        dropdownContent.style.visibility = 'visible';
        isHovered = true;
    }

    function hideDropdown() {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.visibility = 'hidden';
        isHovered = false;
    }

    function handleHover(event) {
        const isHoveringOverButton = nvidiaBtn.contains(event.target);
        const isHoveringOverDropdown = dropdownContent.contains(event.target);

        if (isHoveringOverButton || isHoveringOverDropdown) {
            if (!isHovered) showDropdown();
        } else {
            if (isHovered) hideDropdown();
        }
    }

    // Add event listener for hover detection on the document
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleHover);
});

/* go to the top of the screen */
window.onload = function() {
    window.scrollTo(0, 0);
};



// Select the button
const downloadBtn = document.getElementById('download-btn');

// Add hover event listener
downloadBtn.addEventListener('mouseenter', () => {
    window.scrollTo({
        top: window.innerHeight * 1.5, // 150vh 
        behavior: 'smooth'
    });
});



const header = document.getElementById('header');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
    // Get the scroll distance
    const scrollY = Math.min(750, window.scrollY); // Cap the scroll value at 256
    const alpha = scrollY / 750; // Alpha increases with scroll

    // Set the background color of the header
    header.style.backgroundColor = `rgba(33, 33, 33, ${alpha})`;
});
