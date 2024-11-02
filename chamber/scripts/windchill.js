function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        // Define the variable windChill and the formula to calculate the value
        let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        // .toFixed(1) method converts the windChill value to a string, rounding it to 1 decimal place
        document.querySelector('#wind-chill-value').textContent = windChill.toFixed(1); // .textContent set the new text content for the element
    } else {
        document.querySelector('#wind-chill-value').textContent = "N/A";
    }
}

// Extract the temperature and wind speed values from the DOM
// .textContent is essential for retrieving the actual value from the selected element. Returns a string
// Without it, I would only have a reference to the element itself, not the data it contains.
// parseFloat() is a method used to convert strings into floating-point numbers

document.addEventListener('DOMContentLoaded', () => { // Event to ensure it runs only after the DOM is fully loaded
    // Extract the Temperature Value
    const tempElement = document.querySelector('#current-temperature');
    const windSpeedElement = document.querySelector('#wind-speed');

    if (tempElement && windSpeedElement) { // Check if elements are not null
        let temperature = parseFloat(tempElement.textContent);
        let windSpeed = parseFloat(windSpeedElement.textContent);
        calculateWindChill(temperature, windSpeed);
    } else {
        console.error('Temperature or wind speed elements are not found in the DOM.');
    }
});

// Callback function runs after the page has finished loading
// window.onload: event triggered when the entire page has fully loaded
window.onload = () => { // Runs after the entire page has fully loaded
    const tempElement = document.querySelector('#current-temperature');
    const windSpeedElement = document.querySelector('#wind-speed');

    if (tempElement && windSpeedElement) { // Check if elements are not null
        let temperature = parseFloat(tempElement.textContent);
        let windSpeed = parseFloat(windSpeedElement.textContent);
        calculateWindChill(temperature, windSpeed);
    } else {
        console.error('Temperature or wind speed elements are not found in the DOM.');
    }
};