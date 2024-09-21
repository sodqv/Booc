import * as React from 'react';
import TextField from '@mui/material/TextField';

//Content is whatever is going to be writted on the field before the user does anything
export default function TextFieldOutlined(props){
    return <TextField {...props}/>
  }

TextFieldOutlined.muiName = "TextField";

export function TextFieldPassword(){
    return (<TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />);
}

