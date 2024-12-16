// Initialize display elements
const latestVisit = document.querySelector('#latest-visit');
const currentDate = new Date();
const msToDays = 86400000; //milliseconds to days constant

// Retrieve the last visit from Local Storage
const lastVisitDate = localStorage.getItem('lastVisit');

console.log("Today's date:", currentDate);
console.log("Last visit date from localStorage:", lastVisitDate);

// Check if this is the user's first visit
if(!lastVisitDate) {
    console.log('This is a new visit');
    latestVisit.textContent = "Welcome to Your Island Getaway";
} else {
    const daysSinceLastVisit  = Math.floor((currentDate - new Date(lastVisitDate)) / msToDays);

    if (daysSinceLastVisit < 1) {
        latestVisit.textContent = "Back too soon! Awesome!";
    } else {
        const dayLabel = daysSinceLastVisit === 1 ? "day" : "days";
        latestVisit.textContent = `You last visited ${daysSinceLastVisit} ${dayLabel} ago.`;
    }
}

// Update localStorage with the current date for the next visit
// toISOString() converts the current date to a string in ISO 8601 format
localStorage.setItem('lastVisit', currentDate.toISOString());

// testing only
console.log("Updated localStorage with new visit date:", currentDate.toISOString());