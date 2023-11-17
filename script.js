function getRandomColor() {
  const COLORS = [
    "#a2d1fc", // index: 0
    "#ffc2cd", //        1
    "#97aedc", //        2
    "#d967ae", //        3
    "#b7cf8e", //        4
    "#d5edc2", //        5
  ];

  // return a random color from the COLORS array
}

function sendNote() {
  /*
  1. take the note from the input box
  2. clear the note from the input box.
  3. add the note at the bottom of our notes list
  */
  const inputElement = document.getElementById("input");
  const noteContent = inputElement.value;
  inputElement.value = "";

  // li == list
  let newNote = document.createElement("li");
  newNote.innerHTML = noteContent;
  let allNotes = document.getElementById("notes");
  allNotes.appendChild(newNote);
}
