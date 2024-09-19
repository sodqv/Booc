import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <Box
        sx={{
          width: '240px', 
          height: '200px', 
          
          '& .MuiPickersDay-root': {
            fontSize: '8px', 
          },
        }}
      >
        <DateCalendar
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}