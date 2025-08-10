function showDropdown(dropdown) {
    dropdown.style.opacity = '1';
    dropdown.style.visibility = 'visible';
    return true;
}

function hideDropdown(dropdown) {
    dropdown.style.opacity = '0';
    dropdown.style.visibility = 'hidden';
    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    const serverBtn = document.querySelector('.our-servers');
    const dropdownContent = document.querySelector('.locations');

    let isHovered = false;

    function handleHover(event) {
        const isHoveringOverButton = serverBtn.contains(event.target);
        const isHoveringOverDropdown = dropdownContent.contains(event.target);

        if (isHoveringOverButton || isHoveringOverDropdown) {
            if (!isHovered) isHovered = showDropdown(dropdownContent);
        } else {
            if (isHovered) isHovered = hideDropdown(dropdownContent);
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

    function handleHover(event) {
        const isHoveringOverButton = nvidiaBtn.contains(event.target);
        const isHoveringOverDropdown = dropdownContent.contains(event.target);

        if (isHoveringOverButton || isHoveringOverDropdown) {
            if (!isHovered) isHovered = showDropdown(dropdownContent);
        } else {
            if (isHovered) isHovered = hideDropdown(dropdownContent);
        }
    }

    // Add event listener for hover detection on the document
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleHover);
});

/* go to the top of the screen */
///window.onload = function() {
//    window.scrollTo(0, 0);
///};



// Select the button
// const downloadBtn = document.getElementById('download-btn');

// scroll to the download section when the button is clicked
//downloadBtn.addEventListener('click', () => {
//    window.scrollTo({
//        top: window.innerHeight * 1.5, // 150vh 
//        behavior: 'smooth'
//    });
//});



const header = document.getElementById('header');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
    // Get the scroll distance
    const scrollY = Math.min(750, window.scrollY); // Cap the scroll value at 256
    const alpha = scrollY / 750; // Alpha increases with scroll

    // Set the background color of the header
    header.style.backgroundColor = `rgba(33, 33, 33, ${alpha})`;
});
