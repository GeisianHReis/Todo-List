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
}

function deleteTask(event){
    console.log("delete Task")
}

function completeTask(event){
    console.log("complete Task")
}

function incompleteTask(event){
    console.log("incomplete Task")
}