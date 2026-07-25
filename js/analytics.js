// ==========================
// Analytics
// ==========================

function updateAnalytics(){

    const completed =
        document.querySelectorAll(
            "#taskList input:checked"
        ).length;

    const total =
        document.querySelectorAll(
            "#taskList input"
        ).length;

    const analytics =
        document.querySelector(".analytics-card");

    analytics.innerHTML = `

<h3>📊 Analytics</h3>

<p>Completed Tasks : ${completed}</p>

<p>Total Tasks : ${total}</p>

<p>Completion : ${
total>0
?
Math.round(completed/total*100)
:
0
}%</p>

`;

}

setInterval(updateAnalytics,500);
