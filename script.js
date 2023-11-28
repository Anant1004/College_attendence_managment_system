const studentLogin = document.getElementById("student-btn");
const teacherLogin = document.getElementById("teacher-btn");
const studentCrossBtn = document.getElementById("studentCrossBtn");

function studentBtn(){
    const StudentContainer = document.getElementById("studentContainer").style.transform = "scale(1)";
}
function studentCancel(){
    const StudentContainer = document.getElementById("studentContainer").style.transform = "scale(0)";
}
function teacherBtn(){
    const teacherContainer = document.getElementById("teacherContainer").style.transform = "scale(1)";
}
function teacherCancel(){
    const teacherContainer = document.getElementById("teacherContainer").style.transform = "scale(0)";
}
