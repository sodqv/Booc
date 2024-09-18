import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.tsx';
import {Link, redirect, useNavigate} from "react-router-dom";

export default function Login_page(){
    let navigate = useNavigate();

    const changeToSignUpPage = () => {
        let path = "/SignUp";
        navigate(path);
    }


    return(
        <div className='Page'>
            <div className='Intro_Logo'>
                <div>
                    <h1>Booc</h1>
                    <p>A new chapter</p>  
                </div>
                <img src="TestLogo.png" alt='WeDoNotNeedSleep'/>
            </div>
            <div className='LoginFields'>
                <Textfield content={"Email/Username"}/>
                <TextFieldPassword />
                <Link to=''>Reset password</Link>
            </div>
            <div className='PageButtons'>
                <button className='leftButton' onClick={changeToSignUpPage}>← Sign up</button>
                <button className='rightButton'>Login →</button>
            </div>
        </div>     
    )
}