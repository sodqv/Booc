import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Box>
      <Stack direction="row" spacing={3}>
        <Avatar 
          alt="Avatar" 
          src="/static/images/1.png" 
          sx={{ width: 40, height: 40 }}
        /> 
      </Stack>
    </Box>
  );
}