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