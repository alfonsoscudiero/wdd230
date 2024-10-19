let darkMode = localStorage.getItem('darkMode');

// Select the DOM element for output
const darkModeToggle = document.querySelector("#dark-mode-button");

// functions
const enableDarkMode = () => {
    // 1. add dark class dark-mode to the body
    document.body.classList.add("dark-mode");
    // 2. update darkMode in the Local Storage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    // 1. add dark class dark-mode to the body
    document.body.classList.remove("dark-mode");
    // 2. update darkMode in the Local Storage
    localStorage.setItem("darkMode", null);
};

// Add a click event listener
// Check if dark mode is enabled
// if it is enabled, turn it off
// if it is disabled, turn it on
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});

