// Initialize display elements
const latestVisit = document.querySelector('#latest-visit');
const theDateToday = new Date(); //today's date
const msToDays = 86400000; //milliseconds to days constant

// Retrieve the last visit from LocalStorage
const lastVisitDate = localStorage.getItem('lastVisit');

console.log("Today's date:", theDateToday);
console.log("Last visit date from localStorage:", lastVisitDate);


// Check if this is the user's first visit
if (!lastVisitDate) {
    console.log("This is a new visit");
    latestVisit.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = Math.floor((theDateToday - new Date(lastVisitDate)) / msToDays);
    
    if (daysSinceLastVisit < 1) {
        latestVisit.textContent = "Back too soon! Awesome!";
    } else {
        const daysSinceLastVisit = Math.floor((theDateToday - new Date(lastVisitDate)) / msToDays);
        console.log("Days since last visit:", daysSinceLastVisit);
    
        if (daysSinceLastVisit < 1) {
            latestVisit.textContent = "Back to soon! Awesome";
        } else {
            const dayLabel = daysSinceLastVisit === 1 ? "day" : "days";
            latestVisit.textContent = `You last visited ${daysSinceLastVisit} ${dayLabel} ago.`;
        }
    }
}

// Update localStorage with the current date for the next visit
// toISOString() converts the current date to a string in ISO 8601 format
localStorage.setItem('lastVisit', theDateToday.toISOString());

// testing only
console.log("Updated localStorage with new visit date:", theDateToday.toISOString());