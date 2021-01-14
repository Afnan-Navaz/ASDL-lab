import React, { useState, useEffect } from 'react';
import { getDepartment, getEmployee, getRole, getEmployeeFilter } from '../config/api';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Home = () => {

    const [department, setDepartment] = useState([]);
    const [role, setRole] = useState([]);

    useEffect(() => {
        getDepartment()
        .then(data => { setDepartment(data) });
        getRole()
        .then(data => { setRole(data) });
    }, [])

    return(
        <>
            <Nav />
            <div className="container mt-5" >
                <h3 className="font-weight-bold">Department: </h3>
                <Department department={department} />
                <h3 className="font-weight-bold">Role: </h3>
                <Role role={role} />
                <h3 className="font-weight-bold">Employee: </h3>
                <div className="tab-des">
                    <Employee />
                </div>
            </div>
        </>
    );
}

export default Home;

const Department = ({department}) => {
    return(
        <div className="tab-des">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Department Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        department.map(x => (
                            <tr key={x.ID}>
                            <th scope="row">{x.ID}</th>
                            <td>{x.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
} 

const Role = ({role}) => {
    return(
        <div className="tab-des">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Department</th>
                    <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        role.map(x => (
                            <tr key={x.ID}>
                            <th scope="row">{x.ID}</th>
                            <td>{x.title}</td>
                            <td>{x.department.name}</td>
                            <td>{x.salary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
} 

export const Employee = () => {
    const [roles, setRoles] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [role, setRole] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        getRole()
        .then(data => { setRoles(data) });
        getEmployee()
        .then(data => { setEmployee(data) });
    }, []);

    useEffect(() => {
        getEmployeeFilter(name, role)
        .then(data => { setEmployee(data) });
    }, [name, role]);

    return(
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">
                    <input type="text" placeholder="First name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </th>
                <th scope="col">Last name</th>
                <th scope="col">
                    <select onChange={(e) => { setRole(e.target.value) }}>
                        <option value="">Role</option>
                        {roles.map(x => (
                            <option key={x.ID} value={x.ID} >{x.title}</option>
                        ))}
                    </select>
                </th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(x => (
                        <tr key={x.ID}>
                        <th scope="row">
                        <Link to={`/employee/${x.ID}`}>{x.ID}</Link>
                        </th>
                        <td>{x.first_name}</td>
                        <td>{x.last_name}</td>
                        <td>{x.role.title}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
} 