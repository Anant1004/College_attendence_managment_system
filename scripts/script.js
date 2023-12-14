const popstudent = document.getElementById("popstudent");
const popteacher = document.getElementById("popteacher");
const teacherclose = document.getElementById("teacherclose");
const studentclose = document.getElementById("studentclose");
const form = document.querySelector("form");

function teacherbtn(){
  popteacher.style.transform = "scale(1)";
}
function studentbtn(){
  popstudent.style.transform = "scale(1)";
}
function teacherclosebtn(){
  popteacher.style.transform = "scale(0)";
}
function studentclosebtn(){
  popstudent.style.transform = "scale(0)";
}

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "twinkle127k@gmail.com",
    Password : "F47EFD940E7BAF93E03667EA08CF7676A5CC",
    To : 'twinkle127k@gmail.com',
    From : "twinkle127k@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  sendEmail();
})