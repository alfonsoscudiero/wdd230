// Select the DOM element for output
const currentCopyrightYear = document.querySelector("#currentYear");
const pageLastModified = document.querySelector("#lastModified");

// Set up the Date format object parameter for toLocaleString method and manipulate
currentCopyrightYear.textContent = new Date().getFullYear();
pageLastModified.textContent = new Date().toLocaleString();

// console.log(currentCopyrightYear);
// console.log(pageLastModified);

