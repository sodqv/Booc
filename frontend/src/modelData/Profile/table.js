import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { alignProperty } from '@mui/material/styles/cssUtils';

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
  createData('Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('', 'Meeting', '', '', '', '', ''),
  createData('Meeting', '', '', 'Meeting', '', '', ''),
  createData('Meeting', '', '', '', '', '', ''),
  createData('', '', '', '', 'Hairdresser', '', ''),
  createData('', 'Workout', '', 'Meeting', '', 'Party'),
  createData('', '', '', '', '', 'Party'),
  createData('Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('Meeting', 'Dentist', '', '', '', 'Dinner')
];
const styleCellHead = {
  fontWeight: 'bold', 
  padding: '2px', 
  fontSize: '15px'
}
const styleCell = { 
  padding: '2px', 
  fontSize: '11px'
}

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ tableLayout: 'fixed',minWidth: 400, bgcolor: '#f5f5f5', height: 'calc(100vh - 90px)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={styleCellHead}>Monday</TableCell>
            <TableCell align="center" sx={styleCellHead}>Tuesday</TableCell>
            <TableCell align="center" sx={styleCellHead}>Wednesday</TableCell>
            <TableCell align="center" sx={styleCellHead}>Thursday</TableCell>
            <TableCell align="center" sx={styleCellHead}>Friday</TableCell>
            <TableCell align="center" sx={styleCellHead}>Saturday</TableCell>
            <TableCell align="center" sx={styleCellHead}>Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" sx={ styleCell }>{row.monday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.tuesday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.wednesday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.thursday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.friday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.saturday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}