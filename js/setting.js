// ==========================
// Settings & Theme
// ==========================

const themeBtn = document.getElementById("themeToggle");

function loadTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        themeBtn.textContent = "🌞 Light";
    }

}

function toggleTheme() {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌞 Light";

    } else {

        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "🌙 Dark";

    }

}

themeBtn.addEventListener("click", toggleTheme);

loadTheme();
