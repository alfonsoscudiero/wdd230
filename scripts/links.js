// Variables
const baseURL = "https://alfonsoscudiero.github.io/wdd230/";  // Base URL for the site
const linksURL = "https://alfonsoscudiero.github.io/wdd230/data/links.json"; // URL to fetch JSON data

//Function to get and display links from JSON data
async function getLinks() {
    try {
        // Attempt to fetch data from the URL
        const response = await fetch(linksURL); // fetch() initiates a request to the URL and returns a promise

        // Check if the response is successful (status code between 200 and 299)
        if (!response.ok) {
            // If the response is not OK, throw an error with the status
            throw new Error(`HTTP error! Status: ${response.status}`); 
        } 

        // Convert response to JSON format, which returns another promise
        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched JSON data for debugging

        // Display data on the webpage using the displayLinks function
        displayLinks(data);
    
    } catch(error) {
        // Log any errors that occur during fetch or processing
        // the first value is a string message, and the second is the error object itself
        console.error("Error fetching data:", error);
        // Display an error message to the user on the webpage
        document.querySelector('.card').innerHTML = `<p>Failed to load links. Please try again later.</p>`;
    }
}

// This function dynamically generates HTML elements based on the JSON data structure
function displayLinks(weeks) { // weeks is the JSON data
    console.log("Displaying weeks:", weeks); // Log the data passed to displayLinks for debugging

    // Select the main <ul> in HTML where we want to add each week's links
    const mainList = document.querySelector('.card ul');

    // Loops through each "lesson" object in the JSON data
    weeks.lessons.forEach (lesson => {

        // Create a <li> element to represent each week
        let weekItem = document.createElement('li');
        weekItem.textContent = `${lesson.lesson}: `; // Set the text to show the lesson number

        // Loop through each "link" inside the current lesson
        lesson.links.forEach((link, index) => {
            // Create an <a> element for each link
            let anchor = document.createElement('a');
            anchor.href = link.url; // Set the URL of the link
            anchor.textContent = link.title; // Set the link text (title of the link)
            anchor.target = "_blank"; // Opens the link in a new tab

            // Append the link (anchor) to the <li> item for the current week
            weekItem.appendChild(anchor);

            // Condition used to decide if a separator (" | ") should be added after a link in a <li> item
            // index: Represents the position of the current link within the lesson.links array
            // lesson.links.length - 1: Calculates the index of the last link in the array
            if (index < lesson.links.length - 1) { 
                weekItem.appendChild(document.createTextNode(" | "));
            }
        });

        // Append the week item (with its links) to the main list in HTML
        mainList.appendChild(weekItem);
    });
}

// Call the getLinks function to start the fetch and display process
getLinks();

