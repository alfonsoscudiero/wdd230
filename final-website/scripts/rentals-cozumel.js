//Initialize elements
const url = "https://alfonsoscudiero.github.io/wdd230/final-website/data/rentals.json";
const rentalOptionContainer = document.querySelector('#card-section-rental-options'); // Target the container

// Fetch and display rental data
async function getRentalData() {
    try {
        console.log('Fetching data from:', url);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched options:", data.options);
        displayRentalCards(data.options);
    } catch (error) {
        console.error("Error fetching data:", error);
        rentalOptionContainer.innerHTML = `<p>Failed to load rental data. Please try again later.</p>`;
    }
}

// Dynamically display rental cards
const displayRentalCards = (options) => {
    console.log('Displaying options:', options); //Debugging
    rentalOptionContainer.innerHTML = ""; // Clear container before adding new cards

    options.forEach((option) => {
        // Create elements for each card
        let card = document.createElement('section');
        card.classList.add('rental-option');

        let image = document.createElement('img');
        let makeModel = document.createElement('h4');
        let maxCapacity = document.createElement('p');
        let fullDay = document.createElement('p');
        let halfDay = document.createElement('p');

        // Set element content
        image.setAttribute('src', option.imageUrl);
        image.setAttribute('alt', `Image of ${option.make} ${option.type}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');

        makeModel.textContent = `${option.make} ${option.model} - ${option.type}`;
        maxCapacity.innerHTML = `<span class="bold-span">Max. persons:</span> ${option["max-persons"]}`;
        fullDay.innerHTML = `<span class="bold-price">${option["reservation-full-day"]}</span> /Full Day`;
        halfDay.innerHTML = `<span class="bold-price">${option["reservation-half-day"]}</span> /Up to 3hrs`;

        // Append elements to card
        card.appendChild(image);
        card.appendChild(makeModel);
        card.appendChild(maxCapacity);
        card.appendChild(fullDay);
        card.appendChild(halfDay);

        // Append card to container
        rentalOptionContainer.appendChild(card);
    });

};

// Fetch and display the rental cards when the page loads
getRentalData();