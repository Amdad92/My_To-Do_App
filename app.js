const taskList = ["Wash Dishes", "Hand washes"];
let taskBtn = document.getElementById('js-task-btn');
taskBtn.addEventListener("click", function () {
    addTodo();
});

function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        const todo = taskList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.getElementById('js-taskInput');
    const name = inputElement.value;
    taskList.push(name);
    console.log(taskList);
    inputElement.value = '';
    renderTodoList();
}