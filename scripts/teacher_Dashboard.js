function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("sidepanel").classList.toggle("change")

}

const navcontainer = document.getElementById("nav-container");
const menubtn = document.getElementById("navigation");
const mainSection = document.querySelector("section");
menubtn.onclick = function () {
    navcontainer.classList.toggle("expand-navbar");
    mainSection.classList.toggle("expand-main");
}
