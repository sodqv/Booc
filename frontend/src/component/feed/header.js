import { React, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {Link, redirect, useNavigate} from "react-router-dom";


export default function Header( {page} ) {
    const styleBtn={
        marginTop: '10px',
        backgroundColor: '#d66536',
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
            backgroundColor: '#d66536', // Background color for the header
            boxShadow: '0px 2px 5px rgba(0,0,0,0.3)', // Optional shadow for the header
            display: 'flex',      // Use flexbox for centering content
        }}>
            {/* Left text */}
            <Box sx={{
                    marginLeft: '10px',
                    marginTop: '7px',
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                <h1 style={{ float: 'left', marginRight: '20px', fontSize: '30px' }}>
                    BOOC
                </h1> 
                <button 
                    onClick={changeToFeed}
                    onMouseEnter={() => setHoverF(true)}
                    onMouseLeave={() => setHoverF(false)}
                    style={{
                        ...styleBtn,
                        borderBottom: page == 'Feed' ? '3px solid white' : 'none',
                        color: hoverF ? 'black' : 'white'
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
                        borderBottom: page == 'Profile' ? '3px solid white' : 'none',
                        color: hoverP ? 'black' : 'white'
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
                <h2 
                    style={{
                        float: 'left', 
                        marginRight: '10px',
                        marginTop: '10px',
                        fontWeight: 'bold',
                        color: 'white',
                }}>
                    Username
                </h2>
                {/* Avatar */}
                <Avatar 
                    alt="Amy Sharp" 
                    src="/static/images/9.jpg"
                    sx={{
                        marginTop: '7.5px',
                        bgcolor: 'none',
                        height: '45px',
                        width: '45px'
                    }}/>

            </Box>
            
        </div>
    );
}