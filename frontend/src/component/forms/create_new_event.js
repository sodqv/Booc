import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import BasicTextField from "./text_field";
import { Typography } from '@mui/material';
import MultilineTextField from "./multiline_text_field";
import ToggleButtons from "./color_picker";
import RepeatCheckboxes from "./repeat_checkboxes";
import VisibilityPicker from "./visibility_picker";
import ButtonDirectionStack from "./button_stack";
import BasicDatePicker from "./date_picker";
import BasicTimePicker from "./time_picker";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '800px',
  height: '80vh',
  bgcolor: '#f5ebe0',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto'
};


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




export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Create New Event</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <div style={{width: '100%', height: '100%', paddingLeft: '10px'}}>

            {/* Header - Create New Event */}
            <Grid sx={{ display: 'grid', columnGap: 10, rowGap: 5, gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography textAlign={'center'} sx={{ fontWeight: 'bold', fontSize: 20, marginTop: -2 }}>Create New Event</Typography>
                </Item>
            </Grid>


            {/* Title */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Title</Typography>
                    <BasicTextField />
                </Item>
            </Grid>


            {/* Date */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536', marginLeft: 0 }}>Date</Typography>
                </Item>
            </Grid>

            <Grid sx={{ display: 'grid', columnGap: 1, width: '100%', gridTemplateColumns: 'repeat(3, auto)', paddingLeft: '16px', paddingRight: '30px' }}>

                <BasicDatePicker />
                <BasicTimePicker  />
                <BasicTimePicker />

            </Grid>
 


            {/* Location */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)', paddingTop: '15px'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Location</Typography>
                    <BasicTextField />
                </Item>
            </Grid>


            {/* Description */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Description</Typography>
                    <MultilineTextField />
                </Item>
            </Grid>


            {/* Color */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Color</Typography>
                    <ToggleButtons />
                </Item>
            </Grid>


            {/* Repeat */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Repeat</Typography>
                    <RepeatCheckboxes />
                </Item>
            </Grid>


            {/* Visibility */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Visibility</Typography>
                    <VisibilityPicker />
                </Item>
            </Grid>


            {/* Buttons - Cancel and Create */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)', paddingBottom: '15px'}}>
                <Item>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <ButtonDirectionStack handleClose={handleClose}/>
                    </Box>
                </Item>
            </Grid>


          </div>
        </Box>
      </Modal>
    </div>
  );
}
