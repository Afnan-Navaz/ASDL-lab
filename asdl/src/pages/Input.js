import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Input = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return(
        <div className="container" >
            <form className="input-form display-block mx-auto shadow-lg p-5">
            <h1 className="text-center">Login</h1>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" required />
            </div>
            <Link to="/home">
            <button type="submit" className="btn btn-primary">Submit</button>
            </Link>
            </form>
        </div>
    );
}

export default Input;