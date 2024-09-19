import * as React from 'react';
import Stack from '@mui/material/Stack';
import BasicButtons from "./button";


export default function ButtonDirectionStack( { handleClose } ) {

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <BasicButtons label = "Cancel" sx={{ backgroundColor: 'lightgray', borderColor: 'black', color: 'black' }} onClick={handleClose} />
        <BasicButtons label = "Create" sx={{ backgroundColor: 'lightblue', borderColor: 'black', color: 'black' }} />
      </Stack>
    </div>
  );
}

