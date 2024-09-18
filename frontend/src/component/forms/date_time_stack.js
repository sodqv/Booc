import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TimePickerValue from "./time_picker";
import BasicDatePicker from "./date_picker";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'f5ebe0',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  border: 'none',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function DateTimeDirectionStack() {
  return (
    <div>
      <Stack direction="row" spacing={1} alignItems="flex-start" >

        <Item>
            <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Date</Typography>
            <BasicDatePicker />
        </Item>

        
        <Stack direction="row" spacing={2} sx={{ marginLeft: '16px', marginTop: '25px', justifyItems: 'end'}}>

            <Item>
                <TimePickerValue label = "From" />
            </Item>

            <Item>
                <TimePickerValue label = "To" />
            </Item>
        </Stack>

      </Stack>
    </div>
  );
}
