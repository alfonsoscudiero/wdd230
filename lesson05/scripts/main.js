// Declare variables
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Create a click event listener
button.addEventListener('click', () => {
    if(input.value != "") {
        // Create a new list element
        const li = document.createElement("li");
        // Create a delete button for the li
        const deleteButton = document.createElement("button")
        
        // Populate the li elements textContent with the input value
        li.textContent = input.value;
        // Populate the button textContent
        deleteButton.textContent = "❌";

        // Append the li element with the delete button
        li.append(deleteButton);
        // Append the li element to the unordered list
        list.append(li);

        // Add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li); // Removes the li element
            input.focus(); // Focuses back on the input field
        });

        // change the input value to nothing 
        input.value = '';
    } 
    else {
        // If input is empty, focus on the input field
        return input.focus();
    }
});