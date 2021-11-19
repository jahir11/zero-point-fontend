import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    

    const handleEmailOnBlur = e => {
        setEmail(e.target.value);
    }
    
    const handleAdminSubmit = e => {
        const user = { email };
        alert('button click ok')
        console.log(user)
        fetch('https://serene-headland-52528.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                    console.log(data);
                    setSuccess(true);
            })

        e.preventDefault()
    }
    return (
        <div >
            <div className="text-center">
            <h2>Make an Admin</h2>
            {success && <Alert  severity="success">Made Admin successfully!</Alert>}
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' , mb:3 }}
                    label="Email"
                    type="email"
                    onBlur={handleEmailOnBlur}
                    variant="standard" />
                   <br />
                <Button sx={{ width: '50%' }} type="submit" variant="contained" >Make Admin</Button>
            </form>
            </div>
        </div>
    );
};

export default MakeAdmin;