// Select the DOM element for output
const currentCopyrightYr = document.querySelector('#current-year');
const pageLastModified = document.querySelector('#date-modified');

// Date object
const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0'); //2-digit day (e.g., 01, 31)

let currentMonth = String(date.getMonth()+1).padStart(2,"0"); //2-digit month (e.g., 01, 12)

let currentYear = date.getFullYear();

// Set up the Date format object parameter
currentCopyrightYr.textContent = `${currentYear}`; // Output: YYYY
pageLastModified.textContent = `${currentMonth}-${currentDay}-${currentYear}`; // Output: MM-DD-YYYY

// Test
let fullDate = date.toUTCString();
console.log(fullDate);