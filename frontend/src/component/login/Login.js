import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.js';
import {Link, redirect, useNavigate} from "react-router-dom";
import { colors } from '@mui/material';

export default function Login_page(){
    let navigate = useNavigate();

    const changeToSignUpPage = () => {
        let path = "/SignUp";
        navigate(path);
    }

    const changeToProfile = () => {
        let path = "/Profile";
        navigate(path);
    }


    return(
        <div className='Page'>
            <div className='Intro_Logo'>
                <div>
                    <h1>Booc</h1>
                    <p>A new chapter</p>  
                </div>
                <img 
                    src="/assets/free_book_image.png" 
                    alt='WeDoNotNeedSleep' 
                    style={{ position: 'absolute', width: '150px', height: 'auto', top: '0px', right: '0px' }}
                />
            </div>
            <div className='LoginFields'>
                <Textfield id="outlined-basic" label={"Email/Username"} variant="outlined" />
                <Textfield id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                <Link to=''>Reset password </Link>
            </div>
            <div className='PageButtons'>
                <button className='leftButton' onClick={changeToSignUpPage}>← Sign up</button>
                <button className='rightButton' onClick={changeToProfile}>Login</button>
            </div>
        </div>     
    )
}