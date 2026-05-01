let tasks = [];

const addTaskInput = document.getElementById('add');
const taskList = document.getElementById('list');
const tasksCounter = document.getElementById('tasks-counter');

function addTaskToDOM(task) {
    const li = document.createElement('li');

    li.innerHTML = `
    <input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''} class="custom-checkbox">
    <label for="${task.id}">${task.text} </label>
    <img src="trash_1086991.png" class="delete" data-id="${task.id}"/>
    `;

    taskList.append(li);
}

function renderList() {
    taskList.innerHTML = '';

    for (let i=0; i<tasks.length; i++) {
        addTaskToDOM(tasks[i]);
    }
}

function addTask(task) {
    if(task) {
        tasks.push(task);
        renderList();
        showNotification('Task has been added!!');
        return;
    }

    showNotification('Task cannot be added!!');
    return;
}

function deleteTask(taskId) {
    const newTasks = tasks.filter(function (task) {
        return task.id!==taskId;
    });

    tasks = newTasks;
    renderList();
    showNotification('Task has been deleted!!');
    return;
}

function showNotification(text) {
    window.alert(text);
}

function toggleTask(taskId) {
    const latestTask = tasks.filter(function (task) {
        return task.id===taskId;
    });

    if(latestTask>0) {
    const currentTask = latestTask[0];
    currentTask.done = !currentTask.done;
    renderList();
    showNotification('Task toggled successfully!!');
    return;
    }

    showNotification('Could not toggle the task!!');
    return;
}

function handleInputKeyPress(e) {
    if(e.key=='Enter') {
        const text = e.target.value;
        console.log(text);

        if(!text) {
            showNotification('Task Input cannot be Empty!!');
            return;
        }

        const task = {
            text: text,
            id: Date.now().toString(),
            done: false,
        };

        e.target.value = '';
        addTask(task);
    }
}


function handleClickListener(e) {
    const target = e.target;

    if(target.className==='delete') {
    const taskId = target.dataset.id;
    deleteTask(taskId);
    return;
    } else if(target.className==='custom-checkbox') {
    const taskId = target.id;
    toggleTask(taskId);
    return;
    }
}

function initializeApp() {
addTaskInput.addEventListener('keyup', handleInputKeyPress);
document.addEventListener('click', handleClickListener);
}

initializeApp();