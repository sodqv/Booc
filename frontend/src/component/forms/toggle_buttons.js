import * as React from 'react';

import CircleIcon from '@mui/icons-material/Circle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { yellow } from '@mui/material/colors';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="color selection"
    >

      <ToggleButton value="orange"
            sx = {{
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: 'none',
                minWidth: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                '&:hover': {backgroundColor: 'transparent', border: 'none'},
                '& .Mui-selected': {backgroundColor: 'transparent', border: 'none'}
              }}>
        <CircleIcon sx = {{ color: 'orange' }}/>
      </ToggleButton>


      <ToggleButton value="red"
            sx = {{
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: 'none',
                minWidth: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                '&:hover': {backgroundColor: 'transparent', border: 'none'},
                '&:Mui-selected': {backgroundColor: 'transparent', border: 'none'}
              }}>
        <CircleIcon sx = {{ color: 'red' }}/>
      </ToggleButton>


      <ToggleButton value="green"
            sx = {{
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: 'none',
                minWidth: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                '&:hover': {backgroundColor: 'transparent', border: 'none'},
                '&:Mui-selected': {backgroundColor: 'transparent', border: 'none'}
              }}>
        <CircleIcon sx = {{ color: 'green' }}/>
      </ToggleButton>


      <ToggleButton value="blue"
            sx = {{
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: 'none',
                minWidth: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                '&:hover': {backgroundColor: 'transparent', border: 'none'},
                '&:Mui-selected': {backgroundColor: 'transparent', border: 'none'}
              }}>
        <CircleIcon sx = {{ color: 'blue' }}/>
      </ToggleButton>


      <ToggleButton value="purple"
            sx = {{
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: 'none',
                minWidth: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                '&:hover': {backgroundColor: 'transparent', border: 'none'},
                '&:Mui-selected': {backgroundColor: 'transparent', border: 'none'}
              }}>
        <CircleIcon sx = {{ color: 'purple' }}/>
      </ToggleButton>



    </ToggleButtonGroup>
  );
}
