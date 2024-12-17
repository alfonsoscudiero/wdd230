// Initialize display elements
const bannerCurrentDate = document.querySelector('#banner-current-date');
const maxTemp = document.querySelector('#max-temp');
const currentConditions = document.querySelector('#current-conditions');
const currentTemp = document.querySelector('#current-temperature');
const currentHum = document.querySelector('#current-humidity');
const feelsLike = document.querySelector('#feels-like');
const errorMessage = document.querySelector('#error-message');
const dateDisplays = document.querySelectorAll('.date-display'); // Multiple dates
const tempDisplays = document.querySelectorAll('.temp-display');
const mainWeather = document.querySelectorAll('.main-weather');
const weatherDesc = document.querySelectorAll('.weather-desc');
const weatherIcons = document.querySelectorAll('.weather-icon')
const banner = document.querySelector('.banner');
const bannerCloseBtn = document.querySelector('#closeable-message');

// OpenWeatherMap API key
const apiKey = "e122671826e7ca9f9baca798d6779d26"; 
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&appid=${apiKey}&units=imperial`;

// Fetch and update weather data
async function updateWeather() {

    try {
        // Fetch data from
        console.log('Fetching weather data from:', url); // Log the API endpoint
        const response = await fetch(url);
        // testing only
        console.log(response);

        if (!response.ok) {
            console.error(`API fetch error: ${response.status} ${response.statusText}`); // Debugging
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Convert response to JSON format
        const data = await response.json();

        // Call the displayResults function
        console.log('API response received:', data); // Log the full data
        displayResults(data);

    } catch(error) {
        // Call the function to display the error message
        console.error('Error fetching weather data:', error); // Debugging
        displayError("Unable to fetch weather data");
    }
}

// Display weather results
function displayResults(data) {
    console.log('Weather data fetched:', data); // Debugging


    // Banner update
    const today = new Date();
    console.log('Updating banner with date:', today); // Debugging
    bannerCurrentDate.textContent = today.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
    
    console.log('Updating max temperature:', data.list[0].main.temp_max); // Debugging
    maxTemp.textContent = `${data.list[0].main.temp_max.toFixed(1)} °F`;

    // Current weather card update
    currentConditions.textContent = data.list[0].weather[0].description;
    currentTemp.textContent = `${data.list[0].main.temp.toFixed(1)} °F`;
    currentHum.textContent = `${data.list[0].main.humidity}%`;
    feelsLike.textContent = `${data.list[0].main.feels_like.toFixed(1)} °F`;

    // Forecast card update
    const forecastItems = data.list.filter(item => item.dt_txt.includes('15:00:00')).slice(0, 3);
    console.log('Forecast items:', forecastItems); // Debugging

    forecastItems.forEach((item, index) => {
        dateDisplays[index].textContent = new Date(item.dt_txt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        mainWeather[index].textContent = item.weather[0].main;
        weatherDesc[index].textContent = item.weather[0].description;
        weatherIcons[index].src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        weatherIcons[index].alt = item.weather[0].description;
        tempDisplays[index].textContent = `${item.main.temp.toFixed(1)} °F`;
    });
}

// Function to display an error message
function displayError(message) {
    if (errorMessage) {
        errorMessage.textContent = message;
        console.error(message); // Debugging
    } else {
        console.error('Error message element not found');
    }
}

// Function to handle the banner functionality
bannerCloseBtn.addEventListener('click', () => {
    console.log('Close button clicked');
    if (banner) {
        banner.style.display = 'none'; // Hide the banner
        console.log('Banner hidden'); // Debugging
    } else {
        console.error('Banner element not found');
    }
});

// Call the apiFetch function to fetch and update weather data
updateWeather()

