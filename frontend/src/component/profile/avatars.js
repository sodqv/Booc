import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right',
        height: '80vh', // Full viewport height
      }}
    >
      <Stack direction="row" spacing={3}>
        <Avatar 
          alt="Avatar" 
          src="/static/images/avatars/image.png" 
          sx={{ width: 60, height: 60 }}
        />
        
      </Stack>
      </Box>
  );
}