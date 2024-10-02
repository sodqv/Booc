import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldMultiline({ value, onChange }) {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '95%' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          value={value}
          onChange={onChange}
          sx={{ backgroundColor: '#ffffffff' }}
        />

      </div>
    </Box>
  );
}
