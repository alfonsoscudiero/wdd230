// Function to display the chosen rating
function displayValue() {
    // Get the value of the selected radio button in the star rating form
    let starVal = document.forms["star-rating-form"]["star-radio"].value;
    
    // Check if a star rating has been selected
    if (starVal == -1) {
      // Display "Not chosen" if no rating is selected
      document.getElementById("result").innerText = "Not chosen";
    } else {
      // Display the chosen star rating out of 10
      document.getElementById("result").innerText = "You chose: " + starVal + " out of 10.";
    }
  }
  
  // Run this function once the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize the display to show the current selected value
    displayValue();
  
    // Loop through each radio button in the "star-radio" group
    document.forms["star-rating-form"]["star-radio"].forEach((star) => {
      // Add an event listener to update display when the rating changes
      star.addEventListener("change", () => {
        displayValue();
      });
    });
  });