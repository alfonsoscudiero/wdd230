// Variables
const baseURL = "https://alfonsoscudiero.github.io/wdd230/";
const linksURL = "https://alfonsoscudiero.github.io/wdd230/data/links.json";

//Function
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

//Call the function
getLinks();