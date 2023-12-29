showPlanYourCurriculum();

// showPlanYourCurriculum() 
function showPlanYourCurriculum() {
    document.getElementById('plan-your-curriculam-container').style.display = "block";
    document.getElementById('record-your-video-container').style.display = "none";
    document.getElementById('launch-your-course-container').style.display = "none";

    document.getElementById('plan-your-curriculam').style.cursor = "default";
    document.getElementById('record-your-video').style.cursor = "pointer";
    document.getElementById('launch-your-course').style.cursor = "pointer";

    document.getElementById('plan-your-curriculam').style.borderBottom = "2px solid black";
    document.getElementById('record-your-video').style.borderBottom = "none";
    document.getElementById('launch-your-course').style.borderBottom = "none";
}

// showRecordYourVideo() 
function showRecordYourVideo() {
    document.getElementById('plan-your-curriculam-container').style.display = "none";
    document.getElementById('record-your-video-container').style.display = "block";
    document.getElementById('launch-your-course-container').style.display = "none";

    document.getElementById('plan-your-curriculam').style.cursor = "pointer";
    document.getElementById('record-your-video').style.cursor = "default";
    document.getElementById('launch-your-course').style.cursor = "pointer";

    document.getElementById('plan-your-curriculam').style.borderBottom = "none";
    document.getElementById('record-your-video').style.borderBottom = "2px solid black";
    document.getElementById('launch-your-course').style.borderBottom = "none";
}

// showLaunchYourCourse() 
function showLaunchYourCourse() {
    document.getElementById('plan-your-curriculam-container').style.display = "none";
    document.getElementById('record-your-video-container').style.display = "none";
    document.getElementById('launch-your-course-container').style.display = "block";

    document.getElementById('plan-your-curriculam').style.cursor = "pointer";
    document.getElementById('record-your-video').style.cursor = "pointer";
    document.getElementById('launch-your-course').style.cursor = "default";

    document.getElementById('plan-your-curriculam').style.borderBottom = "none";
    document.getElementById('record-your-video').style.borderBottom = "none";
    document.getElementById('launch-your-course').style.borderBottom = "2px solid black";
}