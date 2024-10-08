import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ControlledRadioButtonsGroup({startingValue, setValueCallback}) {
  const [value, setValue] = React.useState(startingValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    setValueCallback(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel style={{ color: 'black' }} id="demo-controlled-radio-buttons-group">Starting page</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        row
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="0" control={<Radio sx={{color: 'withe', '&.Mui-checked': {color: 'black'}}}/>} label={<span style={{ color: 'black' }}>Profile</span>}/>
        <FormControlLabel value="1" control={<Radio sx={{color: 'withe', '&.Mui-checked': {color: 'black'}}}/>} label={<span style={{ color: 'black' }}>Feed</span>}/>
      </RadioGroup>
    </FormControl>
  );
}