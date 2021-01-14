import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { getRole, getDepartment, addDepartment, addEmployee, addRole } from '../config/api';

const Admin = () => {
    const [roles, setRoles] = useState([]);
    const [department, setDepartment] = useState([]);
    const [addEmployees, setAddEmployees] = useState({
        first_name: '',
        last_name: '',
        role_id: ''
    });
    const [addDepartments, setAddDepartments] = useState({
        name: '',
    })
    const [addRoles, setAddRoles] = useState({
        title: '',
        salary: 0,
        department_id: '',
    })
    useEffect(() => {
        getRole()
        .then(data => { setRoles(data) });
        getDepartment()
        .then(data => { setDepartment(data) });
    }, []);
    const handleEmployee = (e) => {
        e.preventDefault();
        addEmployee(addEmployees)
        .then(() => {
            window.alert('Added New Employee');
            window.location.reload();
        });
    }
    const handleRole = (e) => {
        e.preventDefault();
        addRole(addRoles)
        .then(() => {
            window.alert('Added New Role');
            window.location.reload();
        });
    }
    const handleDepartment = (e) => {
        e.preventDefault();
        addDepartment(addDepartments)
        .then(() => {
            window.alert('Added New Department');
            window.location.reload();
        });
    }

    return (
        <>
        <Nav />
        <div className="container mt-5">
            <div className="shadow-sm add p-5 mb-5">
            <form className="display-block mx-auto">
            <h1 className="font-weight-bold" >Add Employee: </h1>
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input value={addEmployees.first_name} type="text" className="form-control" onChange={(e) => {
                    setAddEmployees({
                        ...addEmployees,
                        first_name: e.target.value,
                    })
                }} />
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input value={addEmployees.last_name} type="text" className="form-control" onChange={(e) => {
                    setAddEmployees({
                        ...addEmployees,
                        last_name: e.target.value,
                    })
                }} />
            </div>
            <div className="mb-3">
            <label className="form-label" style={{marginRight: '5px'}}>Role: </label>
            <select value={addEmployees.role_id} onChange={(e) => { setAddEmployees({
                ...addEmployees,
                role_id: e.target.value
            }) }} className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option>select role</option>
                {roles.map(x => (
                    <option key={x.ID} value={x.ID} >{x.title}</option>
                ))}
            </select>
            </div>
            <button onClick={handleEmployee} type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>

            <div className="shadow-sm add p-5 mt-5 mb-5">
            <form className="display-block mx-auto">
            <h1 className="font-weight-bold" >Add Role: </h1>
            <div className="mb-3">
                <label className="form-label">Role name</label>
                <input value={addRoles.title} type="text" className="form-control" onChange={(e) => {
                    setAddRoles({
                        ...addRoles,
                        title: e.target.value,
                    })
                }} />
            </div>
            <div className="mb-3">
                <label className="form-label">Salary</label>
                <input value={addRoles.salary} type="text" className="form-control" onChange={(e) => {
                    setAddRoles({
                        ...addRoles,
                        salary: e.target.value,
                    })
                }} />
            </div>
            <div className="mb-3">
            <label className="form-label" style={{marginRight: '5px'}}>Department: </label>
            <select value={addRoles.department_id} onChange={(e) => { setAddRoles({
                ...addRoles,
                department_id: e.target.value
            }) }} className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option>select department</option>
                {department.map(x => (
                    <option key={x.ID} value={x.ID} >{x.name}</option>
                ))}
            </select>
            </div>
            <button onClick={handleRole} type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>

            <div className="shadow-sm add p-5 mt-5 mb-5">
            <form className="display-block mx-auto">
            <h1 className="font-weight-bold" >Add Department: </h1>
            <div className="mb-3">
                <label className="form-label">Department Name</label>
                <input value={addDepartments.name} type="text" className="form-control" onChange={(e) => {
                    setAddDepartments({
                        ...addDepartments,
                        name: e.target.value,
                    })
                }} />
            </div>
            <button onClick={handleDepartment} type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default Admin;