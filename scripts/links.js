// Variables
const baseURL = "https://alfonsoscudiero.github.io/wdd230/";
const linksURL = "https://alfonsoscudiero.github.io/wdd230/data/links.json";

//Function
async function getLinks() {
    try {
        // Attempt to fetch data from the URL
        const response = await fetch(linksURL); 
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        } 
        // Convert response to JSON
        const data = await response.json();
        // Test result by writing the data to the console
        // console.log(data); 

        // Display data on the webpage
        displayLinks(data);
    
        
        //Function to display data on the webpage
    } catch(error) {
        // Log any errors that occur during fetch or processing
        // the first value is a string message, and the second is the error object itself
        console.error("Error fetching data:", error);
        // Display an error message to the user on the webpage
        document.querySelector('.card').innerHTML = `<p>Failed to load links. Please try again later.</p>`;
    }
}

// This function will generate the HTML elements dynamically based on the JSON data structure
function displayLinks(weeks) {
    // Select the main <ul> in  HTML to add each week's links
    const mainList = document.querySelector('.card ul');

    // Loops through each week (lesson) in the data
    weeks.lessons.forEach (lesson => {

        // Create a <li> element to represent each week
        let weekItem = document.createElement('li');
        weekItem.textContent = `${lesson.lesson}: `;

        // Add each link as an <a> element within the same <li>
        lesson.links.forEach((link, index) => {
            let anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.target = "_blank";

        // Append the link to the list item
        weekItem.appendChild(anchor);

        // Add separator between links if there are multiple links
        if (index < lesson.links.length - 1) {
            weekItem.appendChild(document.createTextNode(" | "));
        }
        });

        //Append the week item to the main list
        mainList.appendChild(weekItem);
    });
}

