const addToDoButton = document.getElementById("addToDo");
const inputField = document.getElementById("inputField");
const toDoContainer = document.getElementById("toDoContainer");

addToDoButton.addEventListener('click', () => {

  if (inputField.value === '') {
    return;
  }

  const p = document.createElement('p');

  p.textContent = inputField.value;
  p.classList.add('paragraph-styling');

  toDoContainer.appendChild(p);

  inputField.value = "";

  p.addEventListener('click', () => {
    p.style.textDecoration = 'line-through';
  })

  p.addEventListener('dblclick', () => {
    toDoContainer.removeChild(p);
  })
})
