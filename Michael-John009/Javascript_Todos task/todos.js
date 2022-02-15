// Create a "close" button and append it to each list item
const todosNodeList = document.getElementsByTagName("LI");
var i = 0;
for (i = 0; i < todosNodeList.length; i++) {
  // create an element called span
  const span = document.createElement("SPAN");
  //create a textnode
  const txt = document.createTextNode("\u00D7");
  //Give the span element a class name 
  span.className = "close";
  //append the textnode to span
  span.appendChild(txt);
  //Now append the span element to the todosnodelist gotten earlier.
  todosNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("newInput").value;
  const newText = document.createTextNode(inputValue);
  li.appendChild(newText);
  const errorMsg = document.getElementById ('errorMsg');
  if (inputValue === '') {
    errorMsg.innerHTML = 'This field cannot be empty';
    setTimeout(() =>errorMsg.remove(),3000);
  } else {
    document.getElementById("myUList").appendChild(li);
  }
  document.getElementById("newInput").value = "";
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}
