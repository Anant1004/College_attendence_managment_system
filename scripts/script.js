const popstudent = document.getElementById("popstudent");
const popteacher = document.getElementById("popteacher");
const teacherclose = document.getElementById("teacherclose");
const studentclose = document.getElementById("studentclose");
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email")
const message = document.getElementById("textarea")

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