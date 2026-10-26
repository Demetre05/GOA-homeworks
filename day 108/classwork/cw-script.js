const main = document.querySelector("main");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const renderTasks = () => {
    tasks.forEach(t => {
        let color = t[1] ? "3px solid green" : "1px solid black";
        main.innerHTML += `
        <div class="task" style="border: ${color}">
            <h3>${t[0]}</h3>
            <div>
                <button onclick="completeTask(event)">Complete</button>
                <button onclick="deleteTask(event)">Delete</button>
            </div>
        </div>`
    })
};

const completeTask = e => {
    let completedTask = tasks.find(t => e.target.parentElement.parentElement.querySelector("h3").innerHTML === t[0]);
    completedTask[1] = true;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    main.innerHTML = "";
    renderTasks();
};

const deleteTask = e => {
    let deletedTask = tasks.findIndex(t => e.target.parentElement.parentElement.querySelector("h3").innerHTML === t[0]);
    tasks.splice(deletedTask, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    main.innerHTML = "";
    renderTasks();
};

btn.addEventListener("click", e => {
    if(input.value) {
    e.preventDefault();
    tasks.push([input.value, false]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    main.innerHTML = "";
    renderTasks();}
    input.value = "";
});

renderTasks();