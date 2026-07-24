function updateDateTime() {
    const now = new Date();

    // Time
    document.getElementById("time").textContent =
        now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

    // Date
    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    // Greeting
    const hour = now.getHours();
    let greeting = "Good Night 🌙";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning ☀️";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon 🌤️";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening 🌇";
    }

    document.getElementById("greeting").textContent = greeting;
}

updateDateTime();
setInterval(updateDateTime, 1000);
