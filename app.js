var addBtn = document.getElementById("addBtn");
var newTodo = document.getElementById("newTodo");
var list = document.getElementById("list");
var todos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
list.innerHTML = todos
    .map(function (t) { return "<li>".concat(t.text, "<button class='deleteBtn' onclick='deleteTodo(").concat(t.id, ")'>\u274C</button></li>"); })
    .join("");
function refresh() {
    list.innerHTML = todos
        .map(function (t) {
        return "<li>".concat(t.text, "<button class='deleteBtn' onclick='deleteTodo(").concat(t.id, ")'>\u274C</button></li>");
    })
        .join("");
    localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteTodo(id) {
    todos = todos.filter(function (t) { return t.id != id; });
    refresh();
}
addBtn.addEventListener("click", function () {
    if (newTodo.value !== "") {
        todos.push({
            id: todos.length + 1,
            text: newTodo.value,
        });
        newTodo.value = "";
        refresh();
    }
});
