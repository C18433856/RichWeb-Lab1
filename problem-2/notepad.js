// Add an element to the list

counter = 0;

function Add() {
  // Create container which will contain the new entry
  const new_entry = document.createElement("div");
  new_entry.id = String(counter);

  const element = document.getElementById("list");
  element.appendChild(new_entry);   // Add the container to the entry lists

  document.getElementById("entry").value = "";   //empty the input



  const new_text = document.createElement("div");
  new_text.id = "text" + String(counter);

  const buttons = document.createElement("div");
  buttons.id = "buttons" + String(Counter);
  element.appendChild(buttons);

  const delete_button = document.createElement("button");
  delete_button.innerHTML = "Delete";
  delete_button.name = String(counter);
  buttons.appendChild(delete_button);

  delete_button.onclick = function () {

    document.getElementById(this.name).remove();
    
  };

  const edit_button = document.createElement("button");
  edit_button.innerHTML = "Edit";
  delete_button.name = String(counter);
  edit_button.onclick = function () {
    const new_text = prompt("Please enter new entry");
    document.getElementById(this.name).innerHTML =  new_text;
  }
  buttons.appendChild(edit_button);

  // button to change background to red
  const red = document.createElement("button");
  red.innerHTML = "red";
  red.name = String(counter);
  red.onclick = function(){
    change_color(red.innerHTML, red.name)
  }
  buttons.appendChild(red);

    // button to change background to blue
  const blue = document.createElement("button");
  blue.innerHTML = "blue";
  blue.name = String(counter);
  blue.onclick = function(){
    change_color(blue.innerHTML, blue.name)
  }
  buttons.appendChild(blue);


    // button to change background to green
  const green = document.createElement("button");
  green.innerHTML = "green";
  green.name = String(counter);
  green.onclick = function(){
    change_color(green.innerHTML, green.name)
  }
  buttons.appendChild(green);

  counter++;
}

document.getElementById("add").addEventListener("click", Add);



function change_color(color, id){
  document.getElementById(id).style.backgroundColor = color;
};