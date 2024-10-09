import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

import BasicTextField from "./text_field";
import FriendButtonDirectionStack from "./friend_button_stack";

import { //getCurrentUser, 
  addFriend } from "../../modelData/friend.js";
import { useRevalidator } from 'react-router';



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


  export default function BasicFriendModal({ displayText }) {
    const [open, setOpen] = React.useState(false);

    const revalidator = useRevalidator();
    const Revalidatecallback = () => revalidator.revalidate();


    //the data that is set in the form
    const [formData, setFormData] = React.useState ({ 
      addFriendString: ''
    });


    //clear the form when it's closed by using this
    const initialFormData = { 
      addFriendString: ''
    };


    const handleOpen = () => setOpen(true);
  
    const handleClose = () => {
      setFormData(initialFormData);   //clear the form on close
      setOpen(false);
    };
  
  
  
    //handle form input
    const handleInput = (field, value) => {
      setFormData({ ...formData, [field]: value });
    }
  



  //handle form submission
  const handleSubmit = async () => {
    try {

        console.log('Form data:', formData);          //logs the submitted form data

        const response = await addFriend(formData);   //sends the friends username and identifier to the addFriend() function in friend.js


        if (response === "Success")   //check the response from friend.js
        {
            alert('Friend Added');
            Revalidatecallback(); //Re-renders friendlist to show new friend
            console.log('Friend was successfully added');                          
            handleClose();      //closes the form
        }
        else if ( response === "Friend not found")
        {
            alert('User does not exist');
        }
        else if (response === "Friend already added")
        {
            alert('User is already in your friendlist');
        }
        else
        {
            alert('Failed to add friend');
            console.log('Failed to add friend');
        }
    }
    catch (error) {
        console.error('Error when adding friend:', error.response?.data || error.message);     // prints the error message in console log
        alert('An error occurred while adding friend');
    }
  };



  
    return (
      <div>
        <Button onClick={handleOpen} title="Add friend" sx={{ width: '100%', padding: '8px', backgroundColor: '#d66536', color: '#f5ebe0' }}>
            {displayText}
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
                    <Typography sx = {{ textAlign: 'left', fontWeight: 'bold', color: '#d66536' }}>Enter your friend's username followed by their identifier separated by #</Typography>
                    <Typography sx = {{ fontSize: '13px' }}>Example: username#identifier</Typography>
                    <BasicTextField 
                      value={formData.addFriendString}
                      onChange={(newFriendList) => handleInput('addFriendString', newFriendList.target.value)}
                    />  
                </Item>
            </Grid>


            {/* Buttons - Add and Cancel */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)', paddingBottom: '15px' }}>
                <Item>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <FriendButtonDirectionStack handleClose={handleClose} handleSubmit={handleSubmit} />
                    </Box>
                </Item>
            </Grid>
  
  
  
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
