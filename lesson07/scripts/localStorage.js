// Declare variables to reference HTML elements
const input = document.querySelector("#favchap"); // Input field for chapter
const button = document.querySelector("button"); // Button to add chapter
const list = document.querySelector("#list"); // Unordered list to display chapters

// Retrieve the stored chapters from localStorage, or initialize an empty array if none exist
let chaptersArray = getChapterList() || [];

// Populate the list with stored chapters when the page loads
chaptersArray.forEach(chapter => displayList(chapter));

// Add click event listener to the button
button.addEventListener('click', () => {
    // Check if the input field is not empty
    if (input.value !== "") {
        displayList(input.value); // Call displayList to add the chapter to the UI
        chaptersArray.push(input.value); // Add the chapter to the chapters array
        setChapterList(); // Update localStorage with the new chapters array
        input.value = ''; // Clear the input field
        input.focus(); // Set focus back to the input field
    }
});

// Function to retrieve chapters from localStorage
function getChapterList() {
    // Parse the JSON string from localStorage and return it as an array
    return JSON.parse(window.localStorage.getItem('topBOMList'));
}

// Function to display a chapter in the list
function displayList(item) {
    const li = document.createElement("li"); // Create a new list item
    const deleteButton = document.createElement("button"); // Create a delete button

    li.textContent = item; // Set the text content of the list item
    deleteButton.textContent = "❌"; // Set the text content of the delete button
    deleteButton.classList.add('delete'); // Add a class for styling

    li.append(deleteButton); // Append the delete button to the list item
    list.append(li); // Append the list item to the unordered list

    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => {
        list.removeChild(li); // Remove the list item from the UI
        deleteChapter(item); // Call deleteChapter to remove from storage and array
        input.focus(); // Set focus back to the input field
    });
}

// Function to save the chapters array to localStorage
function setChapterList() {
    window.localStorage.setItem('topBOMList', JSON.stringify(chaptersArray)); // Store the array as a JSON string
}

// Function to delete a chapter from the chapters array and update localStorage
function deleteChapter(chapter) {
    // Remove the chapter from the chapters array
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Filter out the chapter from the array
    setChapterList(); // Update localStorage with the modified chapters array
}
