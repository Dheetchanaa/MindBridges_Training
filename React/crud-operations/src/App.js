import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import Table from './table.js';
function App() {
  const formref = useRef(null);
  const [user, setUser] = useState({
    studname: '',
    studage: '',
    gender: '',
    subjects: new Set(),
    studdob: '',
    studlocation: 'Chennai'
  })
  const [formErrors, setErrors] = useState({
    nameError: '',
    ageError: '',
    genderError: '',
    subjectsError: '',
    dobError: '',
    locationError: ''
  });
  const [tableUser, setTableUser] = useState([]);
  const [isEditting, setIseditting] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [submitbtn, setSubmitbtn] = useState('Submit');
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;
    if(user.studname == ''){
      isValid = false
      formErrors.studname = "Name is required";
    }
    if(user.studage == ''){
      isValid = false
      formErrors.studage = "Age is required";
    }
    if(user.gender == ''){
      isValid = false
      formErrors.gender = "Gender is required";
    }
    if(user.subjects.size === 0){
      isValid = false
      formErrors.subjects = "At least one subject is required";
    }
    if(user.studdob == ''){
      isValid = false
      formErrors.studdob = "Date of Birth is required";
    }
    setErrors(formErrors);
    return isValid;
  }
  const addUser = (e) => {
      setUser((previous) => {
        if(e.target.type !== 'checkbox'){
          return {
            ...previous,[e.target.name]: e.target.value
          };
        }
        else{
          let checkedSubjects = new Set(previous[e.target.name]||[]);
          if(e.target.checked){
            checkedSubjects.add(e.target.value);
          }
          else{
            checkedSubjects.delete(e.target.value);
          }
          return{
            ...previous,[e.target.name]:checkedSubjects
          }
        }
      });
  }  
  const handleSubmit = ()=>{
    if(validateForm()){
      setTableUser((previous)=>{
        if(!isEditting){
          setTableUser([...previous,user]);
        }
        else{
          const updatedTableUser = [...previous];
          updatedTableUser[editRowIndex] = user;
          setTableUser(updatedTableUser);
          setIseditting(false);
          setSubmitbtn('Submit')
        }
        setUser({
          studname: '',
          studage: '',
          gender: '',
          subjects: new Set(),
          studdob: '',
          studlocation: 'Chennai'
        });
        formref.current.reset();
      })
    }
  }
  const handleEdit = (e,index)=>{
    setSubmitbtn('Update');
    const editUser = tableUser[index];
    setIseditting(true);
    setUser({...editUser});
    setEditRowIndex(index);
  }
  const handleDelete = (e,index)=>{
    const updatedTableUser = tableUser.filter((item,i)=>i!=index);
    setTableUser(updatedTableUser);
  }
  return (
    <div className="main-container">
      <div className="form" id='form'>
        <h3>Student Details Form</h3>
        <form ref={formref}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" name="studname" value={user.studname||''} onChange={addUser}></input>
            <div className='Errors'>{formErrors.studname}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
            <input type="number" className="form-control" placeholder="Enter your age" name="studage" value={user.studage||''} aria-describedby="emailHelp" onChange={addUser}></input>
            <div className='Errors'>{formErrors.studage}</div>
          </div>
          <p>Gender:</p> <label htmlFor="gender">
            <input type="radio" name="gender" value="Male" checked={user.gender=='Male'||false} onChange={addUser}></input>Male {'\u00A0'}{'\u00A0'}
            <input type="radio" name="gender" value="Female" checked={user.gender=='Female'||false} onChange={addUser}></input>Female
          </label>
          <div className='Errors'>{formErrors.gender}</div><br></br>
          <p>Subjects:</p> <label htmlFor="subjects">
            <input type="checkbox" name="subjects" value='Programming' checked={user.subjects&&user.subjects.has('Programming')||false} onChange={addUser}></input>Programming{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <input type="checkbox" name="subjects" value='Computer Networks' checked={user.subjects&&user.subjects.has('Computer Networks')||false} onChange={addUser}></input>Computer Networks{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <input type="checkbox" name="subjects" value='Operating System' checked={user.subjects&&user.subjects.has('Operating System')||false} onChange={addUser}></input>Operating System{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <input type="checkbox" name="subjects" value='Cybersecurity' checked={user.subjects&&user.subjects.has('Cybersecurity')||false} onChange={addUser}></input>Cybersecurity<br></br><br></br>
          </label>
          <div className='Errors'>{formErrors.subjects}</div>
          <p>DOB:</p> <input type="date" className="input1" name="studdob" onChange={addUser} value={user.studdob||''}></input>
          <div className='Errors'>{formErrors.studdob}</div><br></br>
          <p>Location:</p>
          <select className="form-select" aria-label="Default select example" name="studlocation" value={user.studlocation} onChange={addUser}>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Erode">Erode</option>
            <option value="Namakkal">Namakkal</option>
          </select><br></br>
          <button type="button" className="btn btn-primary" name='submitbtn' onClick={handleSubmit}>{submitbtn}</button>
        </form>
      </div>
        <Table tablerow={tableUser} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
