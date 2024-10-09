import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(time) {
    return { time };
  }
  
  const rows = [
    createData('06:00'),
    createData('07:00'),
    createData('08:00'),
    createData('09:00'),
    createData('10:00'),
    createData('11:00'),
    createData('12:00'),
    createData('13:00'),
    createData('14:00'),
    createData('15:00'),
    createData('16:00'),
    createData('17:00'),
    createData('18:00'),
    createData('19:00'),
    createData('20:00'),
    createData('21:00'),
    createData('22:00')
  ];
  
  export default function TimeTable() {
    return (
      <TableContainer component={Paper} 
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: 'none'
      }}>
        <Table sx={{ borderCollapse: 'collapse', height: 'calc(100vh - 90px)' }} aria-label="simple table">
        
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:first-child td, &:first-child th': { height: '35px' }}}
              >
                <TableCell
                  sx={{
                    textAlign: 'right',
                    verticalAlign: 'bottom', 
                    fontSize: '11px',
                    padding: '0px', 
                    border: 'none'
                  }}
                >
                  {row.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }