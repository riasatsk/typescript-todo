const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const newTodo = document.getElementById("newTodo") as HTMLInputElement;
const list = document.getElementById("list") as HTMLUListElement;

interface Todo {
  id: number;
  text: string;
}

let todos: Todo[] = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos") as string)
  : [];
list.innerHTML = todos
  .map(
    (t) => `<li>${t.text}<button class='deleteBtn' onclick='deleteTodo(${t.id})'>❌</button></li>`
  )
  .join("");
function refresh() {
  list.innerHTML = todos
    .map(
      (t) =>
        `<li>${t.text}<button class='deleteBtn' onclick='deleteTodo(${t.id})'>❌</button></li>`
    )
    .join("");
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(id: number) {
  todos = todos.filter((t) => t.id != id);
  refresh();
}

addBtn.addEventListener("click", () => {
  if (newTodo.value !== "") {
    todos.push({
      id: todos.length + 1,
      text: newTodo.value,
    });
    newTodo.value = "";
    refresh();
  }
});
