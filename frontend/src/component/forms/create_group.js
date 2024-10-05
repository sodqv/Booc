import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

import BasicTextField from "./text_field";
import ButtonDirectionStack from "./button_stack";
import Selector from "./selector";
import {getGroup, getAllGroups, createGroup, updateGroup, deleteGroup} from "../../modelData/group.js";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  maxWidth: '500px',
  height: '35vh',
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




export default function GroupModal() {
  const [open, setOpen] = React.useState(false);


  //this is the data that is set in the form
  const [formData, setFormData] = React.useState ({
    groupName: '',
    invitePeople: [],
  });


  
  //this is an initialization for clearing the form
  const initialFormData = {
    groupName: '',
    invitePeople: [],
  };




  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setFormData(initialFormData);   //clear the form
    setOpen(false);
  };



  //handle form input
  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  }



  //handle form submission
  const handleSubmit = async () => {
    try {

        //console.log('Form data:', formData);                                //puts the submitted data in the console log in the browser

        const response = await createGroup(formData);

        if (response === "Success")
        {
            console.log('Group created successfully');                          
            handleClose();      //closes the create event form
        }
        else
        {
            console.log('Failed to create group');
        }
    }
    catch (error) {
        console.error('Error when creating group:', error.response?.data || error.message);     // prints the error message in console log
        alert('An error occurred while creating the group');
    }
  };




  return (
    <div>
      <Button onClick={handleOpen} sx={{ width: '100%', padding: '8px', backgroundColor: '#d66536', color: '#f5ebe0' }}>
          Create Group
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <div style={{width: '100%', height: '100%', paddingLeft: '10px'}}>


            {/* Header - Create Group */}
            <Grid sx={{ display: 'grid', columnGap: 10, rowGap: 5, gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography textAlign={'center'} sx={{ fontWeight: 'bold', fontSize: 20, marginTop: -2 }}>Create Group</Typography>
                </Item>
            </Grid>



            {/* Group Name */}
            <Grid sx={{ display: 'grid', width: '90%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Group Name</Typography>
                    <BasicTextField 
                        value={formData.groupName} 
                        onChange={(newGroupName) => handleInput('groupName', newGroupName.target.value)} 
                    />
                </Item>
            </Grid>



            {/* Add people */}
            <Grid sx={{ display: 'grid', width: '90%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536', paddingBottom: '5px' }}>Invite People</Typography>
                    <Selector 
                        value={formData.invitePeople}
                        onChange={(newInvitePeople) => handleInput('invitePeople', newInvitePeople)}
                    />
                </Item>
            </Grid>



            {/* Buttons - Cancel and Create */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)', paddingBottom: '15px'}}>
                <Item>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <ButtonDirectionStack handleClose={handleClose} handleSubmit={handleSubmit} />
                    </Box>
                </Item>
            </Grid>



          </div>
        </Box>
      </Modal>
    </div>
  );
}

