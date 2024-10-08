import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import TableMeeting from './tableMeeting';

dayjs.extend(isoWeek);

const createWeekData = (startDate) => {
  const weekData = {};
  for (let i = 0; i < 7; i++) {
    const day = startDate.add(i, 'day').format('YYYY-MM-DD');
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

export default function BasicTable({ selectedDate, onDateChange, fetchEventsForWeek }) {
  
  const [weekData, setWeekData] = React.useState(createWeekData(selectedDate.startOf('isoWeek')));
  
  const [eventData, setEventData] = React.useState({});

  const startOfWeek = selectedDate.startOf('isoWeek');

  // Days in current week
  const daysOfWeek = Array.from({ length: 7 }, (_, index) =>
    startOfWeek.add(index, 'day').format('dddd D')
  );

  // Change week
  const changeWeek = (amount) => {
    const newDate = selectedDate.add(amount, 'week');
    onDateChange(newDate);
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
  
  const today = dayjs(date).format('dddd D');

 // Get events from database -- NEED HELP
 React.useEffect(() => {
  // Fetch events for the current week from your database
  const startOfWeekISO = startOfWeek.format('YYYY-MM-DD');
  fetchEventsForWeek(startOfWeekISO).then(fetchedEvents => {
    setEventData(fetchedEvents);
  });
}, [selectedDate]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ tableLayout: 'fixed', minWidth: 400, bgcolor: 'rgba(255, 255, 255, 0.5)', height: 'calc(100vh - 90px)' }} aria-label="simple table">
          
          <TableHead>
            <TableRow>
              <TableCell align="center" 
                sx={{
                  ...styleCellHead, 
                  width: '30px',
                  color: '#D66536',
                  fontSize: '20px',
                  cursor: 'pointer', 
                  paddingRight: '5px',
                  fontWeight: '900'
                }}
                variant="contained" 
                onClick={() => changeWeek(-1)}
                >
                {/* <button style={{fontWeight: 'bold', border: 'transparent', background: '#D66536', fontSize: '20x', color: 'white', borderRadius: '14px'}} variant="contained" onClick={() => changeWeek(-1)}>
                  {"<"}
                </button> */}
                {"<"}
              </TableCell>

              {daysOfWeek.map((day, index) => {
                const fullDate = startOfWeek.add(index, 'day').format('YYYY-MM-DD');
                return (
                  <TableCell 
                    align="center" 
                    sx={today === day ? {...styleCell, backgroundColor: '#D66536', color: 'white', fontWeight: 'bold', fontSize: '15px'} : styleCellHead} 
                    key={fullDate}>
                    {day}
                  </TableCell>
                );
              })}
              
              <TableCell 
                align="center" 
                sx={{
                  ...styleCellHead, 
                  width: '30px',
                  color: '#D66536',
                  fontSize: '20px',
                  cursor: 'pointer', 
                  paddingRight: '5px',
                  fontWeight: '900'
                }}
                variant="contained" 
                onClick={() => changeWeek(1)} 
              >
                {/* <button style={{fontWeight: 'bold', border: 'transparent', background: '#D66536', fontSize: '200x', color: 'white', borderRadius: '14px'}} variant="contained" onClick={() => changeWeek(1)} >
                  {">"}
                </button> */}
                {">"}
              </TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              {daysOfWeek.map((day, index) => {
                const fullDate = startOfWeek.add(index, 'day').format('YYYY-MM-DD');
                return (
                  <TableCell align="center" sx={styleCell} key={fullDate}>
                    <ul style={{ padding: '0', listStyleType: 'none' }}>
                      {(eventData[fullDate] || []).map((event, i) => (
                        <li key={i}>{event}</li>
                      ))}
                    </ul>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
          
        </Table>
      </TableContainer>
      <TableMeeting />
    </div>
  );
}