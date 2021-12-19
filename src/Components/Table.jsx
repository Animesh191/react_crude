import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function BasicTable(props) {
    const {users,handleDelete}=props; 
    console.log(users);
    return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Names</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              
            >
              <TableCell >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" component={Link} to={`/edit/${row.id}`}>Edit</Button>
                &nbsp;
                <Button variant="contained" color="secondary" onClick={()=>handleDelete(row.id)} >Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
