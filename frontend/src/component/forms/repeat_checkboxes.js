import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RepeatCheckboxes() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row >

        <FormControlLabel 
          value="never"
          control={<Checkbox />}
          label="Never"
          labelPlacement="start"
        />

        <FormControlLabel sx={{ paddingLeft: '15px' }}
          value="daily"
          control={<Checkbox />}
          label="Daily"
          labelPlacement="start"
        />

        <FormControlLabel sx={{ paddingLeft: '15px' }}
          value="weekly"
          control={<Checkbox />}
          label="Weekly"
          labelPlacement="start"
        />

        <FormControlLabel sx={{ paddingLeft: '15px' }}
          value="monthly"
          control={<Checkbox />}
          label="Monthly"
          labelPlacement="start"
        />

        <FormControlLabel sx={{ paddingLeft: '15px' }}
          value="yearly"
          control={<Checkbox />}
          label="Yearly"
          labelPlacement="start"
        />

      </FormGroup>
    </FormControl>
  );
}
