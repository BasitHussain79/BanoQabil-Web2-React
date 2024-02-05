import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

function createData(fname, lname, email, phone, relation) {
  return { fname, lname, email, phone, relation };
}

const rows = [
  createData('Basit', 'Hussain', 'basit@gmail.com', '123 123 123', 'Personal'),
  createData('Basit', 'Hussain', 'basit@gmail.com', '123 123 123', 'Personal'),
  createData('Basit', 'Hussain', 'basit@gmail.com', '123 123 123', 'Personal'),
  createData('Basit', 'Hussain', 'basit@gmail.com', '123 123 123', 'Personal'),
];

const whiteColor = {
  color: '#fff',
};

const ContactInner = () => {
  return (
    <Container maxWidth='lg' sx={{ mt: 10 }}>
      <TableContainer component={Paper} sx={{ background: '#333' }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Relation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.fname}
                </TableCell>
                <TableCell>{row.lname}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.relation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ContactInner;
