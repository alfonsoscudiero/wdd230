//Initialize elements
const url = "https://alfonsoscudiero.github.io/wdd230/final-website/data/rentals.json";
const rentalOption = document.querySelector('#rental-option');

// Fetch and update rental data
async function getRentalData() {
    try {
        // Fetch data from
        console.log('Fetching data from:', url); // Log the endpoint
        const response = await fetch(url); // Make a network request
        // testing only
        console.log(response);

        if(!response.ok) {
            // If the response is not OK, throw an error with the status
            console.error(`HTTP  error: ${response.status} ${response.statusText}`); // Debugging

            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert response to JSON format
        const data = await response.json();
        console.log("Fetched options:", data.options); // Log the rental options array
    
        //Display cards on the viewport
        displayRentalCards(data.options);
    } catch(error) {
        console.error("Error fetching data:", error);
        document.querySelector("#rental-option").innerHTML = `<p>Failed to load reference. Please try again later.</p>`
    }
}

const displayRentalCards = (options) => {
    console.log('Displaying options:', options); //Debugging

    //Loop through each rental option object within the Json data
    options.forEach((option) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let makeModel = document.createElement('h4');
        let maxCapacity = document.createElement('p');
        let fullDay = document.createElement('p');
        let halfDay = document.createElement('p');
        let rentPict = document.createElement('img');

        //Build the h4 content out to show the prophet's full name
        makeModel.textContent = `${option.make} ${option.model} - ${option.type}`;

        //Set the p content
        maxCapacity.innerHTML = `<p><span class="bold-span">Max. persons:</span> ${option.max-persons}</p>`
        fullDay.innerHTML = `<p><span class="bold-price">${option.reservation-full-day}</span> /Full Day</p>`
        halfDay.innerHTML = `<p><span class="bold-price">${option.reservation-half-day}</span> /Up to 3hrs</p>`

        //Build the image
        rentPict.setAttribute('src', prophet.imageurl);
        rentPict.setAttribute('alt', `Image of ${option.make} ${option.type}`);
        rentPict.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '300');

        // Append the created elements to the section (card)
        card.appendChild(rentPict);
        card.appendChild(makeModel);
        card.appendChild(maxCapacity);
        card.appendChild(fullDay);
        card.appendChild(halfDay);

        // Append the created card element to the div in HTML
        rentalOption.appendChild(card);
    });
}

// Fetch and display the rental cards when the page loads
getRentalData()