// ==========================
// Progress System
// ==========================

const progressFill = document.querySelector(".fill");
const progressText = document.getElementById("progressText");

function updateProgress() {

    const totalTasks = document.querySelectorAll("#taskList input[type='checkbox']").length;
    const completedTasks = document.querySelectorAll("#taskList input[type='checkbox']:checked").length;

    let percentage = 0;

    if (totalTasks > 0) {
        percentage = Math.round((completedTasks / totalTasks) * 100);
    }

    progressFill.style.width = percentage + "%";
    progressText.textContent = percentage + "% Completed";

}

setInterval(updateProgress, 500);
