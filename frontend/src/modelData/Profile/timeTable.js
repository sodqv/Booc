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
    createData('04:00'),
    createData('06:00'),
    createData('08:08'),
    createData('09:09'),
    createData('10:00'),
    createData('11:00'),
    createData('12:00'),
    createData('13:00'),
    createData('14:00'),
    createData('15:00'),
    createData('16:00'),
    createData('17:00'),
    createData('18:00'),
    createData('20:00'),
    createData('22:00')
  ];
  
  export default function TimeTable() {
    return (
      <TableContainer component={Paper} 
      sx={{
        backgroundColor: '#f5ebe0',
        boxShadow: 'none',
        border: 'none',
        padding: 0,
      }}>
        <Table sx={{ minWidth: 10, borderCollapse: 'collapse' }} aria-label="simple table">
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '& td': { borderBottom: 'none' }, // Remove border between rows
                  height: '30px', // Adjust row height if needed
                }}
              >
                <TableCell
                  sx={{
                    textAlign: 'right', 
                    fontSize: '11px',
                    width: '50%', 
                    padding: '0px', 
                    border: 'none',
                    minWidth: 'auto',
                  }}
                >
                  {row.time}
                </TableCell>
                <TableCell
                  sx={{
                    width: '50%',
                    padding: '0px',
                    border: 'none',
                  }}
                >
                  {/* Empty cell to fill space */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }