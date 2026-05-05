import store from "./store.js"
import render from "./render.js"
render();


const submitButton = document.querySelector(".submit-button");
const form = document.querySelector(".form-body");
const todoInput = document.querySelector(".todo-title-input");
const todoList = document.getElementById("list");
const doneCheckbox = document.querySelector(".checkbox");




////////   working TODO----------------


// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const newLi = document.createElement("li");
//     newLi.classList.add(".list-item")
//     const newInnerHtml = `<span class="todo-text">${todoInput.value}</span>
//                     <div class="list-actions">
//                         <input type="checkbox" class="checkbox"/>
//                         <span class="remove">×</span>
//                     </div>`;
//     newLi.innerHTML = newInnerHtml;
//     todoList.append(newLi);
//     todoInput.value = "";
// });

// todoList.addEventListener("click", (e)=>{
//     console.log(e.target);
//     if(e.target.classList.contains("checkbox")){
//         const li = e.target.parentNode.parentNode;
//         const todoText = li.querySelector(".todo-text");
//         todoText.classList.toggle("decor")
//     }
//     if(e.target.classList.contains("remove")){
//         const li = e.target.parentNode.parentNode;
//         li.remove()
//     }
// })

// 89888888888888888888888888888888888888888888888888888888888888888888888888



////////   ADDING store elements using LOOPSSSS -------------



// console.log(store.todos[0])

// for(let i=0; i<store.todos.length; i++){
//     const newLi = document.createElement("li");
//     newLi.classList.add(".list-item")
//     const newInnerHtml = `<span class="todo-text">${store.todos[i].title}</span>
//                 <div class="list-actions">
//                     <input type="checkbox" class="checkbox"/>
//                     <span class="remove">×</span>
//                 </div>`;
//     newLi.innerHTML = newInnerHtml;
//     todoList.append(newLi);
    
//     const currentCheckbox = newLi.querySelector(".checkbox");
//     if(store.todos[i].completed){
//         currentCheckbox .checked = true;
//     }
// }



////// 5555555555555555555555555555555555555555555555555555555555555555555555555555