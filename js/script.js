const tasks = ["task1", "task2", "task3", "task4"];

function displayTasks() {
    console.clear();
    tasks.forEach( (task, index) => {
    console.log(`${index + 1} => TaskName: ${task}`)
})
}
// displayTasks()

// add new task
function addTask() {
    const newTask = prompt("Add New Task");
    tasks.push(newTask);
    console.log (displayTasks())
}

// delete task
function deleteTask() {
    const deleteTask = prompt("enter task number to delete");
    tasks.splice(deleteTask - 1, 1);
    console.log (displayTasks())
}

// edit task
function editTask() {
    const selectedIndex = prompt("Enter Task Number to update");
    const updatedTask = prompt("Enter New Task Name");
    tasks.splice(selectedIndex - 1, 1, updatedTask);
    console.log (displayTasks())
}