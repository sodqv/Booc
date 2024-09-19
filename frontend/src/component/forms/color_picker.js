import * as React from 'react';

import CircleIcon from '@mui/icons-material/Circle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorPicker() {
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


      {/* Orange */}
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
                '& .Mui-selected': {backgroundColor: 'transparent', border: 'none'},
              }}>
        <CircleIcon sx = {{ color: 'orange' }}/>
      </ToggleButton>


      {/* Red */}
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


      {/* Green */}
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


      {/* Blue */}
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


      {/* Purple */}
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
