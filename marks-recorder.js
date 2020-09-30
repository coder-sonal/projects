var studentsData = [];

function register() {
    var studentArray = {
        name: document.getElementById("name").value,
        grade: document.getElementById("grade").value,
        section: document.getElementById("section").value,
        examType: document.getElementById("exam").value,
        subject: document.getElementById("sub").value,
        marks: document.getElementById("score").value
        };
    document.getElementById("name").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("section").value = "";
    document.getElementById("exam").value = "";
    document.getElementById("sub").value = "";
    document.getElementById("score").value = "";
 studentsData.push(studentArray);
}

function create(event) {
    clearData();
    var totalMarks = 0;
    var studentsMarks = [];
    if(studentsData.length > 0) {
        var details = document.createElement("div");
            details.className = "details";
            details.style.width = "100%";
            details.style.margin = " 20% 10%";
            details.style.color = "white";
            
        for(var i = 0; i < studentsData.length; i++) {
            
            var mks = parseInt(studentsData[i].marks);
            totalMarks += mks;
            studentsMarks.push(mks);
            
            if(event.value === "name"){
                // For Name
                var name = document.createElement('p');
                name.innerHTML = studentsData[i].name;
                details.appendChild(name);
            }else if(event.value ==="grade"){
                // For Grade
                var grade = document.createElement('p');
                grade.innerHTML =  studentsData[i].grade;
                details.appendChild(grade);
            }else if(event.value === "section") {
                // For Section
                var section = document.createElement("p");
                section.innerHTML = studentsData[i].section;
                details.appendChild(section);
            }else if(event.value === "exam"){
                // For ExamType
                var exam = document.createElement("p");
                exam.innerHTML = studentsData[i].examType;
                details.appendChild(exam);
            }else if( event.value === "subject"){
                // For Subject
                var subject = document.createElement("p");
                subject.innerHTML = studentsData[i].subject;
                details.appendChild(subject);
            }
        }
        if (event.value === "totalAvg"){
            var studentAvg = document.createElement("p");
            studentAvg.innerHTML = "Average Marks optain by students in various subject "+" "+totalMarks/studentsData.length;
            details.appendChild(studentAvg);
        }
        if (event.value === "minnn"){
            studentsMarks.sort();
            var minMark = document.createElement("p");
            if (studentsMarks[0] < 40){
                minMark.innerHTML = "Student failed as marks is less than passing marks"+ " "+"-"+ studentsMarks[0];
                minMark.style.backgroundColor = "red";
                details.appendChild(minMark);
            }else{
                minMark.innerHTML = studentsMarks[0];
                details.appendChild(minMark)
            }
        }
        if(event.value === "maxx"){
            studentsMarks.sort();
            var maxMarks = document.createElement("p");
            maxMarks.innerHTML = "Maximum marks scored by student"+" "+studentsMarks[studentsMarks.length-1];
            details.appendChild(maxMarks)
        }

        document.getElementById("img").appendChild(details);
    }
}


function clearData() {
    var parent = document.getElementById("img");
    var datas = document.getElementsByClassName("details");
    for(var i = 0; i < datas.length; i++) {
        parent.removeChild(datas[i]);
        i--;
    }
}
function viewData(){
    clearData();
    if(studentsData.length > 0) {
        var details = document.createElement("div");
            details.className = "details";
            details.style.width = "100%";
            details.style.margin = " 20% 10%";
            details.style.color = "white";
            for(var i = 0; i < studentsData.length; i++) {
               if( document.getElementById("view").value === studentsData[i].name){
                    // For Name
                    var name = document.createElement('p');
                    name.innerHTML = studentsData[i].name;
                    details.appendChild(name);
                
                    // For Grade
                    var grade = document.createElement('p');
                    grade.innerHTML =  studentsData[i].grade;
                    details.appendChild(grade);
                
                    // For Section
                    var section = document.createElement("p");
                    section.innerHTML = studentsData[i].section;
                    details.appendChild(section);
                
                    // For ExamType
                    var exam = document.createElement("p");
                    exam.innerHTML = studentsData[i].examType;
                    details.appendChild(exam);
                
                    // For Subject
                    var subject = document.createElement("p");
                    subject.innerHTML = studentsData[i].subject;
                    details.appendChild(subject);
               }
            }
            document.getElementById("img").appendChild(details);
            document.getElementById("view").value = "Search By Name"
            document.getElementById("view").style.overw
    }                 
}