import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RepeatCheckboxes({ value, onChange }) {

  const handleChange = (event) => {
    const newValue = event.target.value;
    const currentValueArray = Array.isArray(value) ? value : [];


    if (newValue === 'never')     //if never is selected, uncheck all other boxes
    {
      onChange(['never']);    
    }
    else                        //if another option is selected, remove the check from never
    {
      const updatedValue = currentValueArray.includes(newValue) 
                           ? currentValueArray.filter((v) => v !== newValue) 
                           : [...currentValueArray.filter((v) => v !== 'never'), newValue];
      
      onChange(updatedValue);
    }
  };

  
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>

        
        {/* Never */}
        <FormControlLabel 
          control={<Checkbox 
                    checked={value.includes('never')} 
                    value="never"
                    onChange={handleChange}
                  />}
          label="Never"
          labelPlacement="start"
        />


        {/* Daily */}
        <FormControlLabel 
          sx={{ paddingLeft: '15px' }}
          value="daily"
          control={<Checkbox 
                    checked={value.includes('daily')}
                    value="daily"
                    onChange={handleChange}
                  />}
          label="Daily"
          labelPlacement="start"
        />


        {/* Weekly */}
        <FormControlLabel 
          sx={{ paddingLeft: '15px' }}
          value="weekly"
          control={<Checkbox 
                    checked={value.includes('weekly')}
                    value="weekly"
                    onChange={handleChange}
                  />}
          label="Weekly"
          labelPlacement="start"
        />


        {/* Monthly */}
        <FormControlLabel 
          sx={{ paddingLeft: '15px' }}
          value="monthly"
          control={<Checkbox 
                    checked={value.includes('monthly')}
                    value="monthly"
                    onChange={handleChange}
                  />}
          label="Monthly"
          labelPlacement="start"
        />


        {/* Yearly */}
        <FormControlLabel 
          sx={{ paddingLeft: '15px' }}
          value="yearly"
          control={<Checkbox 
                    checked={value.includes('yearly')}
                    value="yearly"
                    onChange={handleChange}
                  />}
          label="Yearly"
          labelPlacement="start"
        />


      </FormGroup>
    </FormControl>
  );
}
