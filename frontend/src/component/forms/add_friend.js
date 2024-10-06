import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

import BasicTextField from "./text_field";
import FriendButtonDirectionStack from "./friend_button_stack";

import {api} from '../../controllers/axiosTemplate';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    maxWidth: '800px',
    height: '20vh',
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


  export default function BasicFriendModal() {
    const [open, setOpen] = React.useState(false);

    const [username, setUsername] = useState('');
  

    const handleOpen = () => setOpen(true);
  
    const handleClose = () => {
      setOpen(false);
      setUsername('');              //resets the username when the form is closed
    };
  
  
  /* 
    //handle form input
    const handleInput = (field, value) => {
      setFormData({ ...formData, [field]: value });
    }
  */
  
    /* 
    //handle form submission
    const handleSubmit = async () => {
      try {
  
          console.log('Adding friend:', username);        //puts the friend request in the console log in the browser
  
  
  
          const response = await api.post('/api/addFriend', { username });  
  
          if (response.status === 201)
          {
              alert('Friend added successfully');
              handleClose();      //closes the add friend form
          }
          else
          {
              alert('Failed to add friend');
          }
      }
      catch (error) {
          console.error('Error when adding friend:', error.response?.data || error.message);
          alert('An error occurred while adding the friend');
      }
    };
    */
  
  
    return (
      <div>
        <Button onClick={handleOpen} sx={{ width: '100%', padding: '8px', backgroundColor: '#d66536', color: '#f5ebe0' }}>
            Add Friend
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
  
          <Box sx={style}>
            <div style={{width: '100%', height: '100%', paddingLeft: '10px'}}>
  
  
              {/* Header - Add Friend */}
              <Grid sx={{ display: 'grid', columnGap: 10, rowGap: 5, gridTemplateColumns: 'repeat(1, 1fr)'}}>
                  <Item>
                      <Typography textAlign={'center'} sx={{ fontWeight: 'bold', fontSize: 20, marginTop: -2 }}>Add Friend</Typography>
                  </Item>
              </Grid>


              {/* Username Input */}
              <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                <Item>
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Enter your friend's username</Typography>
                    <BasicTextField 
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                </Item>
            </Grid>


            {/* Buttons - Add and Cancel */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)', paddingBottom: '15px' }}>
                <Item>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <FriendButtonDirectionStack handleClose={handleClose}/>
                    </Box>
                </Item>
            </Grid>
  
  
  
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
