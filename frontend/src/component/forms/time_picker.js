import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Localized from 'dayjs/plugin/localizedFormat';


export default function BasicTimePicker({ label }) {
  
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

        <TimePicker
          label={label}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={{ backgroundColor: '#ffffffff' }}
        />

    </LocalizationProvider>
  );
}
