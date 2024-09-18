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

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold', padding: '2px', fontSize: '11px' }}>Monday</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', padding: '2px', fontSize: '11px' }}>Tuesday</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', padding: '2px', fontSize: '11px' }}>Wednesday</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', padding: '2px', fontSize: '11px' }}>Thursday</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', padding: '2px', fontSize: '11px' }}>Friday</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', padding: '2px', fontSize: '11px' }}>Saturday</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', padding: '2px', fontSize: '11px' }}>Sunday</TableCell>
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
              <TableCell align="center" sx={{ padding: '1px', fontSize: '7px',   }}>{row.monday}</TableCell>
              <TableCell align="center" sx={{ padding: '1px', fontSize: '7px',   }}>{row.tuesday}</TableCell>
              <TableCell align="center" sx={{ padding: '1px', fontSize: '7px',   }}>{row.wednesday}</TableCell>
              <TableCell align="center" sx={{ padding: '1px', fontSize: '7px',  }}>{row.thursday}</TableCell>
              <TableCell align="center" sx={{ padding: '1px', fontSize: '7px',  }}>{row.friday}</TableCell>
              <TableCell align="center" sx={{ padding: '1px', fontSize: '7px',  }}>{row.saturday}</TableCell>
              <TableCell align="center" sx={{ padding: '1px', fontSize: '7px', }}>{row.sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}