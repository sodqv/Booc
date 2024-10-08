import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({callback}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    setOpen(false);
    callback(); //This will trigger the delete account
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ color: 'white', borderColor: 'black' }}>
        Delete account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: 'black', // Set dialog background to black
            color: 'white',},}}
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: 'white' }}>
          {"Delete this account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ color: 'white' }}>
            Are you sure you want to delete this account? This is permanent and non-recoverable action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'white' }}>Disagree</Button>
          <Button onClick={handleAccept} autoFocus sx={{ color: 'white' }}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
