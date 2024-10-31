// Extract the temperature and wind speed values from the DOM
// .textContent is essential for retrieving the actual value from the selected element. Returns a string
// Without it, I would only have a reference to the element itself, not the data it contains.
// parseFloat() is a method used to convert strings into floating-point numbers

let temperature =  document.querySelector('#current-temperature');
let windSpeed = document.querySelector('#wind-speed');

// Function to calculate Wind Chill - takes temperature and windSpeed as input
function calculateWindChill(temperature, windSpeed) {
    if(temperature <= 50 && windSpeed > 3) {
        // Define the variable windChill and the formula to calculate the value
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        // .toFixed(1) method converts the windChill value to a string, rounding it to 1 decimal place
        document.querySelector('#wind-chill-value').textContent = windChill.toFixed(1); // .textContent set the new text content for the element
    } else {
        document.querySelector('#wind-chill-value').textContent = 'N/A';
    }
}

// Callback function runs after the page has finished loading
// window.onload: event triggered when the entire page has fully loaded
window.onload = () => {
    // Extract the temperature and wind speed to guarantee that the latest values are used
    let temperature = parseFloat(document.querySelector('#current-temperature').textContent);
    let windSpeed = parseFloat(document.querySelector('#wind-speed'));

    // Call the function with actual values of temperature and wind speed extracted from the DOM elements
    calculateWindChill(temperature, windSpeed);

}