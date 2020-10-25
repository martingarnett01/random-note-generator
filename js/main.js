const notesNatural = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const notesAccidentals = ['A♯', 'B♭', 'C♯', 'D♯', 'E♭', 'F♯', 'G'];
const notesEnharmonic = ['A♭', 'C♭', 'D♭', 'F♭', 'G'];

const accidentalsCheckbox = document.querySelector('#accidentals');
const enharmonicCheckbox = document.querySelector('#enharmonic');
const noteBtn = document.querySelector('button');
const noteText = document.querySelector('.chosen-note');

function generateRandomNote () {
  let currentNote = noteText.innerText;
  
  // Compile our notes based on checkboxes
  let notes = [...notesNatural];
  
  if (accidentalsCheckbox.checked) {
    notes.push(...notesAccidentals);
  }
  
  if (enharmonicCheckbox.checked) {
    notes.push(...notesEnharmonic);
  }
  
  // Generate a random number between 0 and total number of notes
  
  let randomNote = notes[Math.floor(Math.random() * Math.floor(notes.length))];;
  
  if (randomNote === currentNote) {
    randomNote = notes[Math.floor(Math.random() * Math.floor(notes.length))];
  }
  
  // Update the note based on random number
  noteText.innerText = randomNote;
}

function disableEnharmonic () {
  if (!accidentalsCheckbox.checked) {
    enharmonicCheckbox.checked = false;
    enharmonicCheckbox.disabled = true;
  } else {
    enharmonicCheckbox.disabled = false;
  }
}

noteBtn.addEventListener('click', generateRandomNote);
accidentalsCheckbox.addEventListener('click', disableEnharmonic);

disableEnharmonic();