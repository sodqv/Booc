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
    createData('00:04'),
    createData('00:06'),
    createData('00:08'),
    createData('00:09'),
    createData('00:10'),
    createData('00:11'),
    createData('00:12'),
    createData('00:13'),
    createData('00:14'),
    createData('00:15'),
    createData('00:16'),
    createData('00:17'),
    createData('00:18'),
    createData('00:20'),
    createData('00:22')
  ];
  
  export default function TimeTable() {
    return (
      <TableContainer component={Paper} 
      sx={{
        backgroundColor: '#D1C481', // Match the background color of the box
        boxShadow: 'none', // Remove any box shadow if present
        border: 'none', // Remove any border if present
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
                    textAlign: 'right', // Right-align text
                    fontSize: '11px',
                    width: '50%', // Set the width of the first cell to half of the table width
                    padding: '0px', // Remove padding
                    border: 'none', // Remove border
                    minWidth: 'auto',
                  }}
                >
                  {row.time}
                </TableCell>
                <TableCell
                  sx={{
                    width: '50%', // Set the width of the second cell to fill the remaining space
                    padding: '0px', // Remove padding
                    border: 'none', // Remove border
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
