import * as React from 'react';
import Stack from '@mui/material/Stack';
import BasicButtons from "./button";


export default function ButtonDirectionStackGroups( { handleClose, handleSubmit } ) {

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <BasicButtons label = "Cancel" sx={{ backgroundColor: 'gray', borderColor: 'gray', color: 'white' }} onClick={handleClose} />
        <BasicButtons label = "Change" sx={{ backgroundColor: '#D66536', borderColor: '#D66536', color: 'white' }} onClick={handleSubmit} />
      </Stack>
    </div>
  );
}

