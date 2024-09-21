import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.js';
import {Link, useNavigate} from "react-router-dom";
//import QualityBtn from '../ButtonComponent.tsx'
import { Button } from '@mui/material';

export default function Sign_up_page(){
    let navigate = useNavigate();
    const changeToLoginPage = () => {
        let path = "/";
        navigate(path);
    }

    return(
        <div className='Page' id='SignUpPage'>
            <div className='SignUpText'>
                <h1>Sign up today!</h1>
                <p>A new chapter in your life</p>
            </div>
            
            <div className='LoginFields'>
                <Textfield id="outlined-basic" label={"Email"} variant="outlined"/>
                <Textfield id="outlined-basic" label={"Username"} variant="outlined"/>
                <Textfield id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                <Textfield id="outlined-password-input" label="Confirm password" type="password" autoComplete="current-password"/>
            </div>
            <div className='PageButtons'>
                <button className='leftButton' >Complete sign up</button>
                <button className='rightButton' onClick={changeToLoginPage}>Login page →</button>
            </div>
        </div>
    )
}