function uid(){
    return Date.now().toString(16) + Math.random().toString(16).substring(2);

}

let tasks = [
    {
        id: uid(),
        nome: 'Dar banho no cachorro',
        toDo: false
    },
    {
        id: uid(),
        nome: 'Visto na esquina',
        toDo: true
    }

]

const addTasksInput = document.getElementById("tasks_input");
const addTasksButton = document.getElementsByClassName("button")[0];
const tasksList = document.getElementById("tasks_list");


function createNewTaskElement(taskName, taskId) {

    let task = document.createElement("li");
    task.classList.add("task");
    task.classList.add("todo");
    task.setAttribute("id", taskId);

    let leftContent = document.createElement("div");
    leftContent.classList.add("left_content")

    let todoIcon = document.createElement("i");
    todoIcon.classList.add("ph-duotone");
    todoIcon.classList.add("ph-circle-dashed");
    todoIcon.classList.add("check_btn");
    todoIcon.addEventListener("click", completeTask);

    let doneIcon = document.createElement("i");
    doneIcon.classList.add("ph-duotone");
    doneIcon.classList.add("ph-check-circle");
    doneIcon.classList.add("check_btn");
    doneIcon.classList.add("hidden");
    doneIcon.addEventListener("click", incompleteTask);

    let name = document.createElement("p");
    name.innerHTML = taskName;

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("ph-duotone");
    deleteIcon.classList.add("ph-trash");
    deleteIcon.classList.add("delete_btn");
    deleteIcon.addEventListener("click", deleteTask);

    leftContent.appendChild(todoIcon);
    leftContent.appendChild(doneIcon);
    leftContent.appendChild(name);

    task.appendChild(leftContent);
    task.appendChild(deleteIcon);

    return task;


}

function addTask(event) {
    event.preventDefault();
    console.log("Add Task");

    const newTaskName = addTasksInput.value;

    const newTaks = {
        id: uid,
        nome: newTaskName,
        toDo: true
    }

    tasks.push(newTaks);
    const taskElement = createNewTaskElement(newTaks.nome, newTaks.id);
    tasksList.appendChild(taskElement);
}

function deleteTask(event){
    const taskToDeleteId = event.target.parentNode.id;
    const taskToDelete = document.getElementById(taskToDeleteId);

    const taskWithoutDeletedOne = tasks.filter((
        task) => {
            return task.id !== taskToDeleteId;
        }
    );

    tasks = taskWithoutDeletedOne;
    tasksList.removeChild(taskToDelete);
}

function completeTask(event){
    const todoIcon = event.target;
    todoIcon.classList.add("hidden");

    const text = todoIcon.parentNode.childNodes[2];
    text.classList.add("risked");

    const taskToCompleteId = todoIcon.parentNode.parentNode.id;
    const taskToComplete = document.getElementById(taskToCompleteId);

    taskToComplete.classList.add("done");
    taskToComplete.classList.remove("todo");

    const doneIcon = todoIcon.parentNode.childNodes[1];
    doneIcon.classList.remove("hidden");

    tasks.find((item) => {
        if (item.id === taskToCompleteId){
            item.toDo = false;
        }
    })
}

function incompleteTask(event){
    const doneIcon = event.target;
    doneIcon.classList.add("hidden");

    const text = doneIcon.parentNode.childNodes[2];
    text.classList.remove("risked");

    const taskToIncompleteId = doneIcon.parentNode.parentNode.id;
    const taskToIncomplete = document.getElementById(taskToIncompleteId);

    taskToIncomplete.classList.add("todo");
    taskToIncomplete.classList.remove("done");

    const todoIcon = doneIcon.parentNode.childNodes[0];
    todoIcon.classList.remove("hidden");

    tasks.find((item) => {
        if (item.id === taskToIncompleteId){
            item.toDo = true;
        }
    })
}


for(const task of tasks) {
    const tasksItem = createNewTaskElement(task.nome, task.id);
    tasksList.appendChild(tasksItem);
}