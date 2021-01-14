import React from 'react';
import Nav from './Nav';
import { Employee } from './Home';

const Employees = () => {
    return (
        <>
        <Nav />
        <div className="container mt-5">
            <h2 className="font-weight-bold">Employee: </h2>
            <div className="tab-des tab-emp">
            <Employee />
            </div>
        </div>
        </>
    )
}

export default Employees;