counter = 0;  // Used to generate ID's

// Add a new entry to the list
function Add() {
  if(document.getElementById("entry").value == ""){
    alert("Please enter some text");
    return;
  }
  // Create container which will contain the new entry
  const new_entry = document.createElement("article");
  new_entry.id = String(counter);

  const element = document.getElementById("list");
  element.appendChild(new_entry);   // Add the container to the entry lists

  // Create container which will hold the text of the entry
  const new_text = document.createElement("p");
  new_text.id = String(counter).concat("text");
  new_entry.appendChild(new_text);
  new_text.innerHTML = document.getElementById("entry").value;

  document.getElementById("entry").value = "";   //empty the input

  // Create container which will hold the buttons of the entry
  const buttons = document.createElement("div");
  buttons.id = String(counter).concat("buttons");
  new_entry.appendChild(buttons);

  // Create the delete button
  const delete_button = document.createElement("button");
  delete_button.innerHTML = "Delete";
  delete_button.name = String(counter);
  buttons.appendChild(delete_button);

  // Delete button functionality
  delete_button.onclick = function () {
    document.getElementById(this.name).remove();
    
  };

  // Create the edit button
  const edit_button = document.createElement("button");
  edit_button.innerHTML = "Edit";
  edit_button.name = String(counter).concat("text");
  buttons.appendChild(edit_button);

  // Edit button functionality
  edit_button.onclick = function () {
    const new_text = prompt("Please enter new entry");
    document.getElementById(this.name).innerHTML =  new_text;
  }


  // button to change background to red
  const red = document.createElement("button");
  red.innerHTML = "red";
  red.name = String(counter).concat("text");
  buttons.appendChild(red);

  // Red button functionality
  red.onclick = function(){
    change_color(red.innerHTML, red.name)
  }


  // button to change background to blue
  const blue = document.createElement("button");
  blue.innerHTML = "blue";
  blue.name = String(counter).concat("text");
  buttons.appendChild(blue);

  // Blue button functionality
  blue.onclick = function(){
    change_color(blue.innerHTML, blue.name)
  }

  // button to change background to green
  const green = document.createElement("button");
  green.innerHTML = "green";
  green.name = String(counter).concat("text");
  buttons.appendChild(green);

  // Green button functionality
  green.onclick = function(){
    change_color(green.innerHTML, green.name)
  }


  counter++;  // Increment the counter to generate a new ID for further contianers
}

document.getElementById("add").addEventListener("click", Add);    // Make the add button call the above function


// Function to change the background color of the text container
function change_color(color, id){
  document.getElementById(id).style.backgroundColor = color;
};