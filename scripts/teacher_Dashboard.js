function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("sidepanel").classList.toggle("change")

}

const navcontainer = document.getElementById("nav-container");
const navOptions = document.querySelectorAll(".nav-option"); // assuming navOption is a class
const menubtn = document.getElementById("navigation");
const mainteachercontainer = document.getElementById("mainTeacherContainer");

menubtn.onclick = function() {
    navcontainer.classList.toggle("hide-navbar");
    mainteachercontainer.classList.toggle("expand-main");
    
    // Loop through each element with the class .nav-option
    navOptions.forEach(option => {
        option.classList.toggle("hide-navOption");
    });
}