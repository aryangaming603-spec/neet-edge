// =========================
// NEET EDGE OS
// =========================

// Live Clock + Greeting
function updateClock() {

    const now = new Date();

    // Time
    document.getElementById("time").innerHTML =
        now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

    // Date
    document.getElementById("date").innerHTML =
        now.toDateString();

    // Greeting
    const hour = now.getHours();

    let greet = "Good Night 🌙";

    if(hour >= 5 && hour < 12)
        greet = "Good Morning ☀️";

    else if(hour >= 12 && hour < 17)
        greet = "Good Afternoon 🌤️";

    else if(hour >= 17 && hour < 21)
        greet = "Good Evening 🌆";

    document.getElementById("greeting").innerHTML = greet;
}

setInterval(updateClock,1000);
updateClock();


// =========================
// Countdown
// =========================

function updateCountdown(){

    // Change this when official date is announced
    const exam = new Date("2027-05-02");

    const today = new Date();

    const diff = exam - today;

    const days = Math.ceil(diff/(1000*60*60*24));

    document.getElementById("countdown").innerHTML =
        days + " Days Left";
}

updateCountdown();


// =========================
// Fake Progress Animation
// =========================

let progress = 0;

const fill = document.querySelector(".fill");

const percent = document.querySelector(".card p:last-child");

const animation = setInterval(()=>{

    progress++;

    fill.style.width = progress + "%";

    percent.innerHTML = progress + "%";

    if(progress>=78){

        clearInterval(animation);

    }

},25);

console.log("🚀 NEET EDGE OS Loaded");
const todayDate = document.getElementById("todayDate");

const today = new Date();

todayDate.textContent = today.toDateString();
