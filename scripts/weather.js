// Select the HTML elements
const tempDisplay = document.querySelector('#temp-display');
const descDisplay = document.querySelector('#desc-display');
const weatherIcon = document.querySelector('#weather-emoji');
const errorDisplay = document.querySelector('#error-display');

// OpenWeatherMap API key
const apiKey = "e122671826e7ca9f9baca798d6779d26";

// Construct the URL with latitude, longitude, API key, and units
const url = `https://api.openweathermap.org/data/2.5/weather?lat=10.20&lon=-64.68&appid=${apiKey}&units=imperial`;

// Asynchronous function to fetch weather data
async function apiFetch() {

    try {
        // Fetch data from the API
        const response = await fetch(url);
        // testing only
        console.log(response);

        // Check if response is ok
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert response to JSON format
        const data = await response.json();

        // Log the data for debugging
        console.log(data);

        // Call the displayResults function
        displayResults(data);
                
    } catch (error) {

        // Log any errors that occur during the fetch
        displayError('Error fetching data');
    }
} 

// Function to display the weather data on the webpage
function displayResults(data) {

    // Log the data passed for debugging
    console.log(data); 

    // Destructure data for temperature, description, and icon
    const {main: {temp}, weather: [{description, icon}]} = data;

    // Log the icon data for debugging
    console.log(icon);

    // Create the URL for the weather icon
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // Update the content and attributes of the HTML elements
    tempDisplay.innerHTML = `${temp.toFixed(1)} °F`;
    descDisplay.textContent = description;
    weatherIcon.setAttribute('src', iconsrc); // Set the weather icon
    weatherIcon.setAttribute('alt', description); // Add alt text for accessibility
}

function resetErrorDisplay() {
    errorDisplay.textContent = '';
    errorDisplay.style.display = 'none';
}

function displayError(message) {
    errorDisplay.textContent = message; // Update the error message
    errorDisplay.style.display = 'block'; // Make the error message visible
}


// Call the apiFetch function to fetch and display data
apiFetch()