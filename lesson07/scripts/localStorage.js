// Declare variables
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

// Define getChapterList function
function getChapterList () {
    chaptersArray.forEach (chapter => displayList(chapter));
};

// New click event listener
button.addEventListener('click', () =>{
    // Check if the input is empty
    if (input.value !== "") {
        //Call displayList function with the input.value argument
        displayList(input.value);
        // Push the input.value into the ChapterArray
        chaptersArray.push(input.value);
        // Update the local Storage with the new array by calling a function
        setChapterList ();
        // Set the input value to nothing
        input.value = '';
        // Set the focus back to the input
        input.focus();
    } else {

    }
})

// Define displayList function
function displayList (item) {
    // Create a new list element
    const li = document.createElement("li");
    // Create a delete button for the li
    const deleteButton = document.createElement("button")

    // Populate the li elements textContent with the parameter 'item'
    li.textContent = item;
    // Populate the button textContent
    deleteButton.textContent = "❌";

    // Add a class 'delete' to the deleteButton element
    deleteButton.classList.add('delete'); 

    // Append the li element with the delete button
    li.append(deleteButton);
    // Append the li element to the unordered list
    list.append(li);

    // Add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', () => {
        list.removeChild(li); // Removes the li element
        deleteChapter(li.textContent); // New function that remove the chapter from the array and local storage
        input.focus();
    });
}

// Define setChapterList function
function setChapterList() {
    window.localStorage.setItem('topBOMList', JSON.stringify(chaptersArray));
}

// Define getChapterList function
function getChapterList() {
    return JSON.parse(window.localStorage.getItem('topBOMList'));
}

// Define deleteChapter function
function deleteChapter(chapter) {
    chapter = chapter.slice(0 , chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) !== chapter);
    setChapterList();
}