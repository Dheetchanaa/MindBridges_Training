var namePattern = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/;
var agePattern = /^[1-9]\d{0,1}$/;
var phonePattern = /^\d{10}$/;
var genderPattern = /^[Male/Female]$/;
function validation(){
    var valid = true;
    var studname = document.getElementById("studname").value;
    if(!namePattern.test(studname)){
        valid = false;
        document.getElementById("nameError").innerText = "Name should contain only letters and spaces!"
        document.getElementById("nameError").style.color = "red";
    }
    else{
        document.getElementById("nameError").innerText = "";
    }
    var studage = document.getElementById("studage").value;
    if(!agePattern.test(studage)){
        valid = false;
        document.getElementById("ageError").innerText = "Age should be between 1-99!";
        document.getElementById("ageError").style.color = "red";
    }
    else{
        document.getElementById("ageError").innerText = "";
    }
    var studphoneno = document.getElementById("studphoneno").value;
    if(!phonePattern.test(studphoneno)){
        valid = false;
        document.getElementById("phonenoError").innerText = "Phone no should contain exactly 10 digits!"
        document.getElementById("phonenoError").style.color = "red";
    }
    else{
        document.getElementById("phonenoError").innerText = "";
    }
    var studgender = "";
    if(document.getElementById("male").checked){
        studgender = "Male";
    }
    else if(document.getElementById("female").checked){
        studgender = "Female";
    }
    if(studgender == ""){
        valid = false;
        document.getElementById("genderError").innerText = "Please select your gender";
        document.getElementById("genderError").style.color = "red";
    }
    else{
        document.getElementById("genderError").innerText = "";
    }
    var studsubjects = document.getElementsByName("subjects");
    var checkedsubjects = [];
    for(let i of studsubjects){
        if(i.checked){
            checkedsubjects.push(i.value);
        }
    }
    if(checkedsubjects.length == 0){
        valid = false;
        document.getElementById("subjectsError").innerText = "Please select atleast one subject";
        document.getElementById("subjectsError").style.color = "red";
    }
    else{
        document.getElementById("subjectsError").innerText = "";
    }
    var studdob = document.getElementById("studdob").value;
    if(studdob == ""){
        valid = false;
        document.getElementById("DOBError").innerText = "Please select your date of birth";
        document.getElementById("DOBError").style.color = "red";
    }
    else{
        document.getElementById("DOBError").innerText = "";
    }
    return valid;
}
function formsubmit(){
    if(validation()){
        var studname = document.getElementById("studname").value;
        var studage = document.getElementById("studage").value;
        var studphoneno = document.getElementById("studphoneno").value;
        var studgender = "";
        if(document.getElementById("male").checked){
            studgender = "Male";
        }
        else if(document.getElementById("female").checked){
            studgender = "Female";
        }
        var studsubjects = document.getElementsByName("subjects");
        var checkedsubjects = [];
        for(let i of studsubjects){
            if(i.checked){
                checkedsubjects.push(i.value);
            }
        }
        var studdob = document.getElementById("studdob").value;
        var studlocation = document.getElementById("studlocation").value;
        var table1 = document.getElementById("tbody");
        table1.innerHTML+=`<tr>
                            <td>${studname}</td><td>${studage}</td>
                            <td>${studphoneno}</td><td>${studgender}</td>
                            <td>${checkedsubjects}</td><td>${studdob}</td>
                            <td>${studlocation}</td>
                            <td class="td1"><button class="edit" id="edit" onclick="editfun(event)">Edit</button><button class="delete" id="delete" onclick="deletefun(event)">Delete</button></td></tr>`;
        document.getElementById("form").reset();
    }
}
function deletefun(event){
    var deleteButton = event.target;
    var deleteRow = deleteButton.parentElement.parentElement;
    deleteRow.remove();
}
let editRow = "";
function editfun(event){
    var editButton = event.target;
    editRow = editButton.parentElement.parentElement;
    console.log(editRow)
    var editcells = editRow.getElementsByTagName("td");
    console.log(editcells);
    document.getElementById("studname").value = editcells[0].innerText;
    document.getElementById("studage").value = editcells[1].innerText;
    document.getElementById("studphoneno").value = editcells[2].innerText;
    var gender = editcells[3].innerText;
    console.log(gender);
    if(gender == "Male"){
        document.getElementById("male").checked = true;
    }
    else{
        document.getElementById("female").checked = true;
    }
    var subjects = editcells[4].innerText.split(",");
    var studsubjects = document.getElementsByName("subjects");
    for(let i=0;i<studsubjects.length;i++) {
        if(subjects.includes(studsubjects[i].value)){
            studsubjects[i].checked = true;
        }else{
            studsubjects[i].checked = false;
        }
    }
    document.getElementById("studdob").value = editcells[5].innerText;
    document.getElementById("studlocation").value = editcells[6].innerText;
    document.getElementById("submitbtn").innerText = "Update";
    document.getElementById("submitbtn").onclick = updatefun;
}
function updatefun(){
    if(validation()){
        var editcells = editRow.getElementsByTagName("td");
        editcells[0].innerText = document.getElementById("studname").value;
        editcells[1].innerText = document.getElementById("studage").value;
        editcells[2].innerText = document.getElementById("studphoneno").value;
        if(document.getElementById("male").checked == true){
            editcells[3].innerText = "Male";
        }
        else{
            editcells[3].innerText = "Female";
        }
        var studsubjects = document.getElementsByName("subjects");
        var checkedsubjects = [];
        for(let i of studsubjects){
            if(i.checked){
                checkedsubjects.push(i.value);
            }
        }
        editcells[4].innerText = checkedsubjects.join(",");
        editcells[5].innerText = document.getElementById("studdob").value;
        editcells[6].innerText = document.getElementById("studlocation").value;
        document.getElementById("form").reset();
        document.getElementById("submitbtn").innerText = "Submit";
        document.getElementById("submitbtn").onclick = formsubmit;
    }
}