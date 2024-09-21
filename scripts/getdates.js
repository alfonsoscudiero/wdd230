// Select the DOM element for output
const pageLastModified = document.querySelector("#lastModified");

// Set up the Date format object parameter for toLocaleString method and manipulate
pageLastModified.textContent = new Date().toLocaleString();

// console.log(pageLastModified);

