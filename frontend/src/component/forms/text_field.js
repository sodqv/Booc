import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField({ value, onChange }) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '95%' } }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        variant="outlined"
        value={value}                                 //pass the value prop
        onChange={onChange}                           // pass the onChange prop
        sx={{ backgroundColor: '#ffffffff' }} />
    </Box>
  );
}
