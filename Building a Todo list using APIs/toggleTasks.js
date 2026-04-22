let tasks = [];

const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

function renderList() {}

function toggleTask(taskId) {
    const latestTask = tasks.filter(function (task) {
        return task.id===taskId;
    });

    if(latestTask.length>0) {
        const currentTask = latestTask[0];
        currentTask.done = !currentTask.done;
        renderList();
        showNotification('Task toggled successfully!!');
        return;
    }

    showNotification('Could not toggle the task');
    return;
}

function deleteTask(taskId) {
    const newTasks = tasks.filter(function (task) {
        return task.id!==taskId;
    });

    tasks = newTasks;
    renderList();
    showNotification('Task deleted successfully!!');
    return;
}

function addTask(task) {
    if(task) {
        tasks.push(task);
        renderList();
        showNotification('Task Added successfully!!');
        return;
    }

    showNotification('Task cannot be added!!');
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
            showNotification('Task Input cannot be empty!!');
            return;
        }

        const task = {
            text: text,
            id: Date.now().toString(),
            done: false,
        };

        e.target.value='';
        addTask(task);
    }
}

addTaskInput.addEventListener('keyup', handleInputKeyPress);