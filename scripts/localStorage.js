// Initialize variable
const visitDisplay = document.querySelector('.num-visits');

// Get the stored VALUE for the numVisitsKey KEY in localStorage if it exists. 
// If the numVisitsKey KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem('numVisitsKey')) || 0;

// Determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = 'This is your first visit. 🎉Welcome!🎉';
}

// Increment the number of visits by one
numVisits++;

// Store the new visit total into localStorage, key=numVisitsKey
localStorage.setItem('numVisitsKey', numVisits);
// The second argument (value) should be without quotes to store the actual number