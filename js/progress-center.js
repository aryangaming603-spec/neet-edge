const progress = 64;

document.getElementById("overallProgress").style.width = progress + "%";
document.getElementById("overallText").textContent = progress + "% Completed";

document.getElementById("heroBar").style.width = progress + "%";
document.getElementById("heroPercent").textContent = progress + "%";

document.getElementById("heroStreak").textContent = "1 Day";
document.getElementById("heroChapter").textContent = "0 / 83";
document.getElementById("heroHours").textContent = "0";
