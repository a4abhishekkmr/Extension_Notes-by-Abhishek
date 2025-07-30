document.addEventListener('DOMContentLoaded', () => {
  const noteArea = document.getElementById('note');
  const saveBtn = document.getElementById('save');

  // Load saved note from chrome.storage
  chrome.storage.local.get('note', (data) => {
    if (data.note) {
      noteArea.value = data.note;
    }
  });

  // Save note on button click
  saveBtn.addEventListener('click', () => {
    chrome.storage.local.set({note: noteArea.value}, () => {
      alert('Note saved!');
    });
  });
});
