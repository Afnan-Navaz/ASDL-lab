import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { getEmployeeDetails, deleteEmployee, getRole, editEmployee } from '../config/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const EmpDetails = (props) => {
    const id =props.match.params.id;
    const [employee, setEmployee] = useState({});
    const [edit, setEdit] = useState(false);
    const [roles, setRoles] = useState([]);
    const [datforedit, setDatforedit] = useState({
        first_name: '',
        last_name: '',
        role_id: ''
    });
    const history = useHistory();
    useEffect(() => {
        getRole()
        .then(data => { setRoles(data) });
        getEmployeeDetails(id)
        .then(data => { 
            setEmployee(data);
         })
         .catch(() => { history.goBack() })
    }, [history, id]);
    useEffect(() => {
        setDatforedit({
            first_name: employee.first_name,
            last_name: employee.last_name,
            role_id: employee.role_id,
        })
    }, [employee]);
    const deleteUser = () => {
        const answer = window.confirm("Delete Employee?");
        if (answer) {
            deleteEmployee(employee.ID)
            window.location.reload();
        }
    }
    const editUser = (e) => {
        e.preventDefault();
        editEmployee({
            id: parseInt(id),
            ...datforedit
        })
        .then(() => { window.location.reload() });
    }
    return (
        <>
        <Nav />
        <div className="container mt-5">
            <div className="container-fluid">
                <h2 className="font-weight-bold">Employee Details: </h2>
                {employee.ID &&
                <div className="edit-box float-right">
                    <FontAwesomeIcon onClick={() => {setEdit(!edit)}} className="ed-edit" icon={faEdit} />
                    <FontAwesomeIcon onClick={deleteUser} className="ed-edit" icon={faTrashAlt} />
                </div>
                }
            </div>
            <div className="container d-flex emp-det">
                <div className="user">
                <FontAwesomeIcon style={{fontSize: '18em'}} icon={faUserTie} />
                </div>
                <div className="emp-details">
                    <ul>
                    { employee.ID && <>
                        <li><span className="font-weight-bold">Employee ID:</span> {employee.ID}</li>
                        <li><span className="font-weight-bold">First name:</span> {employee.first_name}</li>
                        <li><span className="font-weight-bold">Last name:</span> {employee.last_name}</li>
                        <li><span className="font-weight-bold">Department:</span> {employee.role.department.name}</li>
                        <li><span className="font-weight-bold">Role:</span> {employee.role.title}</li>
                        <li><span className="font-weight-bold">Salary:</span> {employee.role.salary}</li>
                    </>}
                    </ul>
                </div>
            </div>
            {edit && 
                <div className="edit-emp shadow-lg p-5">
                <form className="display-block mx-auto">
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input value={datforedit.first_name} type="text" className="form-control" onChange={(e) => {
                        setDatforedit({
                            ...datforedit,
                            first_name: e.target.value,
                        })
                    }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input value={datforedit.last_name} type="text" className="form-control" onChange={(e) => {
                        setDatforedit({
                            ...datforedit,
                            last_name: e.target.value,
                        })
                    }} />
                </div>
                <div className="mb-3">
                <select value={datforedit.role_id} onChange={(e) => { setDatforedit({
                    ...datforedit,
                    role_id: e.target.value
                }) }} className="form-select form-select-sm" aria-label=".form-select-sm example">
                    {roles.map(x => (
                        <option key={x.ID} value={x.ID} >{x.title}</option>
                    ))}
                </select>
                </div>
                <button onClick={editUser} type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            }
        </div>
        </>
    )
}

export default EmpDetails;