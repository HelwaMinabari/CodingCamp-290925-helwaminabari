console.log("hello word");

// Array untuk menyimpan todo
let todos = [];

// Ambil elemen input
const todoInput = document.getElementById("todo-input");
const todoDate = document.getElementById("todo-date");
const todoListElement = document.getElementById("todo-list");

// Validasi input
function validateInput(todo, date) {
  if (todo === "" || date === "") {
    alert("Please fill in all fields.");
    return false;
  }
  return true;
}

// Fungsi menambah todo
function addToDo() {
  const todoValue = todoInput.value;
  const dateValue = todoDate.value;

  if (validateInput(todoValue, dateValue)) {
    todos.push({ task: todoValue, date: dateValue, status: "pending" });
    alert(`To Do berhasil ditambahkan: ${todoValue} pada ${dateValue}`);
    renderToDo();
    todoInput.value = "";
    todoDate.value = "";
  }
}

// Fungsi render todo
function renderToDo() {
  todoListElement.innerHTML = "";
  todos.forEach(todo => {
    todoListElement.innerHTML += `<li>${todo.task} - ${todo.date}</li>`;
  });
}

// Fungsi hapus semua
function clearAll() {
  todos = [];
  renderToDo();
}

// Fungsi filter (contoh sederhana: hanya tampilkan todo dengan status pending)
function filterToDo() {
  const filtered = todos.filter(todo => todo.status === "pending");
  todoListElement.innerHTML = "";
  filtered.forEach(todo => {
    todoListElement.innerHTML += `<li>${todo.task} - ${todo.date}</li>`;
  });
}
