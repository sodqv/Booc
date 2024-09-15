import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.tsx';
import {Link} from "react-router-dom";
//import QualityBtn from '../ButtonComponent.tsx'
import { Button } from '@mui/material';

interface signUpPageProps{
    clickhandler: () => void;
}

export default function Sign_up_page({clickhandler} : signUpPageProps){
    return(
        <div className='Page' id='SignUpPage'>
            <div className='SignUpText'>
                <h1>Sign up today!</h1>
                <p>A new chapter in your life</p>
            </div>
            
            <div className='LoginFields'>
                <Textfield content={"Email"}/>
                <Textfield content={"Username"}/>
                <TextFieldPassword />
                <TextFieldPassword />
            </div>
            <div className='PageButtons'>
                <button className='leftButton' >← Complete sign up</button>
                <button className='rightButton' onClick={clickhandler}>Login page→</button>
            </div>
        </div>
    )
}