import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <Link className="navbar-brand" style={{fontSize: '40px', fontWeight: 'bold'}} to="/">Company</Link>
            <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav navbar-list">
                    <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/employee">Employee</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav;