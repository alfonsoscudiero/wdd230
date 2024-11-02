// Initialize display elements
const latestVisit = document.querySelector('#latest-visit');
const theDateToday = new Date(); //today's date
const msToDays = 3600 * 24 * 1000; //milliseconds to days constant

// Retrieve the last visit from LocalStorage
const lastVisitDate = localStorage.getItem('lastVisit');

// Check if this is the user's first visit
if (!lastVisitDate) {
    latestVisit.textContent = "Welcome! Let us know if you have any questions."
} else {
    // Calculate the time difference in days
    const daysSinceLastVisit = Math.floor((theDateToday - new Date(lastVisitDate)) / msToDays); 
    if (daysSinceLastVisit < 1) {
       latestVisit.textContent = "Back to soon! Awesome"; 
    } else {
        // Display message based on the number of days
        const dayLabel = daysSinceLastVisit === 1 ? "day" : "days";
        lastestVisit.textContent = `You last visited ${daysSinceLastVisit} ${dayLabel} ago.`;
    }
}

// Update localStorage with the current date for the next visit
localStorage.setItem('lastVisit', theDateToday);