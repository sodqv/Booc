import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function VisibilityPicker({ value, onChange }) {
  
  const radioStyles = (isChecked) => ({
    color: isChecked ? 'default' : 'default',
    '&.Mui-checked': {
      color: '#D66536',
    },
  });
  
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        value={value}
        onChange={(newVisibility) => onChange(newVisibility.target.value)}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        
        <FormControlLabel value="private" control={<Radio sx={radioStyles(value === 'private')} />} label="Private" />
        <FormControlLabel value="public" control={<Radio sx={radioStyles(value === 'private')} />} label="Public" />

      </RadioGroup>
    </FormControl>
  );
}

