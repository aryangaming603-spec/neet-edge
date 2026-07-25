const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    sidebar.classList.toggle("show");
});

document.addEventListener("click", function (e) {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove("show");
    }
});
