const formEl = document.querySelector("form");
const addTaskEl = document.querySelector("#addTask");
const tasksEl = document.querySelector("#tasks");

// formEl.addEventListener("submit", handleSubmitDOM);
formEl.addEventListener("submit", handleSubmitArray);
tasksEl.addEventListener("click", handleDeleteArray);

// Quem manda é o DOM
function handleSubmitDOM(event) {
  event.preventDefault();

  const value = addTaskEl.value.trim();

  if (!value) {
    alert("Campo vazio");
    return;
  }

  const li = document.createElement("li");
  const button = document.createElement("button");
  const span = document.createElement("span");

  span.textContent = value;

  button.classList.add("delete");
  button.innerText = "Apagar";

  li.appendChild(span);
  li.appendChild(button);

  tasksEl.appendChild(li);

  //   tasksEl.innerHTML += `<p>${addTaskEl.value}</p>`;

  addTaskEl.value = "";
}

function handleDeleteDOM(event) {
  const deleteBtn = event.target.closest("button.delete");
  if (!deleteBtn) return;

  const li = deleteBtn.closest("li");
  li.remove();
}

// Quem manda é o array
let tasks = [];
function handleSubmitArray(event) {
  event.preventDefault();

  const value = addTaskEl.value.trim();
  if (!value) {
    alert("Campo vazio");
    return;
  }

  tasks.push({
    id: crypto.randomUUID(),
    text: value,
  });
  addTaskEl.value = "";

  renderTasks();
}

function handleDeleteArray(event) {
  const deleteBtn = event.target.closest("button.delete");
  if (!deleteBtn) return;

  const li = deleteBtn.closest("li");
  const index = li.dataset.id;

  // remover do array
  // tasks.splice(index, 1);

  // remove do array por id (React-like)
  tasks = tasks.filter((task) => task.id !== index);

  renderTasks();
}

function renderTasks() {
  tasksEl.innerHTML = "";

  tasks.forEach((item, index) => {
    const li = document.createElement("li");
    // li.dataset.id = index;
    li.dataset.id = item.id;

    const span = document.createElement("span");
    span.textContent = item.text;

    const button = document.createElement("button");
    button.classList.add("delete");
    button.textContent = "Apagar";

    li.append(span, button);

    tasksEl.appendChild(li);
  });
}
