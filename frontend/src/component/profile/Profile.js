import React from 'react';
import { Box, Typography } from '@mui/material';
import ImageAvatars from './avatars'; 
import BasicTable from './table'; 
import TimeTable from './timeTable';
import FriendList from './friendList';
import BasicModal from '../forms/create_new_event';
import BasicDateCalendar from './calendar';

export default function Profile() {
    return (
    <Box
        sx={{
            // Fix the basic display
            position: 'fixed',
            height: '100%',  
            width: '100%', 
            backgroundColor: 'black',
            // No scrolling able
            overflow: 'hidden', 
            display: 'flex',
            alignItems: 'center',
      }}
    >

    {/* Userpicture */}
    <Box
        sx={{
            position: 'fixed',
            top: '9px',
            right: '10px',
            display: 'flex',
            alignmentBaseline: 'central',
            zIndex: 1,
        }}
    >  

    {/* Left text */}
    <Typography 
        variant="h6" 
        sx={{
            marginRight: '1020px',
            marginTop: '5px',
            fontWeight: 'bold',
            color: '#333',
        }}
    >
        BOOC
    </Typography> 
    
    {/* Username */}
    <Typography 
        variant="h6"
        sx={{
        marginRight: '20px',
        marginTop: '5px',
        fontWeight: 'bold',
        color: '#333',
        }}
    >
        Username
    </Typography>
    <ImageAvatars />

    </Box>

    {/* Header */}
    <Box
        sx={{
            position: 'absolute',    
            top: 0,               
            left: 0,
            width: '100%',
            height: '20%',
            backgroundColor: '#f2dabf',
            zIndex: 0,  
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
    </Box>
    
    {/* Left box */}
    <Box
        sx={{
            position: 'relative',
            top: '20%',
            right: '0px',
            width: '248px',
            height: '648px',
            backgroundColor: '#f5ebe0', 
            zIndex: 0,  
            flexDirection: 'column', 
            padding: '16px',
        }}
    >
        <Box
            sx={{
                width: '235px', // Adjust the width of the calendar
                height: '200px', // Adjust the height of the calendar
                backgroundColor: '#f5f5f5', // Add a background color
                borderRadius: '3px', // Add rounded corners
                padding: '6px',
            }}
        >
            <BasicDateCalendar/>
        </Box>

        <Box
            sx={{
            position: 'fixed',
            top: '145px',
            left: '2px',
            width: '245px',
            padding: '16px',
        }}
        >
            <FriendList/>

            <Box
            sx={{
            position: 'fixed',
            top: '300px',
            left: '2px',
            width: '245px',
            padding: '16px',
        }}
        >
            <BasicModal/>
        </Box>
        </Box>
    </Box>

    {/* Box for Schedule */}
    <Box
        sx={{
            position: 'absolute',
            top: '10%',
            right: '0px',
            width: '1000px',
            height: '600px',
            backgroundColor: '#f5ebe0',
            padding: 1.5,
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',  
            flexDirection: 'row', 
        }}
    >
          {/* Container for TimeTable*/}
          <Box
                sx={{
                    width: '5%',
                    height: '100%',
                    padding: 1,
                    paddingTop: 3,
                    paddingRight: 0,
                }}
            >
                <TimeTable />
            </Box>
            {/* Container for BasicTable */}
            <Box
                sx={{
                    width: '95%', 
                    height: '100%',
                    padding: 1,
                    paddingLeft: 0,
                }}
            >
                <BasicTable />
            </Box>
        </Box>
    </Box>
  );
}