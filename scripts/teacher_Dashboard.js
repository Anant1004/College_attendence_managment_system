function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("sidepanel").classList.toggle("change")

}

const navcontainer = document.getElementById("nav-container");
const navOptions = document.querySelectorAll(".nav-option"); // assuming navOption is a class
const navSpans = document.querySelectorAll(".nav-span"); // assuming navSpan is a class
const menubtn = document.getElementById("navigation");
const mainteachercontainer = document.getElementById("mainTeacherContainer");

menubtn.onclick = function() {
    navcontainer.classList.toggle("expand-navbar");
    mainteachercontainer.classList.toggle("expand-main");
}
