import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


//New
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

//New
dayjs.extend(isoWeek);

const createWeekData = (startDate) => {
  const weekData = {};
  for (let i = 0; i < 7; i++) {
    const day = startDate.add(i, 'day').format('dddd D');
    weekData[day] = [];
  }
  return weekData;
};

const styleCellHead = {
  fontWeight: 'bold', 
  padding: '2px', 
  fontSize: '15px'
}

const styleCell = { 
  padding: '2px', 
  fontSize: '11px'
}

export default function BasicTable({ selectedDate, onDateChange }) {
  
  //New - modifyed with isoWeek
  const [weekData, setWeekData] = React.useState(createWeekData(selectedDate.startOf('isoWeek')));
  
  
  // Start of week
  //const startOfWeek = selectedDate.startOf('week').add(1, 'day');
  //New
  const startOfWeek = selectedDate.startOf('isoWeek');

  // Days in current week
  const daysOfWeek = Array.from({ length: 7 }, (_, index) =>
    startOfWeek.add(index, 'day').format('dddd D')
  );

  // Change week
  const changeWeek = (amount) => {
    const newDate = selectedDate.add(amount, 'week');
    onDateChange(newDate);
    //New - modifyed with isoWeek
    setWeekData(createWeekData(newDate.startOf('isoWeek')));
  };

  const todayCellStyle = {
    ...styleCell,
    backgroundColor: '#D66536',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
  }

  const date = new Date();
  //New
  const today = dayjs(date).format('dddd D');

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

          { /*New */}
          <TableBody>
            <TableRow>
              {daysOfWeek.map((day) => (
                <TableCell align="center" sx={{ padding: '2px', fontSize: '11px' }} key={day}>
                  <ul style={{ padding: '0', listStyleType: 'none' }}>
                    {(weekData[day] || []).map((event, index) => (
                      <li key={index}>{event}</li>
                    ))}
                  </ul>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}