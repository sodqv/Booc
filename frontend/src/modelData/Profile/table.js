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
    if ( num < 7 ) {
      j = 0;
    } else if ( num >= 7 && num < 8 ) {
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
    } else if ( num >= 18 && num < 19) {
      j = 12;
    } else if ( num >= 19 && num < 20) {
      j = 13;
    } else if ( num >= 20 && num < 21) {
      j = 14;
    } else if ( num >= 21) {
      j = 15;
    }
    return j;
}

function getStartMinute(num, id, title) {
  id.style.backgroundImage = "linear-gradient(white, white)";
  id.style.backgroundRepeat = "no-repeat";
  
  if (num < 5) {
    id.style.backgroundSize = "100% 0%";
    id.textContent = `${title}`;
    return 1;
  } else if (num >= 5 && num < 10) {
    id.style.backgroundSize = "100% 8%";
  } else if (num >= 10 && num < 15) {
    id.style.backgroundSize = "100% 16%";
  } else if (num >= 15 && num < 20) {
    id.style.backgroundSize = "100% 25%";
  } else if (num >= 20 && num < 25) {
    id.style.backgroundSize = "100% 33%";
  } else if (num >= 25 && num < 30) {
    id.style.backgroundSize = "100% 41%";
  } else if (num >= 30 && num < 35) {
    id.style.backgroundSize = "100% 50%";
  } else if (num >= 35 && num < 40) {
    id.style.backgroundSize = "100% 58%";
  } else if (num >= 40 && num < 45) {
    id.style.backgroundSize = "100% 66%";
  } else if (num >= 45 && num < 50) {
    id.style.backgroundSize = "100% 75%";
  } else if (num >= 50 && num < 55) {
    id.style.backgroundSize = "100% 83%";
  } else if (num >= 55 && num < 60) {
    id.style.backgroundSize = "100% 91%";
  }

  return 0;
}

function getEndMinute(num, id, color) {
  id.style.backgroundImage = "linear-gradient(" + color + ", " + color + ")";
  id.style.backgroundRepeat = "no-repeat";

  if (num < 5) {
    id.style.backgroundSize = "100% 0%";
  } else if (num >= 5 && num < 10) {
    id.style.backgroundSize = "100% 8%";
  } else if (num >= 10 && num < 15) {
    id.style.backgroundSize = "100% 16%";
  } else if (num >= 15 && num < 20) {
    id.style.backgroundSize = "100% 25%";
  } else if (num >= 20 && num < 25) {
    id.style.backgroundSize = "100% 33%";
  } else if (num >= 25 && num < 30) {
    id.style.backgroundSize = "100% 41%";
  } else if (num >= 30 && num < 35) {
    id.style.backgroundSize = "100% 50%";
  } else if (num >= 35 && num < 40) {
    id.style.backgroundSize = "100% 58%";
  } else if (num >= 40 && num < 45) {
    id.style.backgroundSize = "100% 66%";
  } else if (num >= 45 && num < 50) {
    id.style.backgroundSize = "100% 75%";
  } else if (num >= 50 && num < 55) {
    id.style.backgroundSize = "100% 83%";
  } else if (num >= 55 && num < 60) {
    id.style.backgroundSize = "100% 91%";
  }
}

export default function BasicTable({ selectedDate, onDateChange }) {

  const [weekData, setWeekData] = React.useState(createWeekData(selectedDate.startOf('isoWeek')));

  const [daysOfWeek, setDaysOfWeek] = React.useState([]);

  const startOfWeek = selectedDate.startOf('isoWeek');

  useEffect(() => {
    const newDaysOfWeek = Array.from({ length: 7 }, (_, index) =>
      startOfWeek.add(index, 'day')
    );
    setDaysOfWeek(newDaysOfWeek);
  }, [selectedDate]);

  // Days in current week
  const numberOfRow = Array.from({ length: 16 }, (_, index) =>
    startOfWeek.add(index, 'day').format('dddd D')
  );

  var col = -1;
  var row = -1;

  // Change week
  const changeWeek = (amount) => {
    const newDate = selectedDate.add(amount, 'week');
    onDateChange(newDate);
    setWeekData(createWeekData(newDate.startOf('isoWeek')));
    populateTable();
    
  };

  const date = new Date();
  
  const today = dayjs(date).format('YYYY-MM-DD');

  // get curent user
  const user = useLoaderData();

  // states
  const [meetings, setMeeting] = useState([]);

  //New
  useEffect(() => {
    const daysInWeek = Array.from({ length: 7 }, (_, index) =>
      startOfWeek.add(index, 'day')
    );
    setDaysOfWeek(daysInWeek);
  }, [selectedDate])

  // get events
  useEffect(() => {
      const fetchEvent = async () => {
          const event = await getEvents(user);
          setMeeting(event);
      }
      fetchEvent();
  }, [user, selectedDate]);

  useEffect(() => {
    populateTable();
  }, [daysOfWeek, meetings]);

  // Populate the table
  function populateTable() {
    // Loop through meetings
    meetings.map((meeting, value) => {
      const meetDate = new Date(meeting.date).toLocaleDateString(navigator.language, { month: 'numeric', day: 'numeric' })
      
      for (var i = 0; i < daysOfWeek.length; i++) {
        // Cheek if the meeting should be displayed
        if ( daysOfWeek[i].format('D/M')  === meetDate) {
          
          // Set the meet and leav times
          const meetHour = new Date(meeting.fromTime).toLocaleTimeString(navigator.language, { hour: '2-digit' });
          const leaveHour = new Date(meeting.toTime).toLocaleTimeString(navigator.language, { hour: '2-digit' });

          // Cords for meeting
          const m = getHour(meetHour);
          const l = getHour(leaveHour);
          var titleWritten = 0;
          for(var j = m; j <= l; j++) {
            const showMId = `${j}${i}`;
            const meetCell = document.getElementById(showMId);

            if ( j === m) {
              meetCell.style.backgroundColor = `${meeting.color}`;
              meetCell.style.borderBottom = `3px solid ${meeting.color}`;

              const meetMin = new Date(meeting.fromTime).toLocaleTimeString(navigator.language, { minute: '2-digit' });
              titleWritten = getStartMinute(meetMin, meetCell, meeting.title);
            } else if ( j === l) {
              const leaveMin = new Date(meeting.toTime).toLocaleTimeString(navigator.language, { minute: '2-digit' })
              getEndMinute(leaveMin, meetCell, meeting.color);
            } else {
              meetCell.style.backgroundColor = `${meeting.color}`;
              meetCell.style.borderBottom = `3px solid ${meeting.color}`;
              if (!titleWritten) {
                meetCell.textContent = `${meeting.title}`;
                titleWritten = 1;
              }
            }
            meetCell.title = `${meeting.title}`;
          }
        }
      }
      
    })
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
                    sx={today === day.format('YYYY-MM-DD') ? {...styleCell, backgroundColor: '#D66536', color: 'white', fontWeight: 'bold', fontSize: '15px'} : styleCellHead} 
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
                      <TableCell id={id} align="center" sx={{...styleCell, whiteSpace: 'pre', color: 'white', fontWeight: 'bold', fontSize: '15px'}} key={fullDate}>
                        {" "}
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