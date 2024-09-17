import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
) {
  return { monday, tuesday, wednesday, thursday, friday, saturday, sunday };
}

const rows = [
  createData('Meeting', 'Dentist', '', '', '', 'Party', ''),
  createData('Meeting', 'Dentist', '', '', '', 'Party', ''),
  createData('Meeting', 'Dentist', '', '', '', 'Party', ''),
  createData('Meeting', 'Dentist', '', '', '', 'Party', ''),
  createData('Meeting', 'Dentist', '', '', '', 'Party', ''),
  createData('Meeting', 'Dentist', '', '', '', 'Party', ''),
  createData('Meeting', 'Dentist', '', '', '', 'Party', '')
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Monday</TableCell>
            <TableCell align="center">Tuesday</TableCell>
            <TableCell align="center">Wednesday</TableCell>
            <TableCell align="center">Thursday</TableCell>
            <TableCell align="center">Friday</TableCell>
            <TableCell align="center">Saturday</TableCell>
            <TableCell align="center">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.monday}</TableCell>
              <TableCell align="center">{row.tuesday}</TableCell>
              <TableCell align="center">{row.wednesday}</TableCell>
              <TableCell align="center">{row.thursday}</TableCell>
              <TableCell align="center">{row.friday}</TableCell>
              <TableCell align="center">{row.saturday}</TableCell>
              <TableCell align="center">{row.sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}