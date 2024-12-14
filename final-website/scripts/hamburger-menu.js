// Select the DOM element for output
const menu= document.querySelector('#menu');
const closeBtn = document.querySelector('#close-btn');
const menuBtn = document.querySelector('#menu-btn');

// Toggle the menu's visibility
function toggleMenu() {
    menu.classList.toggle("show-menu");
    //The toggleMenu function removes the .show-menu class from #menu
}

// Add a click event listener to the hamburger button
menuBtn.addEventListener("click", toggleMenu); // the toggleMenu function is called, sliding the menu into view
closeBtn.addEventListener("click", toggleMenu); //the toggleMenu function is called again, sliding the menu out of view
