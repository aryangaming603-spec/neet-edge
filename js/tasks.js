const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTask");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("neetTasks")) || [];

function saveTasks() {
    localStorage.setItem("neetTasks", JSON.stringify(tasks));
}

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const item = document.createElement("div");
        item.className = "task-item";

        item.innerHTML = `
            <label>
                <input type="checkbox"
                ${task.done ? "checked" : ""}>
                ${task.name}
            </label>

            <button class="delete-btn">🗑</button>
        `;

        // Checkbox
        item.querySelector("input").addEventListener("change", function(){

            tasks[index].done = this.checked;

            saveTasks();

        });

        // Delete
        item.querySelector(".delete-btn").addEventListener("click", function(){

            tasks.splice(index,1);

            saveTasks();

            renderTasks();

        });

        taskList.appendChild(item);

    });

}

renderTasks();

addTaskBtn.addEventListener("click", function(){

    const task = prompt("Enter New Task");

    if(task && task.trim()!=""){

        tasks.push({

            name:task,

            done:false

        });

        saveTasks();

        renderTasks();

    }

});
