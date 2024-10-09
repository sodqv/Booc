import * as React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import DeleteButtonStack from "./delete_button_stack.js";
import { useLoaderData, useRevalidator } from 'react-router';

import { deleteFriend } from "../../modelData/friend.js";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    maxWidth: '600px',
    height: '10vh',
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


  export default function DeleteFriendModal({ displayText, friendsUsername, friendIdentifier }) {
    const [open, setOpen] = React.useState(false);

    const currentUser = useLoaderData();

    const revalidator = useRevalidator();
    const Revalidatecallback = () => revalidator.revalidate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  


  //handle form submission
  const handleDelete = async () => {
    try {

        //for debugging
        console.log('Trying to delete friend:', {
            deleteFriendString: `${friendsUsername}#${friendIdentifier}`,
            currentUserID: currentUser._id,
        });

    

        const response = await deleteFriend({
            deleteFriendString: `${friendsUsername}#${friendIdentifier}`,
            currentUserID: currentUser._id
        });


        if (response === "Success")
        {
            Revalidatecallback(); //Causes re-render to update friendlist
            console.log('Friend successfully deleted');                          
            handleClose();     
        }
        else
        {
            console.log('Failed to delete friend');  
            handleClose();
        }
    }
    catch (error) {
        console.error('Error when deleting friend:', error.response?.data || error.message);     // prints the error message in console log
        alert('An error occurred while deleting the friend');
    }
  };


  
    return (
      <div>
        <IconButton aria-label="delete" onClick={handleOpen} title="Delet friend" sx={{ color: '#d66536' }}>
          <DeleteIcon />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
  
          <Box sx={style}>
            <div style={{width: '100%', height: '100%', paddingLeft: '10px'}}>
  
  
              {/* Header - Delete Friend */}
              <Grid sx={{ display: 'grid', columnGap: 10, rowGap: 5, gridTemplateColumns: 'repeat(1, 1fr)'}}>
                  <Item>
                      <Typography textAlign={'center'} sx={{ fontWeight: 'normal', fontSize: 20, marginTop: -2 }}>Do you want to remove <b>{friendsUsername}</b> from your friendlist?</Typography>
                  </Item>
              </Grid>


            {/* Buttons - Delete and Cancel */}
            <Grid sx={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(1, 1fr)', paddingBottom: '15px' }}>
                <Item>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <DeleteButtonStack handleClose={handleClose} handleDelete={handleDelete} />
                    </Box>
                </Item>
            </Grid>
  
  
  
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
