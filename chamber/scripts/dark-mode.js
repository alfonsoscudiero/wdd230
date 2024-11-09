// Select the dark mode toggle button and logo image
const darkModeToggle = document.querySelector("#dark-mode-button");
const logoImg = document.querySelector('#logo-img');

// Function to toggle dark mode and update logo
const toggleDarkMode = () => {
    // Check if dark mode is enabled
    // if it is enabled, turn it off
    // if it is disabled, turn it on
    document.body.classList.toggle("dark-mode");

    // Change the logo image based on the dark mode
    if(document.body.classList.contains('dark-mode')) {
        logoImg.src = "images/footer-logo.webp"; // Change to dark logo
    } else {
        logoImg.src = "images/nav-main-logo.webp"; //Revert to light logo
    }

    // Select all odd rows and change the background color
    const oddRows = document.querySelectorAll('.benefits-section tbody tr:nth-child(odd)');
    oddRows.forEach(row => {
        if (document.body.classList.contains('dark-mode')) {
            row.style.background = 'hsl(0, 0%, 30%)'; // Dark mode background
        } else {
            row.style.background = 'hsl(0, 0%, 80%)'; // Light mode background
        }
    });

};

// Add a click event listener to the toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);

