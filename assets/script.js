// Show an unordered list of to do's 
// Show an input to enter a new to do 
// Show a button to add a to do. When the button is clicked: 

// The text from the input box is cleared out.



let toDoList = document.querySelector('#list');

console.log(toDoList.children);

// When the user clicks on a list item, it is removed
function removeClicked(itemClicked) {  
    itemClicked.parentNode.removeChild(itemClicked);
};
  
let button = document.getElementById("addButton");
button.onclick = function() {
    
    // "The text from the input box is used to add a      
    //  list item to the bottom of the list"
    let text = document.getElementById("inputId").value; 
    let newItem = document.createElement('li');
    newItem.innerHTML = text;

    //(making them the same as the other li's)
    newItem.className = "list-group-item";
    newItem.setAttribute('onclick', 'removeClicked(this)');

    //adding them to the list
    document.getElementById("list").appendChild(newItem);

    // The text from the input box is cleared out.
    document.querySelector('#inputId').value = "";
};

// Extra Credit: - When a list item is clicked, cross it out, 
// then remove it after 1 second.