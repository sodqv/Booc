import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.tsx';
import {Link} from "react-router-dom";

interface LoginPageProps{
    clickhandler: () => void;
}

export default function Login_page({clickhandler} : LoginPageProps){
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
                <button className='leftButton' onClick={clickhandler}>← Sign up</button>
                <button className='rightButton'>Login →</button>
            </div>
        </div>     
    )
}