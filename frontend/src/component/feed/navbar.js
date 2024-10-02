import { React, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {Link, redirect, useNavigate} from "react-router-dom";
import { isAuth } from '../../modelData/auth';
import './navbar.css';

export default function Navbar( {page} ) {

    const [hoverF, setHoverF] = useState(false);
    const [hoverP, setHoverP] = useState(false);

    let navigate = useNavigate();

    const changeToFeed = () => {
        let path = "/Feed";
        navigate(path);
    }
    const changeToProfile = () => {
        let path = "/Profile";
        isAuth();
        navigate(path);
    }

    // const changeToLogin = () => {
    //     let path = "/";
    //     isAuth();
    //     navigate(path);
    // }

    return (
        <div className='navBar' >
            {/* Left text */}
            <div className='booc'>
                <h1>BOOC</h1> 
                <button 
                    onClick={changeToFeed}
                    onMouseEnter={() => setHoverF(true)}
                    onMouseLeave={() => setHoverF(false)}
                    style={{
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
                        borderBottom: page == 'Profile' ? '3px solid white' : 'none',
                        color: hoverP ? 'black' : 'white'
                    }}
                >
                    PROFILE
                </button>
            </div>

            {/* Right text */}
            <div class="rightSide">  
                
                {/* Username */}
                <h2 class="username">Username</h2>

                {/* Avatar */}
                <Avatar 
                    alt="Amy Sharp" 
                    src="/static/images/9.jpg"
                    sx={{
                        marginTop: '7.5px',
                        marginBottom: '6px',
                        bgcolor: 'none',
                        height: '45px',
                        width: '45px'
                }}/>
                <div class="dropdown-content">
                    <a href="#">Settings</a>
                    <a href="#">Log out</a>
                </div>

            </div>
            
        </div>
    );
}