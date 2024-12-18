// console.log("js is working");


// let GenerateBtn = document.getElementById("GenerateBtn");

// GenerateBtn.addEventListener("click", (e)=>{
//     e.preventDefault();
//     console.log("button click")
// })


let GenerateBtn = document.getElementById("GenerateBtn")
    GenerateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button click");
 
 let subject1 = parseInt(document.getElementById("marks1").value);
 let subject2 = parseInt(document.getElementById("marks2").value);
 let subject3 = parseInt(document.getElementById("marks3").value);

let totalMarks = subject1 + subject2 + subject3;
let percentage =(totalMarks/500)*100;

let  grade;
   if(percentage >= 90 ){
        grade = "A+";
   }else if(percentage < 90 && percentage>= 80){
        grade = "A";
   }else if(percentage < 80 && percentage >= 70){
        grade = "B"
   }else if(percentage < 70 && percentage >= 60){
        grade = "C"
   }else if(percentage < 60 && percentage >= 50){
        grade = "D"
    }else if(percentage < 50 && percentage >= 40){
        grade = "E"
    }
    else{
        grade = "Fail"
    }


    const result = document.getElementById("result");
    result.innerHTML =
    `<p>Total Marks : ${totalMarks}/500</p>
    <p>percentage : ${percentage}%</p>
    <p>grade : ${grade}</p>`;


});

