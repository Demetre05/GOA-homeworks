const container = document.querySelector("main");
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
let comCount = 0;
let actCount = 5;

let todos = [
    {
        id: 1,
        text: "Learn JavaScript",
        priority: "high",
        completed: false
    },

    {
        id: 2,
        text: "Learn HTML",
        priority: "high",
        completed: false
    },

    {
        id: 3,
        text: "Learn CSS",
        priority: "low",
        completed: false
    },

    {
        id: 4,
        text: "Learn Python",
        priority: "medium",
        completed: false
    },

    {
        id: 5,
        text: "Make a project",
        priority: "high",
        completed: false
    }
];

const structure = (id, text, priority) => {
    container.innerHTML += `
    <div class="task" id="task${id}">
        <h3>${text}</h3>
        <div>
            <h3>${priority}</h3>
            <button onclick="completeTask(event)">Complete</button>
            <button onclick="deleteTask(event)">Delete</button>
        </div>
    </div>`
};

const addTask = () => {
    let id = todos.length + 1;
    let text = prompt("Task name: ");
    let priority = prompt("priority: ");
    let completed = false;

    todos.push({id, text, priority, completed});
    structure(id, text, priority);
    all.innerHTML = `all (${todos.length})`;
    active.innerHTML = `active (${++actCount})`;
};

const completeTask = e => {
    e.target.style.backgroundColor = "lightgreen";
    let completedTask = todos.find(i => e.target.parentElement.parentElement.id === `task${i.id}`);
    completedTask.completed = true;
    completed.innerHTML = `completed (${++comCount})`;
    active.innerHTML = `active (${--actCount})`;
};

const deleteTask = (e) => {
    e.target.parentElement.parentElement.remove();
    let deletedTask = todos.find(i => e.target.parentElement.parentElement.id === `task${i.id}`);
    todos.splice(todos.indexOf(deletedTask), 1);
    all.innerHTML = `all (${todos.length})`;
    deletedTask.completed === true ? completed.innerHTML = `completed (${--comCount})` : active.innerHTML = `active (${--actCount})`;
};

const deleteAll = () => {
    todos = [];
    container.innerHTML = "";
    comCount = 0;
    actCount = 0;
    all.innerHTML = `all (${todos.length})`;
    completed.innerHTML = `completed (${comCount})`;
    active.innerHTML = `active (${actCount})`;
};

todos.forEach(i => {structure(i.id, i.text, i.priority)});