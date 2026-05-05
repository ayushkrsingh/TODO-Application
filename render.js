import store from "./store.js";

function render() {
    const todoUl = document.getElementById("list");
    const ListItems = store.todos.map((todo) => `<li class="list-item" data-id="${todo.id}">
                    <span class="todo-text ${todo.completed ? "decor" : ""}">${todo.title}</span>
                    <div class="list-actions">
                        <input type="checkbox" class="checkbox" ${todo.completed ? "checked" : ""}/>
                        <span class="remove">×</span>
                    </div>
                </li>`).join("");
    // console.log(ListItems)
    todoUl.innerHTML = ListItems;
}

export default render;