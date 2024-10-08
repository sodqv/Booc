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

import { useState, useEffect } from 'react';
import { getEvents } from '../event';
import { useLoaderData } from 'react-router-dom';

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

function getHour(num) {
  var j = 0;
    if ( num < 6 ) {
      j = 0;
    } else if ( num >= 6 && num < 8 ) {
      j = 1;
    } else if ( num >= 8 && num < 9) {
      j = 2;
    } else if ( num >= 9 && num < 10) {
      j = 3;
    } else if ( num >= 10 && num < 11) {
      j = 4;
    } else if ( num >= 11 && num < 12) {
      j = 5;
    } else if ( num >= 12 && num < 13) {
      j = 6;
    } else if ( num >= 13 && num < 14) {
      j = 7;
    } else if ( num >= 14 && num < 15) {
      j = 8;
    } else if ( num >= 15 && num < 16) {
      j = 9;
    } else if ( num >= 16 && num < 17) {
      j = 10;
    } else if ( num >= 17 && num < 18) {
      j = 11;
    } else if ( num >= 18 && num < 20) {
      j = 12;
    } else if ( num >= 20) {
      j = 13;
    }
    return j;
}

export default function BasicTable({ selectedDate, onDateChange, fetchEventsForWeek }) {

  const [weekData, setWeekData] = React.useState(createWeekData(selectedDate.startOf('isoWeek')));
  
  // const [eventData, setEventData] = React.useState({});

  const startOfWeek = selectedDate.startOf('isoWeek');

  // Days in current week
  const daysOfWeek = Array.from({ length: 7 }, (_, index) =>
    startOfWeek.add(index, 'day')
  );

  // Days in current week
  const numberOfRow = Array.from({ length: 14 }, (_, index) =>
    startOfWeek.add(index, 'day').format('dddd D')
  );

  var col = -1;
  var row = -1;
  
  //console.log(numberOfRow);

  // Change week
  const changeWeek = (amount) => {
    const newDate = selectedDate.add(amount, 'week');
    onDateChange(newDate);
    setWeekData(createWeekData(newDate.startOf('isoWeek')));
  };

  // const todayCellStyle = {
  //   ...styleCell,
  //   backgroundColor: '#D66536',
  //   color: 'white',
  //   fontSize: '15px',
  //   fontWeight: 'bold',
  // }

  const date = new Date();
  
  const today = dayjs(date).format('dddd D');









  // get curent user
  const user = useLoaderData();

  // states
  const [meetings, setMeeting] = useState([]);

  // get events
  useEffect(() => {
      const fetchEvent = async () => {
          const event = await getEvents(user);
          //console.log('Fetched Events:', event);
          setMeeting(event);
      }
      fetchEvent();
  }, [user]);

  //console.log("Det ger: ", meetings)

  // Populate the table
  function populateTable() {
    // Loop through meetings
    meetings.map((meeting, value) => {
      const meetDate = new Date(meeting.date).toLocaleDateString(navigator.language, { month: 'long', day: 'numeric' })
      for (var i = 0; i < daysOfWeek.length; i++) {
        
        // Cheek if the meeting should be displayed
        if ( daysOfWeek[i].format('D MMMM')  === meetDate) {

          const meetHour = new Date(meeting.fromTime).toLocaleTimeString(navigator.language, { hour: '2-digit' }); //, minute: '2-digit' 
          const leaveHour = new Date(meeting.toTime).toLocaleTimeString(navigator.language, { hour: '2-digit' }); //, minute: '2-digit' 

          const m = getHour(meetHour);
          const l = getHour(leaveHour);
          // console.log("mh ger:" + meetHour + "   lh ger: " + leaveHour)
          // console.log("m ger:" + m + "   l ger: " + l)

          for(var j = m; j <= l; j++) {
            const showMId = `${j}${i}`;
            const meetCell = document.getElementById(showMId);
            meetCell.style.backgroundColor = `${meeting.color}`;
            //meetCell.style.borderBottom = `3px solid ${meeting.color}`;
            
              //meetCell.textContent = `${meeting.title}`;
            
            
            
          }
        }
      }

    })
    // const cell = document.getElementById("23");
    // cell.style.backgroundColor = 'green';
  }

  populateTable();







  

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
                {"<"}
              </TableCell>

              {daysOfWeek.map((day, index) => {
                const fullDate = startOfWeek.add(index, 'day').format('YYYY-MM-DD');
                return (
                  <TableCell 
                    align="center" 
                    sx={today === day ? {...styleCell, backgroundColor: '#D66536', color: 'white', fontWeight: 'bold', fontSize: '15px'} : styleCellHead} 
                    key={fullDate}>
                    {day.format('dddd D')}
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
                {">"}
              </TableCell>

            </TableRow>
          </TableHead>

          <TableBody>


          {numberOfRow.map((day, index) => {
            row++;
            col = -1;
            return (
              <TableRow>
                <TableCell align="center" sx={{...styleCell}}></TableCell>
                  {daysOfWeek.map((day, index) => {
                    const fullDate = startOfWeek.add(index, 'day').format('YYYY-MM-DD');
                    col++; 
                    const id = `${row}${col}`;
                    return (
                      <TableCell id={id} align="center" sx={{...styleCell}} key={fullDate}>
                        {/* <ul style={{ padding: '0', listStyleType: 'none' }}>
                          {(eventData[fullDate] || []).map((event, i) => (
                            <li key={i}>{event}</li>
                          ))}
                        </ul> */}
                        <p className={id}></p>
                      </TableCell>
                    );
                  })}
                <TableCell align="center" sx={{...styleCell}}></TableCell>
              </TableRow>
            );
          })}


          </TableBody>
          
        </Table>
      </TableContainer>
    </div>
  );
}