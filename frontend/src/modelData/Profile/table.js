import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';

function createData(
  left,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  right
) {
  return {left, monday, tuesday, wednesday, thursday, friday, saturday, sunday, right };
}

const rows = [
  createData('','Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('','', 'Meeting', '', '', '', '', ''),
  createData('','Meeting', '', '', 'Meeting', '', '', ''),
  createData('','Meeting', '', '', '', '', '', ''),
  createData('', '', '', '', 'Hairdresser', '', ''),
  createData('', 'Workout', '', 'Meeting', '', 'Party'),
  createData('', '', '', '', '', 'Party'),
  createData('','Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('','Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('','Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('','Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('','Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('','Meeting', 'Dentist', '', '', '', 'Dinner'),
  createData('','Meeting', 'Dentist', '', '', '', 'Dinner')
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
function nameOfDay(day) {
  
  switch(day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "";
  }
}

export default function BasicTable() {

  const [selectedDate, setSelectedDate] = React.useState(dayjs());

  // Start of week
  const startOfWeek = selectedDate.startOf('week').add(1, 'day');

  // Days in current week
  const daysOfWeek = Array.from({ length: 7 }, (_, index) =>
    startOfWeek.add(index, 'day').format('dddd D')
  );

  // Change week
  const changeWeek = (amount) => {
    setSelectedDate(selectedDate.add(amount, 'week'));
  };

  const todayCellStyle = {
    ...styleCell,
    backgroundColor: '#D66536',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
  }
  
  const date = new Date();
  const today = nameOfDay(date.getDay()) + " " + date.getDate();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ tableLayout: 'fixed',minWidth: 400, bgcolor: '#f5f5f5', height: 'calc(100vh - 90px)' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{...styleCellHead, width: '30px'}}>
                <button style={{fontWeight: 'bold', border: 'transparent', background: '#D66536', fontSize: '20px', color: 'white', borderRadius: '14px'}} variant="contained" onClick={() => changeWeek(-1)}>
                  ←
                </button>
              </TableCell>

              {daysOfWeek.map((day) => (
                <TableCell 
                  align="center" 
                  sx={today === day ? todayCellStyle : styleCellHead} 
                  key={day}>
                  {day}
                </TableCell>
              ))}
              
              <TableCell align="center" sx={{...styleCellHead, width: '30px'}}>
                <button style={{fontWeight: 'bold', border: 'transparent', background: '#D66536', fontSize: '1820x', color: 'white', borderRadius: '14px'}} variant="contained" onClick={() => changeWeek(1)} >
                  →
                </button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody> {rows.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center" sx={ styleCell }>{row.left}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.monday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.tuesday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.wednesday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.thursday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.friday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.saturday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.sunday}</TableCell>
              <TableCell align="center" sx={ styleCell }>{row.right}</TableCell>
            </TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}