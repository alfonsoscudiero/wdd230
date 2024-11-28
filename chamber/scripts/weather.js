// Select the HTML elements
const dateDisplays = document.querySelectorAll('.date-display'); // Multiple dates
const tempDisplays = document.querySelectorAll('.temp-value'); // Multiple temps
const weatherIcons = document.querySelectorAll('.weather-icon'); // Multiple icons
const weatherDescription = document.querySelectorAll('.weather-description'); //Multiple strings
const errorDisplay = document.querySelector('#error-display');
const banner = document.querySelector('.banner');

// OpenWeatherMap API key
const apiKey = "e122671826e7ca9f9baca798d6779d26"; 

// Construct the URL with latitude, longitude, and API key
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=40.23&lon=-111.66&appid=${apiKey}&units=imperial`;

// Function to fetch and update the weather data
async function updateWeather() {
    
    try {
        // Fetch data from 
        const response = await fetch(url);
        // testing only
        console.log(response);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Convert response to JSON format
        const data = await response.json();

        // Log the data for debugging
        console.log(data);

        // Call the displayResults function
        displayResults(data);
    }
    catch(error) {
        // Call the function to display the error message
        displayError("Unable to fetch weather data");
    }
}

// Function to display weather data
function displayResults(data) {
    const dailyForecast = {}; // Object to store forecast data grouped by date
    
    // Loop through the forecast data (3-hour intervals)
    data.list.forEach((entry) =>{
        const date = new Date(entry.dt * 1000) // Convert timestamp to date
        const day = date.toISOString().split('T')[0]; // Extract YYYY-MM-DD format
        // const hour = date.getHours(); // Get the hour of the forecast (0-23)

        // Store the first forecast for each day (can choose first, or closest to noon)
        if (!dailyForecast[day]) {
            dailyForecast[day] = entry; // Store the first forecast for this day
        }
    });

    // Get all unique days from the forecast and sort them in ascending order
    const forecastDays = Object.keys(dailyForecast).sort((a, b) => new Date(a) - new Date(b));


    // Log to ensure the correct data is being selected
    console.log('Sorted Forecast Days:', forecastDays);

    // Limit to the first three distinct days
    const selectedDays = forecastDays.slice(0, 3);

    // Log to verify which days are being selected
    console.log('Selected Days:', selectedDays);



    // Update the weather display for each day
    selectedDays.forEach((day, index) => {
        const forecast = dailyForecast[day]; // Get the forecast for the specific day

        // Format the date
        const date = new Date(forecast.dt * 1000); // Convert timestamp to milliseconds
        const options = {weekday: 'short', month: 'short', day: 'numeric'}; // Format for "Fri, Nov 22"
        const formattedDate = date.toLocaleDateString('en-US', options);

        // Debugging: Check if we are targeting the correct element
        console.log('Updating dateDisplay for index', index, 'with date:', formattedDate);


        // Log to check if the date is being set correctly
        console.log(`Setting date for day ${index + 1}: ${formattedDate}`);
        
        // Destructure data for temperature, description, and icon
        const {
            main: { temp }, // Get temperature
            weather: [{ description, icon }] // Get description and icon
        } = forecast;

        // Update the elements dynamically
        dateDisplays[index].textContent = formattedDate; // Update date
        tempDisplays[index].textContent = `${(temp.toFixed(1))}°F`; // Update temperature
        weatherIcons[index].src = `https://openweathermap.org/img/wn/${icon}.png`; // Update icon
        weatherIcons[index].alt = description; // Set alt text
        weatherDescription[index].textContent = description;
    });
}

// Function to display an error message
function displayError(message) {
    // Set the error message text
    errorDisplay.textContent = message;

    // Log the error for debugging purposes
    console.error(message);
}

// Function to handle the banner functionality
function handleBanner() {
    // Select the banner element
    console.log('Banner element selected:', banner); // Debug

    // Check if the banner element exists
    if (!banner) {
        console.error('Banner element not found in HTML.');
        return;
    }

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date().getDay();
    console.log('Today\'s day number:', today);

    // Show the banner on Monday, Tuesday, or Wednesday
    if (today >= 1 && today <= 3) {
        console.log('Today is Monday, Tuesday, or Wednesday. Showing the banner.');
        banner.style.display = 'block'; // Show the banner

        // Check if the close button is already added to avoid duplicates
        if (!banner.querySelector('.close-banner')) {
            console.log('Close button not found. Creating and appending it now.');

            // Create the close button dynamically
            const closeButton = document.createElement('span');
            closeButton.className = 'close-banner';
            closeButton.textContent = '❌';

            // Append the close button to the <p> element
            banner.querySelector('p').appendChild(closeButton);
            console.log('Close button added:', closeButton);

            // Add an event listener to the close button to hide the banner
            closeButton.addEventListener('click', () => {
                console.log('Close button clicked. Hiding the banner.');
                banner.style.display = 'none'; // Hide the banner when clicked
            });
        } else {
            console.log('Close button already exists. No need to create it again.');
        }
    } else {
        console.log('Today is not Monday, Tuesday, or Wednesday. Hiding the banner.');
        banner.style.display = 'none'; // Hide the banner
    }
}

// Call the function to handle the banner
handleBanner();




// Call the apiFetch function to fetch and display data
updateWeather()