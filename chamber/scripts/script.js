// Select the DOM element for output
const yearCopyright = document.querySelector("#currentYear");
const pageLastModified = document.querySelector("#lastModified");
const hambutton = document.querySelector("#menu");
const navbar = document.querySelector(".header-main-nav");

// Set up the Date format object parameter for toLocaleString method and manipulate
yearCopyright.textContent = new Date().getFullYear();
pageLastModified.textContent = new Date().toLocaleString();

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    navbar.classList.toggle('open'); // This applies the 'open' class to the whole navigation
    hambutton.classList.toggle('open'); // Toggles the hamburger button icon (≡ to X)
});
// Toggle adds the class if it does not currently exist or removes the class if it does exist.