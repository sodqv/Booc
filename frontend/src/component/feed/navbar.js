import { React } from 'react';
import Avatar from '@mui/material/Avatar';
import {Link, redirect, useNavigate} from "react-router-dom";
import { isAuth } from '../../modelData/auth';
import {logOut as logOutAuth} from "../../modelData/auth"
import './navbar.css';
import { useLoaderData } from 'react-router-dom';

export default function Navbar( {page} ) {
    //const userNameHere = useState("");
    const userNameHere = useLoaderData();
    let navigate = useNavigate();

    const changeToFeed = () => {
        let path = "/Feed";
        navigate(path);
    }
    const changeToProfile = () => {
        let path = "/Profile";
        navigate(path);
    }
    const logOut = async () => {
        let path = "/"
        const sucess = await logOutAuth();
        if(sucess === 0){return;}
        navigate(path);
    }
    const changeToSettings = () => {
        let path = "/Settings";
        navigate(path);
    }
    
    return (
        
        <div className='navBar'>
            {/* Left text */}
            <div className='booc'>
                <h1>BOOC</h1> 
                <button 
                    className='feed'
                    onClick={changeToFeed}
                    style={{ borderBottom: page === 'Feed' ? '3px solid white' : 'none' }}
                >
                    FEED
                </button>
                <button 
                    className='prof'
                    onClick={changeToProfile}
                    style={{ borderBottom: page === 'Profile' ? '3px solid white' : 'none' }}
                >
                    PROFILE
                </button>
            </div>

            {/* Right text */}
            <div class="rightSide">  
                
                {/* Username */}
                <h2 class="username">{userNameHere}</h2>

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
                    <a onClick={changeToSettings}>Settings</a>
                    <a href="" onClick={logOut}>Log out</a>
                </div>

            </div>
            
        </div>
    );
}