const tasks = [];

const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

function renderList() {}

function markTaskAsComplete(taskId) {}

function deleteTask(taskId) {}

function addTask(task) {}

function showNotification(text) {
    window.alert(text);
}

function handleInputKeyPress(e) {
    if(e.key=='Enter') {
        const text = e.target.value;
        console.log(text);

        if(!text) {
            showNotification('Task text cannot be empty');
            return;
        }

        const task = {
        text,
        id: Date.now().toString(),
        done: false,
        };

        e.target.value='';
        addTask(task);
    }
}

addTaskInput.addEventListener('keyup', handleInputKeyPress);