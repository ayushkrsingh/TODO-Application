

const submitButton = document.querySelector(".submit-button");
const form = document.querySelector(".form-body");
const todoInput = document.querySelector(".todo-title-input");
const todoList = document.getElementById("list");
const doneCheckbox = document.querySelector(".checkbox");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e)
    console.log(todoInput.value)
    const newLi = document.createElement("li");
    newLi.classList.add(".list-item")
    const newInnerHtml = `<span class="todo-text">${todoInput.value}</span>
                    <div class="list-actions">
                        <input type="checkbox" class="checkbox"/>
                        <span class="remove">×</span>
                    </div>`;
    newLi.innerHTML = newInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click", (e)=>{
    console.log(e.target);
    if(e.target.classList.contains("checkbox")){
        const li = e.target.parentNode.parentNode;
        console.log(li)
        const todoText = li.querySelector(".todo-text");
        todoText.classList.toggle("decor")
    }
    if(e.target.classList.contains("remove")){
        const li = e.target.parentNode.parentNode;
        li.remove()
    }
})