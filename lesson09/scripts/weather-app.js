//Weather Variables
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "e122671826e7ca9f9baca798d6779d26";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    const response = await fetch(apiURL);

    console.log(response);
    if(!response.ok) {
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    
    // Review the data received and unpack arrays and objects into variables (destructuring)
    console.log(data);  
    const {name : city, main: {temp, humidity}, weather: [{description, id}]} = data

    // Display into the card
    card.textContent = '';
    card.style.display = 'flex';

    //Create  Elements for the DOM
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');

    // Change textContent of each of the Elements
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp.toFixed(1)} °F`;
    humDisplay.textContent = `Humidity ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    // Add CSS style to Elements
    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay')
    humDisplay.classList.add('humDisplay');
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    // Append to the DOM
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humDisplay);
    card.append(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherID) {

    switch(true) {
        case (weatherID >= 200 && weatherID < 300):
            return "⛈️"; //Thunderstorm
        case (weatherID >= 300 && weatherID < 400):
            return "🌧️"; //Drizzle Rain
        case (weatherID >= 500 && weatherID < 600):
            return "🌦️"; // Extreme Rain
        case (weatherID >= 600 && weatherID < 700):
            return "🌨️"; //Snow
        case (weatherID >= 700 && weatherID < 800):
            return "🌫️"; //Mist
        case (weatherID === 800):
            return "☀️"; //Clear
        case (weatherID > 800 && weatherID < 810):
            return "☁️"; //Few Clouds
        default:
            return "💧" ; //Unknown
    }
}

function displayError(message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');

    card.textContent = '';
    card.style.display = 'flex'
    card.appendChild(errorDisplay);
}
