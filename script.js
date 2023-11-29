const popstudent = document.getElementById("popstudent");
const popteacher = document.getElementById("popteacher");
const teacherclose = document.getElementById("teacherclose")
;const studentclose = document.getElementById("studentclose");

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


