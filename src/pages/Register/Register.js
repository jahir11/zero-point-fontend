import React, { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, error } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    
    return (
        <>
        <h2 className="my-5 text-center">Create Your Account</h2>
        <div className="mx-auto text-center w-50">
        {user?.email && <Alert variant="success">
            Account create successfully!
            </Alert>} 
        </div>
        <div className="d-flex justify-content-center">
            { !isLoading &&
                <Form onSubmit={handleRegisterSubmit} className="mx-5 from">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onBlur={handleOnBlur} 
                    name="name"
                    type="name" placeholder="name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleOnBlur} 
                    name="email"
                    type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handleOnBlur} 
                    name="password"
                    type="password" placeholder="Password" required/>
                    <Form.Group className="mb-3 text-danger ">{error}</Form.Group>
                </Form.Group>
                <Button variant="dark" className="w-100 text-white" type="submit">Register Now</Button>
                <h6 className="my-3"> Already Have an Account? <Link to="/login">login</Link> </h6>
                </Form>
            }
            {isLoading && <Spinner animation="border" />}
            
        </div>
        </>
        
    );
};

export default Register;