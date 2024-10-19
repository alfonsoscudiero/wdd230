// Select the dark mode toggle button
const darkModeToggle = document.querySelector("#dark-mode-button");

// Function to toggle dark mode
const toggleDarkMode = () => {
    // Check if dark mode is enabled
    // if it is enabled, turn it off
    // if it is disabled, turn it on
    document.body.classList.toggle("dark-mode");
}

// Add a click event listener to the toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);

