// Function to display the chosen rating
function displayValue() {
    // Get the value of the selected radio button in the star rating form
    let starVal = document.querySelector('input[name="star-radio"]:checked')?.value;

    // Check if a star rating has been selected
    if (!starVal) {
        // Display "Not chosen" if no rating is selected
        document.querySelector("#result").textContent = "Not chosen";
    } else {
        // Display the chosen star rating out of 10
        document.querySelector("#result").textContent = "You chose: " + starVal + " out of 10.";
    }
}

// Run this function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize the display to show the current selected value
    displayValue();

    // Add an event listener to each radio button in the "star-radio" group
    document.querySelectorAll('input[name="star-radio"]').forEach((star) => {
        // Update display when the rating changes
        star.addEventListener("change", displayValue);
    });
});