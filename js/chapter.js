// ==========================
// Chapter Progress
// ==========================

const chapterProgress = {

    physics:25,
    chemistry:40,
    biology:55

};

function updateChapterTracker(){

    document.querySelector(".physics").style.width =
        chapterProgress.physics + "%";

    document.querySelector(".chemistry").style.width =
        chapterProgress.chemistry + "%";

    document.querySelector(".biology").style.width =
        chapterProgress.biology + "%";

}

updateChapterTracker();
