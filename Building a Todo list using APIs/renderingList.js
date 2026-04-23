let tasks = [];

const tasksList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

function addTaskToDOM(task) {
    const li = document.createElement('li');

    li.innerHTML = `
    <input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''} class="custom-checkbox">
    <label for="${task.id}">${task.text} </label>   
    <img src="trash_1086991.png" class="delete" data-id="${task.id}" />
   `;

    tasksList.append(li);
}

function renderList() {
    tasksList.innerHTML = '';

    for (let i=0; i<tasks.length; i++) {
        addTaskToDOM(tasks[i]);
    }

    tasksCounter.innerHTML = tasks.length;
}

function addTask(task) {
    if(task) {
        tasks.push(task);
        renderList();
        showNotification('Task added successfully!!');
        return;
    }

    showNotification('Task cannot be added');
    return;
}

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
    const newTask = tasks.filter(function (task) {
        return task.id!==taskId;
    });

    tasks = newTask;
    renderList();
    showNotification('Task deleted successfully');
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