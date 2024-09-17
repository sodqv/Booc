import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import BasicTextField from "./text_field";
import { Typography } from '@mui/material';
import BasicDatePicker from "./date_picker";
import TimePickerValue from "./time_picker";
import MultilineTextField from "./multiline_text_field";
import ToggleButtons from "./toggle_buttons";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  border: 'none',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid() {
  return (
    <div style={{width: '100%'}}>
        <Grid sx={{ display: 'grid', columnGap: 10, rowGap: 5, gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography textAlign={'center'}>Create New Event</Typography>
            </Item>
        </Grid>

        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{textAlign: 'left'}}>Title</Typography>
                <BasicTextField />
            </Item>
        </Grid>

        <Item>
            <Grid sx={{ display: 'grid', columnGap: 1, gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <Item>
                    <Typography sx = {{textAlign: 'left'}}>Date</Typography>
                    <BasicDatePicker />
                </Item>

                <Item sx = {{marginTop: '25px'}}>
                    <TimePickerValue label = "From"/>
                </Item>

                <Item sx = {{marginTop: '25px'}}>
                    <TimePickerValue label = "To" />
                </Item>
            </Grid>
        </Item>

        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{textAlign: 'left'}}>Location</Typography>
                <BasicTextField />
            </Item>
        </Grid>

        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{textAlign: 'left'}}>Description</Typography>
                <MultilineTextField />
            </Item>
        </Grid>

        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{textAlign: 'left'}}>Color</Typography>
                <ToggleButtons />
            </Item>
        </Grid>


    </div>
  );
}
