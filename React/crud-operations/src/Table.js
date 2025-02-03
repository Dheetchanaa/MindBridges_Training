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
                        <td>{row.studname}</td>
                        <td>{row.studage}</td>
                        <td>{row.gender}</td>
                        <td>{[...row.subjects].join(", ")}</td>
                        <td>{row.studdob}</td>
                        <td>{row.studlocation}</td>
                        <td><div className='buttons'><button type="button" className="btn btn-warning" onClick={(e)=>{handleEdit(e,index)}}>Edit</button><button type="button" className="btn btn-danger" onClick={(e)=>handleDelete(e,index)}>Delete</button></div></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Table