import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextFieldOutlined({content}){
    return <TextField id="outlined-basic" label={content} variant="outlined" />
  }

export function TextFieldPassword(){
    return (<TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />);
}