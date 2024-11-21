// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// OpenWeatherMap API key
const apiKey = "e122671826e7ca9f9baca798d6779d26";

// Construct the URL with latitude, longitude, API key, and units
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=${apiKey}&units=imperial`;

// Asynchronous function to fetch weather data
async function apiFetch() {

    try {
        // Fetch data from the API
        const response = await fetch(url); 
        //testing only
        // console.log(response); 

        // Check if the response is OK
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert response to JSON format
        const data = await response.json();

        // Log the data for debugging
        console.log(data);

        // Call the displayResults function to update the webpage
        displayResults(data);

    } catch(error) {

        // Log any errors that occur during the fetch
        console.error("Error fetching data:", error);
    }
}

// Function to display the weather data on the webpage
function displayResults(data) {

    // Log the data passed for debugging
    console.log(data); 

    // Destructure data for temperature, description, and icon
    const {main: {temp}, weather: [{description, icon}]} = data;

    // Create the URL for the weather icon
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // Update the content and attributes of HTML elements
    currentTemp.innerHTML = `${temp.toFixed(0)}°F`; // Display temperature rounded to 0 decimal points
    weatherIcon.setAttribute('src', iconsrc); // Set the src attribute for the image
    weatherIcon.setAttribute('alt', description); // Set the alt attribute for accessibility
}

// Call the apiFetch function to fetch and display data
apiFetch();
