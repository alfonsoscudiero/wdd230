//Select elements from DOM
const currentYear = document.querySelector('#current-year');
const lastModified = document.querySelector('#last-modified');

// Set up the Date format object parameter for toLocaleString method and manipulate
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = new Date().toLocaleString();