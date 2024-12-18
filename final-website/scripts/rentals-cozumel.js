// Initialize elements
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
    rentalOptionContainer.innerHTML = ""; // Clear container before adding new cards

    options.forEach((option) => {
        // Create elements for each card
        const card = document.createElement('section');
        card.classList.add('rental-option');

        card.innerHTML = `
            <img src="${option.imageUrl}" alt="Image of ${option.make} ${option.type}" loading="lazy" width="300" height="200">
            <h4>${option.make} ${option.model} - ${option.type}</h4>
            <p><span class="bold-span">Max. persons:</span> ${option["max-persons"]}</p>
            <p><span class="bold-price">${option["reservation-full-day"]}</span> /Full Day</p>
            <p><span class="bold-price">${option["reservation-half-day"]}</span> /Up to 3hrs</p>
        `;

        // Check Each option Object in the Loop
        console.log("Current option:", option);
        console.log("Image URL:", option.imageUrl);
        console.log("Max persons:", option["max-persons"]);

        rentalOptionContainer.appendChild(card);
        console.log("Generated card:", card.innerHTML);
    });
};

// Fetch and display the rental cards when the page loads
getRentalData();
