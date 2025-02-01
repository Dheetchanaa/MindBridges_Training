import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { useState } from 'react';
function App() {
  var namePattern = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/;
  var agePattern = /^[1-9]\d{0,1}$/;
  const [tablerow, setTablerow] = useState([]);
  const [iseditting , setIseditting] = useState(false);
  const [rowIndex, setRowIndex] = useState(null);
  function validation(){
    var valid = true;
    var studname = document.getElementById("studname").value;
    if (!namePattern.test(studname)) {
      valid = false;
      document.getElementById("nameError").innerText = "Name should contain only letters and spaces!"
      document.getElementById("nameError").style.color = "red";
    }
    else {
      document.getElementById("nameError").innerText = "";
    }
    var studage = document.getElementById("studage").value;
    if (!agePattern.test(studage)) {
      valid = false;
      document.getElementById("ageError").innerText = "Age should be between 1-99!";
      document.getElementById("ageError").style.color = "red";
    }
    else {
      document.getElementById("ageError").innerText = "";
    }
    var studgender = "";
    if (document.getElementById("male").checked) {
      studgender = "Male";
    }
    else if (document.getElementById("female").checked) {
      studgender = "Female";
    }
    if (studgender == "") {
      valid = false;
      document.getElementById("genderError").innerText = "Please select your gender";
      document.getElementById("genderError").style.color = "red";
    }
    else {
      document.getElementById("genderError").innerText = "";
    }
    var studsubjects = document.getElementsByName("subjects");
    var checkedsubjects = [];
    for (let i of studsubjects) {
      if (i.checked) {
        checkedsubjects.push(i.value);
      }
    }
    if (checkedsubjects.length == 0) {
      valid = false;
      document.getElementById("subjectsError").innerText = "Please select atleast one subject";
      document.getElementById("subjectsError").style.color = "red";
    }
    else {
      document.getElementById("subjectsError").innerText = "";
    }
    var studdob = document.getElementById("studdob").value;
    if (studdob == "") {
      valid = false;
      document.getElementById("DOBError").innerText = "Please select your date of birth";
      document.getElementById("DOBError").style.color = "red";
    }
    else {
      document.getElementById("DOBError").innerText = "";
    }
    return valid;
  }
  const handleClick = () =>{
    if(validation()){
      var studname = document.getElementById("studname").value;
      var studage = document.getElementById("studage").value;
      var studgender = "";
      if (document.getElementById("male").checked) {
        studgender = "Male";
      }
      else if (document.getElementById("female").checked) {
        studgender = "Female";
      }
      var studsubjects = document.getElementsByName("subjects");
      var checkedsubjects = [];
      for (let i of studsubjects) {
        if (i.checked) {
          checkedsubjects.push(i.value);
        }
      }
      var studdob = document.getElementById("studdob").value;
      var studlocation = document.getElementById("studlocation").value;
      const newRow = [studname, studage, studgender, checkedsubjects, studdob, studlocation]
      if(!iseditting){
        setTablerow([...tablerow, newRow]);
        console.log(tablerow);
      }
      else{
        const UpdateRow = [...tablerow];
        UpdateRow[rowIndex] = newRow;
        setTablerow(UpdateRow);
        setRowIndex(null);
        document.getElementById("submitbtn").innerText = "Submit";
        document.getElementById("submitbtn").classList.remove("btn-light")
        document.getElementById("submitbtn").classList.add("btn-primary");
      }
      handlereset();
    }
  }
  function handleDelete(e) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  var editRow = null;
  function handleEdit(e,index) {
    setIseditting(true);
    editRow = e.target.parentElement.parentElement.parentElement;
    setRowIndex(index);
    var editCells = editRow.getElementsByTagName("td");
    document.getElementById("studname").value = editCells[0].innerText;
    document.getElementById("studage").value = editCells[1].innerText;
    var gender = editCells[2].innerText;
    if (gender == "Male") {
      document.getElementById("male").checked = true;
    }
    else {
      document.getElementById("female").checked = true;
    }
    var subjects = editCells[3].innerText.split(", ");
    var studsubjects = document.getElementsByName("subjects");
    console.log(studsubjects)
    for (let i = 0; i < studsubjects.length; i++) {
      if (subjects.includes(studsubjects[i].value)) {
        studsubjects[i].checked = true;
      } else {
        studsubjects[i].checked = false;
      }
    }
    document.getElementById("studdob").value = editCells[4].innerText;
    document.getElementById("studlocation").value = editCells[5].innerText;
    document.getElementById("submitbtn").innerText = "Update";
    document.getElementById("submitbtn").classList.add("btn-light")
        document.getElementById("submitbtn").classList.remove("btn-primary");
  }
  const handlereset = ()=>{
    document.getElementById("studname").value = "";
    document.getElementById("studage").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    var studsubjects = document.getElementsByName("subjects");
    for (let i of studsubjects) {
      i.checked = false;
    }
    document.getElementById("studdob").value = "";
    document.getElementById("studlocation").value = "Chennai";
  }
  return (
    <div className="main-container">
      <div className="form" id='form'>
        <h3>Student Details Form</h3>
        <form>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" id="studname"></input>
            <div id="nameError"></div>
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">Age</label>
            <input type="number" class="form-control" placeholder="Enter your age" id="studage" aria-describedby="emailHelp"></input>
            <div id="ageError"></div>
          </div>
          <p>Gender:</p> <label for="gender">
            <input type="radio" name="gender" value="Male" id="male"></input>Male {'\u00A0'}{'\u00A0'}
            <input type="radio" name="gender" value="Female" id="female"></input>Female
          </label>
          <div id="genderError"></div><br></br>
          <p>Subjects:</p> <label for="subjects">
            <input type="checkbox" name="subjects" value="Programming"></input>Programming{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <input type="checkbox" name="subjects" value="Computer Networks"></input>Computer Networks{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <input type="checkbox" name="subjects" value="Operating System"></input>Operating System{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <input type="checkbox" name="subjects" value="Cybersecurity"></input>Cybersecurity<br></br><br></br>
          </label>
          <div id="subjectsError"></div>
          <p>DOB:</p> <input type="date" class="input1" id="studdob"></input>
          <div id="DOBError"></div><br></br>
          <p>Location:</p>
          <select class="form-select" aria-label="Default select example" id="studlocation">
            <option selected value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Erode">Erode</option>
            <option value="Namakkal">Namakkal</option>
          </select><br></br>
          <button type="button" class="btn btn-primary" id="submitbtn" onClick={handleClick}>Submit</button>
        </form>
      </div>
      <div class="table">
      <h3>Student Records</h3>
      <Table tablerow={tablerow} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;