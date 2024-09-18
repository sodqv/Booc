import React from 'react';
import { Box, Typography } from '@mui/material';
import ImageAvatars from './avatars'; 
import BasicTable from './table'; 
import TimeTable from './timeTable';
import FriendList from './friendList';

export default function Profile() {
    return (
    <Box
        sx={{
            // Fix the basic display
            position: 'fixed',
            height: '800px',  
            width: '1280px', 
            backgroundColor: '#f5ebe0',
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
            position: 'fixed',    // Keep the header fixed
            top: 0,               // Align to the top of the page
            left: 0,              // Align to the left edge
            width: '100%',        // Ensure header fills the entire width of the page
            height: '60px',       // Fixed height for the header
            backgroundColor: '#718eaf', // Background color for the header
            zIndex: 0,  
            boxShadow: '0px 2px 5px rgba(0,0,0,0.1)', // Optional shadow for the header
            display: 'flex',      // Use flexbox for centering content
            alignItems: 'center', // Vertically center items in the header
            justifyContent: 'center', // Horizontally center items in the header
        }}
    >
    </Box>
    
    {/* Left box */}
    <Box
        sx={{
            position: 'left',  // Fixed positioning
            top: '0px',        // Positioned below the header
            right: '0px',       // Fixed position with some margin from the left
            width: '280px',    // Fixed width for the container
            height: '680px',    // Fixed height for the container
            backgroundColor: '#929673',       // Fixed height for the header
            zIndex: 0,  
            display: 'flex',      // Use flexbox for centering content
            alignItems: 'left', // Vertically center items in the header
            justifyContent: 'left', // Horizontally center items in the header
        }}
    >
        <FriendList/>
    </Box>

    {/* Box for BasicTable positioned below the header */}
    <Box
        sx={{
            position: 'fixed',  // Fixed positioning
            top: '60px',        // Positioned below the header
            right: '0px',       // Fixed position with some margin from the left
            width: '1000px',    // Fixed width for the container
            height: '600px',    // Fixed height for the container
            backgroundColor: '#D1C481', // Background color
            padding: 1.5,
            boxSizing: 'border-box', // Ensure padding is included in width/height
            overflow: 'hidden', // Hide overflow to control scroll
            display: 'flex',   // Use flexbox for layout
            flexDirection: 'row', // Arrange items in a row
        }}
    >
          {/* Container for TimeTable*/}
          <Box
                sx={{
                    width: '5%',    // Adjust width as needed
                    height: '100%',
                    padding: 1,
                    paddingTop: 3,
                    paddingRight: 0,
                    overflowY: 'auto', // Scroll if content overflows vertically
                }}
            >
                <TimeTable />
            </Box>
            {/* Container for BasicTable */}
            <Box
                sx={{
                    width: '95%',    // Adjust width as needed
                    height: '100%',
                    padding: 1,
                    paddingLeft: 0,
                    overflowY: 'auto', // Scroll if content overflows vertically
                }}
            >
                <BasicTable />
            </Box>
        </Box>
    </Box>
  );
}