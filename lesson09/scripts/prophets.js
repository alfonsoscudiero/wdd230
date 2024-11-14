//Variable
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";  // URL to fetch JSON data
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url); // initiates a request to the URL and returns a promise

        if(!response.ok) {
            // If the response is not OK, throw an error with the status
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Convert response to JSON format
        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched JSON data Object for debugging
        // Below we reference the prophets array of the JSON data object, not just the object
        console.log("Fetched prophets:", data.prophets); 
    
        // Display data on the webpage
        displayProphets(data.prophets)
    } 
    catch(error) {
        console.error("Error fetching data:", error);
        document.querySelector("#cards").innerHTML = `<p>Failed to load reference. Please try again later.</p>`
    }
}

// This function dynamically generates HTML elements based on the JSON data structure
const displayProphets = (prophets) => {
    console.log("Displaying prophets:", prophets); // Log the data passed for debugging

    // Loops through each "prophet" object in the JSON data
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p')
        let length = document.createElement('p');
        let deathDate = document.createElement('p');
        let portrait = document.createElement('img');

        //Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        //Set the p content
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        length.textContent = `Length: ${prophet.length} years`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        deathDate.textContent = `Date of Death: ${prophet.death}`;

        //Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the created elements to the section (card)
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(length);
        card.appendChild(deathDate);
        card.appendChild(portrait);

        // Append the created card element to the div in HTML
        cards.appendChild(card);
    });
}

getProphetData()


