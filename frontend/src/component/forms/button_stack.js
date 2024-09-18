import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import BasicButtons from "./button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ButtonDirectionStack() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <BasicButtons label = "Cancel" sx={{ backgroundColor: 'lightgray', borderColor: 'black', color: 'black' }} />
        <BasicButtons label = "Create" sx={{ backgroundColor: 'lightblue', borderColor: 'black', color: 'black' }} />
      </Stack>
    </div>
  );
}

