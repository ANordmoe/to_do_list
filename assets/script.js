// Show an unordered list of to do's 
// Show an input to enter a new to do 
// Show a button to add a to do. When the button is clicked: 
// The text from the input box is used to add a list item to the 
// bottom of the list 
// The text from the input box is cleared out.

// Extra Credit: - When a list item is clicked, cross it out, 
// then remove it after 1 second.

let toDoList = document.querySelector('#list');

console.log(toDoList.children);

function removeClicked(element) {  
    element.remove()
};
  
let button = document.getElementById("addButton");
button.onclick = function() {
    
    let text = document.getElementById("inputId").value; 

    let newItem = document.createElement('li');
    newItem.innerHTML = text;
    newItem.className = "list-group-item";
    //newItem.onClick(removeClicked());
    document.getElementById("list").appendChild(newItem);
};

// When the user clicks on a list item, it is removed
        // let selectedItem = document.querySelector('.list-group-item');
        // console.log(selectedItem, "this is the selectedItem value");





