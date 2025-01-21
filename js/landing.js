document.addEventListener('DOMContentLoaded', function() {
    const landingDiv = document.getElementById('landing');
    const glowPointsContainer = landingDiv.querySelector('.glow-points');
    const gridSize = 50; // Adjusted gridSize for larger cells
    const points = [];
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create glow points
    for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
            const glowPoint = document.createElement('div');
            glowPoint.classList.add('glow-point');
            glowPoint.style.left = `${x}px`;
            glowPoint.style.top = `${y}px`;
            glowPointsContainer.appendChild(glowPoint);
            points.push({ element: glowPoint, originalX: x, originalY: y });
        }
    }

    let lastScrollTop = 0;
    let isScrollingDown = true; // Flag to track scroll direction

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            isScrollingDown = true;
        } else {
            isScrollingDown = false;
        }

        points.forEach(point => {
            if (isScrollingDown) {
                // Random movement
                const randomX = (Math.random() - 0.5) * 40;
                const randomY = (Math.random() - 0.5) * 40;
                point.element.style.transform = `translate(${randomX}px, ${randomY}px)`;
            } else {
                // go back to origin
                point.element.style.transform = `translate(0, 0)`;
            }
        });

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});




/*hide the balls when the top of #landing is 450vh higher than the top of the screen, revert when it's not*/

  window.addEventListener('scroll', () => {
    const landing = document.querySelector('#landing');
    const topOfLanding = landing.getBoundingClientRect().top;
    
    if (topOfLanding <= -window.innerHeight * 3) {
      document.querySelector('.grid-background').classList.add('fixed');
    } else {
      document.querySelector('.grid-background').classList.remove('fixed');
    }
  })
