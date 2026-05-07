let tasks = [];

const addTaskInput = document.getElementById('add');
const taskList = document.getElementById('li');
const taskCounter = document.getElementById('tasks-counter');

function fetchTodos() {
    // GET Request
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        tasks = data.slice(0,10);
        renderList();
    }).catch((error) => {
        console.log(error);
    });
}

function addTaskToDOM(task) {
    const li = document.createElement('li');

    li.innerHTML = `
    <input type="checkbox" class="custom-checkbox" id="${task.id}" ${task.completed ? 'checked' : ''}>
    <label for="${task.id}"> ${task.title} </label>
    <img src="trash_1086991.png" data-id="${task.id}" class="delete"/>
    `

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
        showNotification('Task has been added successfully!!');
        return;
    }

    showNotification('Task cannot be added!!');
    return;
}

function deleteTask(taskId) {
    const newTask = tasks.filter(function (task) {
        return task.id!==Number(taskId);
    });

    tasks = newTask;
    renderList();
    showNotification('Task has been deleted successfully!!');
    return;
}

function toggleTask(taskId) {
    const latestTask = tasks.filter(function (task) {
        return task.id===Number(taskId);
    });

    if(latestTask.length>0) {
        const currentTask = latestTask[0];
        currentTask.completed = !currentTask.completed;
        renderList();
        showNotification('Task toggled successfully!!');
        return;
    }

    showNotification('Task could not be toggled!!');
    return;
}


function handleInputKeyPress(e) {
    if(e.key=='Enter') {
        const text = e.target.value;

        if(!text) {
            showNotification('Task Input cannot be empty!!');
            return;
        }

        const task = {
            title: text,
            id: Date.now(),
            completed: false,
        };

        e.target.value='';
        addTask(task);
    }
}

function handleClickEvent(e) {
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

function showNotification(text) {
    window.alert(text);
}

function initializeApp() {
fetchTodos();
addTaskInput.addEventListener('keyup', handleInputKeyPress);
document.addEventListener('click', handleClickEvent);
}

initializeApp();