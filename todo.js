const addToDoButton = document.getElementById("addToDo");
const inputField = document.getElementById("inputField");
const toDoContainer = document.getElementById("toDoContainer");

let toDos = JSON.parse(localStorage.getItem("todos"));
if (toDos === null) {
  toDos = [];
} else {
  displayToDos();
}

document.addEventListener("visibilitychange", () => {
  localStorage.setItem("todos", JSON.stringify(toDos));
})

addToDoButton.addEventListener('click', () => {

  if (inputField.value === '') {
    return;
  }

  toDos.push({ desc: inputField.value, done: false });
  inputField.value = "";

  displayToDos();
})

function displayToDos() {

  while (toDoContainer.lastChild) {
    toDoContainer.removeChild(toDoContainer.lastChild);
  }

  let i = 0;
  for (todoItem of toDos) {
    const p = document.createElement('p');
    const btn = document.createElement('button');
    const container = document.createElement('div');

    btn.textContent = 'X';
    btn.classList.add('delete-button');

    const fn = (function(x) {
      return function() {
        toDos.splice(x, 1)
        displayToDos();
      }
    })(i)

    btn.addEventListener('click', fn);

    container.classList.add('todo-item');

    p.textContent = todoItem.desc;
    p.classList.add('paragraph-styling');

    if (todoItem.done) {
      p.classList.add('todo-done');
    }

    const toggleDone = (function(x) {
      return function() {
        toDos[x].done = toDos[x].done ? false : true;
        p.classList.toggle('todo-done');
      }
    })(i)

    p.addEventListener('click', toggleDone);

    container.appendChild(p);
    container.appendChild(btn);
    toDoContainer.appendChild(container);

    i++;
  }
}

