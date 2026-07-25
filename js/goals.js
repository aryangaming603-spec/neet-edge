const goals = document.querySelectorAll(".goal");

goals.forEach(goal => {

    goal.addEventListener("change", saveGoals);

});

function saveGoals(){

    const data = [];

    goals.forEach(goal => {

        data.push(goal.checked);

    });

    localStorage.setItem("dailyGoals", JSON.stringify(data));

}

function loadGoals(){

    const saved = JSON.parse(localStorage.getItem("dailyGoals"));

    if(saved){

        goals.forEach((goal,index)=>{

            goal.checked = saved[index];

        });

    }

}

loadGoals();
