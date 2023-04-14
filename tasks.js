let tasks = [
    {
        id: 1,
        nome: 'Dar banho no cachorro',
        toDo: false
    },
    {
        id: 2,
        nome: 'Visto na esquina',
        toDo: true
    }

]

const addTasksInput = document.getElementById("tasks_input");
const addTasksButton = document.getElementsByClassName("button")[0];
const tasksList = document.getElementById("tasks_list");

function addTask(event) {
    event.preventDefault();
    console.log("Add Task");
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