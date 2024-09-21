import { React, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {Link, redirect, useNavigate} from "react-router-dom";


export default function Header( {page} ) {
    const styleBtn={
        marginTop: '7px',
        backgroundColor: '#718eaf',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '20px',
        float: 'left',
        marginRight: '15px'
    }

    const [hoverF, setHoverF] = useState(false);
    const [hoverP, setHoverP] = useState(false);

    let navigate = useNavigate();

    const changeToFeed = () => {
        let path = "/Feed";
        navigate(path);
    }
    const changeToProfile = () => {
        let path = "/Profile";
        navigate(path);
    }

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
                <button 
                    onClick={changeToFeed}
                    onMouseEnter={() => setHoverF(true)}
                    onMouseLeave={() => setHoverF(false)}
                    style={{
                        ...styleBtn,
                        borderBottom: page == 'Feed' ? '3px solid #333333' : 'none',
                        color: hoverF ? 'black' : '#333333'
                    }}
                >
                    FEED
                </button>
                <button 
                    onClick={changeToProfile}
                    onMouseEnter={() => setHoverP(true)}
                    onMouseLeave={() => setHoverP(false)}
                    style={{
                        ...styleBtn,
                        borderBottom: page == 'Profile' ? '3px solid #333333' : 'none',
                        color: hoverP ? 'black' : '#333333'
                    }}
                >
                    PROFILE
                </button>
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