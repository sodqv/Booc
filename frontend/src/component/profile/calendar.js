import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

export default function BasicDateCalendar({ selectedDate, onDateChange }) {

  return (
    <LocalizationProvider 
      dateAdapter={AdapterDayjs}
      adapterLocale="en-gb"
      localeText={{
        calendarWeekNumberHeaderText: '',
        calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
      }}
    >
      <DateCalendar 
        displayWeekNumber
        value={selectedDate}
        onChange={(newDate) => onDateChange(dayjs(newDate))}
        sx={{
          width: '100%',
          height: '290px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '8px',
          boxShadow: 3,

          '& .MuiPickersDay-root': {
            fontSize: '10px', 

            
            '&.Mui-selected': {
              backgroundColor: '#D66536 !important', 
              color: 'white !important', 
              '&:hover': {
                backgroundColor: '#D66536 !important',
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}