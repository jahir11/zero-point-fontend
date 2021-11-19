import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ManageAllOrder = () => {
    const [allorders , setAllOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allorders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `http://localhost:5000/deletePatient/${id}`
            console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remainingOrder = allorders.filter(order => order._id !== id);
                setAllOrders(remainingOrder)
            }
        })
        }
    }
    return (
        <div>
            <h2>Manage all orders</h2>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="Orders table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">email</TableCell>
            <TableCell align="left">Number</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allorders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="left">{row.city}</TableCell>
              <TableCell onClick={() => handleDelete(row._id)}
              ><DeleteForeverIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageAllOrder;