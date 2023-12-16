const popupform = document.getElementById('popup-form');
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});
const mainpopcontainer = document.getElementById("pop-main-container");
const popclose = document.querySelector(".close-btn");
popclose.addEventListener('click', () => {
  mainpopcontainer.style.transform = "scale=(0)";
})
function loginbtn() {
  mainpopcontainer.style.transform = "scale(1)";
}