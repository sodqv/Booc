import * as React from 'react';
import Stack from '@mui/material/Stack';
import BasicButtons from "./button";


export default function ButtonDirectionStackGroups( { handleClose, handleSubmit } ) {

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <BasicButtons label = "Cancel" sx={{ backgroundColor: 'lightgray', borderColor: 'black', color: 'black' }} onClick={handleClose} />
        <BasicButtons label = "Change" sx={{ backgroundColor: 'lightblue', borderColor: 'black', color: 'black' }} onClick={handleSubmit} />
      </Stack>
    </div>
  );
}

