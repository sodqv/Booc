import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import BasicTextField from "./text_field";
import { Typography } from '@mui/material';
import MultilineTextField from "./multiline_text_field";
import ToggleButtons from "./toggle_buttons";
import CheckboxesRepeat from "./checkboxes_repeat";
import CheckboxesVisibility from "./checkboxes_visibility";
import ButtonDirectionStack from "./button_stack";
import DateTimeDirectionStack from "./date_time_stack";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f5ebe0',
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
    <div style={{width: '100%', height: '100%'}}>

        <Grid sx={{ display: 'grid', columnGap: 10, rowGap: 5, gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography textAlign={'center'} sx={{ fontWeight: 'bold', fontSize: 20, marginTop: -2 }}>Create New Event</Typography>
            </Item>
        </Grid>


        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Title</Typography>
                <BasicTextField />
            </Item>
        </Grid>


        <Item>
            <Grid sx={{ display: 'grid', columnGap: 1, gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <DateTimeDirectionStack />
            </Grid>
        </Item>


        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Location</Typography>
                <BasicTextField />
            </Item>
        </Grid>


        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Description</Typography>
                <MultilineTextField />
            </Item>
        </Grid>


        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Color</Typography>
                <ToggleButtons />
            </Item>
        </Grid>


        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Repeat</Typography>
                <CheckboxesRepeat />
            </Item>
        </Grid>


        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Visibility</Typography>
                <CheckboxesVisibility />
            </Item>
        </Grid>


        <Grid sx={{ display: 'grid', width: '695px', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Item>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ButtonDirectionStack />
                </Box>
            </Item>
        </Grid>


    </div>
  );
}
