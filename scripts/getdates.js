// Select the DOM element for output
const currentDate = document.querySelector("#lastModified");

// Set up the Date format object parameter for toLocaleString method and manipulate
currentDate.textContent = new Date().toLocaleString();

// console.log(currentDate);

