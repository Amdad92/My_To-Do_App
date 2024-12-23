
const taskList = [{
    name: "Wash Dishes",
    dueDate:"2024-12-18"
},{
    name:"Hand washes",
    dueDate:"2024-12-18"
}];
let taskBtn = document.getElementById('js-task-btn');
taskBtn.addEventListener("click", function () {
 addTodo();
});

renderTodoList();
function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        const todoObject = taskList[i];
        //const name=todoObject.name;
        //const dueDate=todoObject.dueDate;
        const{name,dueDate}=todoObject;

        const html = `
            <p>
                ${name} ${dueDate} 
                <button onclick="taskList.splice(${i},1);
                renderTodoList();
                ">Delete</button>
            </p>
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.getElementById('js-taskInput');
    const name = inputElement.value;
    const dateInputElement=document.querySelector(".js-due-date-input");
    const dueDate=dateInputElement.value;
    taskList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    });
    console.log(taskList);
    inputElement.value = '';
    renderTodoList();
}