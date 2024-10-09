import * as React from 'react';

import CircleIcon from '@mui/icons-material/Circle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorPicker({ value, onChange }) {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(event, newColor) => onChange(newColor)}
      aria-label="color selection"
    >


      {/* Pink */}
      <ToggleButton 
            value="#FFA69E"
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
        <CircleIcon sx = {{ color: '#FFA69E' }}/>
      </ToggleButton>


      {/* Orange */}
      <ToggleButton 
            value="#FCAF58"
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
        <CircleIcon sx = {{ color: '#FCAF58' }}/>
      </ToggleButton>


      {/* Green */}
      <ToggleButton 
            value="#9DB17C"
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
        <CircleIcon sx = {{ color: '#9DB17C' }}/>
      </ToggleButton>


      {/* Purple */}
      <ToggleButton 
            value="#C490D1"
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
        <CircleIcon sx = {{ color: '#C490D1' }}/>
      </ToggleButton>


      {/* Blue */}
      <ToggleButton 
            value="#48639C"
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
        <CircleIcon sx = {{ color: '#48639C' }}/>
      </ToggleButton>



    </ToggleButtonGroup>
  );
}
