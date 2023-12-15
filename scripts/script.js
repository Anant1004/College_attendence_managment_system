const form = document.querySelector("form");
// contact section started here 

function sendEmail(){
 if(fullName.value===""){
  alert("Please enter full name");
 }
 else if(email.value===""){
  alert("Please enter email ");
 }
 else if(message.value===""){
  alert("Please enter your message");
 }
 else{
  const bodyMessage = `Full name: ${fullName.value} <br>Email: ${email.value} <br>message: ${message.value}`;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "twinkle127k@gmail.com",
    Password : "F47EFD940E7BAF93E03667EA08CF7676A5CC",
    To : 'twinkle127k@gmail.com',
    From : "twinkle127k@gmail.com",
    Subject : fullName.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK"){
      Swal.fire({
        title: "Success!",
        text: "Message sent Successfully",
        icon: "success"
      });
    }
  }
);
}
}
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  sendEmail();
})
// popup section started here 

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
const mainpopcontainer=document.getElementById("pop-main-container");
const popclose=document.querySelector(".close-btn");
popclose.addEventListener('click',()=>{
  mainpopcontainer.style.transform = "scale=(0)";
})
function loginbtn(){
  mainpopcontainer.style.transform = "scale(1)";
}