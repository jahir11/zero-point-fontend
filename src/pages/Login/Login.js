import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js'
import './Login.css'



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <>
        <h2 className="text-center my-5">Please Login</h2>
        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
            <div className="d-flex justify-content-center">
            {!isLoading && <Form onSubmit={handleLoginSubmit}className="from">
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleOnChange} type="email"
                        name="email"
                        placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                        onBlur={handleOnChange}   type="password"
                        name="password"
                        placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-danger"></Form.Group>
                    <Button variant="dark" className="w-100 text-white" type="submit">Login</Button>
                    <h6 className="my-3">Create an Account? <Link to="/register"> Register</Link> </h6>
                    <div className="text-center">
                    <Button className="bg-success m-2" onClick={handleGoogleSignIn}><FaGoogle/></Button>
                    </div>
                    </Form>} 
                    {isLoading && <Spinner animation="border" />}
                    
            </div> 
        </>
        
    );
};

export default Login;