let themeSettings; // The element that contains the theme settings
let themePreview; // The element that shows the theme preview

let oldColorTarget = null; // The last element that last triggered a color change

/**
 * Change the color theme
 * @param {string} newColor
 * @param {HTMLElement} target The element that triggered the change
 * @returns {void}
 */
function ChangeThemeColor(target, newColor) {
    if (target === oldColorTarget) {
        // If the same element triggered the change, do nothing
        return;
    }

    // Remove the active class from the old target and add it to the new target
    if (oldColorTarget) oldColorTarget.classList.remove("active");
    target.classList.add("active");
    oldColorTarget = target;

    const color = tinycolor(newColor); // Use tinycolor to handle the color manipulation

    const primary = color.toString();
    const primaryLight = color.lighten(10).toString();
    const primaryDark = color.darken(10).toString();
    const primaryInteractive = color.getLuminance() > 0.5 ? color.darken(15).toString() : color.lighten(15).toString();
    const textColor = color.getLuminance() > 0.5 ? "#1a1a1a" : "#fff";

    const root = document.documentElement;
    root.style.setProperty("--primary", primary);
    root.style.setProperty("--primary-light", primaryLight);
    root.style.setProperty("--primary-dark", primaryDark);
    root.style.setProperty("--primary-text-emphasis", textColor);
    root.style.setProperty("--primary-interactive", primaryInteractive);

    // to wawa: do the rest of the stuff related to the colors here, just like I did.
}

window.addEventListener("DOMContentLoaded", () => {
    themeSettings = document.querySelector(".theme-settings")
    themePreview = document.querySelector(".theme-preview");

    const firstCircle = document.querySelector(".theme-color-circle");
    const circleColor = firstCircle.style.getPropertyValue("--circle-color");
    ChangeThemeColor(firstCircle, circleColor);
});

window.ChangeThemeColor = ChangeThemeColor;