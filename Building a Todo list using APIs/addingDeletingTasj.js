let tasks = [];

const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

function renderList() {}

function markTaskAsComplete(taskId) {}

function deleteTask(taskId) {
    const newTasks = tasks.filter(function (task) {
        return task.id!==taskId;
    });

    tasks = newTasks;
    renderList();
    showNotification('Task deleted successfully!!');
}

function addTask(task) {
    if(task) {
        tasks.push(task);
        renderList();
        showNotification('Task added successfully');
        return;
    }

    showNotification('Task cannot be added');
    return;
}

function showNotification(text) {
    window.alert(text);
}

function handleInputKeyPress(e) {
    if(e.key=='Enter') {
        const text = e.target.value;
        console.log(text);

        if(!text) {
            showNotification('Task Input cannot be empty');
            return;
        }

        const task = {
            text: text,
            id: Date.now().toString(),
            done: false,
    };
        addTask(task);
}
}

addTaskInput.addEventListener('keyup', handleInputKeyPress);