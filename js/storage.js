// ==========================
// Local Storage
// ==========================

function saveChapterProgress(){

    localStorage.setItem(
        "chapterProgress",
        JSON.stringify(chapterProgress)
    );

}

function loadChapterProgress(){

    const data = JSON.parse(
        localStorage.getItem("chapterProgress")
    );

    if(data){

        chapterProgress.physics = data.physics;
        chapterProgress.chemistry = data.chemistry;
        chapterProgress.biology = data.biology;

        updateChapterTracker();

    }

}

loadChapterProgress();
