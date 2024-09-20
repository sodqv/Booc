import React from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';


export default function Header() {
    return (
        <div style={{
            position: 'relative',    // Keep the header fixed
            width: '100%',        // Ensure header fills the entire width of the page
            height: '60px',       // Fixed height for the header
            backgroundColor: '#718eaf', // Background color for the header
            boxShadow: '0px 2px 5px rgba(0,0,0,0.3)', // Optional shadow for the header
            display: 'flex',      // Use flexbox for centering content
        }}>
            {/* Left text */}
            <Box sx={{
                        marginLeft: '10px',
                        marginTop: '10px',
                        color: '#333',
                        fontWeight: 'bold'
                }}>
                <Typography variant="h5" sx={{ float: 'left', marginRight: '20px', fontWeight: 'bold' }}>
                    BOOC
                </Typography> 
                <Typography variant="button text" sx={{ float: 'left', marginRight: '15px', marginTop: '7px', textDecoration: 'underline'}}>
                    FEED
                </Typography> 
                <Typography variant="button text" sx={{ float: 'left', marginTop: '7px', }}>
                    PROFILE
                </Typography> 
            </Box>
            

            {/* Right text */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '0px',
                    right: '10px',
                    alignItems: 'row'
            }}>  
                
                {/* Username */}
                <Typography 
                    variant="h6"
                    sx={{
                        float: 'left', 
                        marginRight: '10px',
                        marginTop: '10px',
                        fontWeight: 'bold',
                        color: '#333',
                }}>
                    Username
                </Typography>
                {/* Avatar */}
                <Avatar 
                    alt="Amy Sharp" 
                    src="/static/images/9.jpg"
                    sx={{
                        marginTop: '7.5px',
                        bgcolor: 'purple',
                        height: '45px',
                        width: '45px'
                    }}/>

            </Box>
            
        </div>
    );
}