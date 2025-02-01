import React from 'react';
import './Table.css'
function Table({tablerow, handleEdit, handleDelete}){
    return(
        <table className="table1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Subjects</th>
                    <th>DOB</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tablerow.map((row,index)=>(
                    <tr key={index}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3].join(", ")}</td>
                        <td>{row[4]}</td>
                        <td>{row[5]}</td>
                        <td><div className='buttons'><button type="button" class="btn btn-warning" onClick={(e)=>{handleEdit(e,index)}}>Edit</button><button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</button></div></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Table