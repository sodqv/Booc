import * as React from 'react';
import { useState } from 'react';
import Textfield, {TextFieldPassword} from '../TextField.tsx';
import {Link} from "react-router-dom";
import Login_page from './Login.tsx';
import Sign_up_page from './Sign_up.tsx';

export default function Root(){
    const [login_page_currently, set_login_page_currently] = useState(true);

    function changePage(){
        set_login_page_currently(!login_page_currently);
    }

    return(
        <div>
             <div className='Table' id={login_page_currently ? "LoginPage" : "SignUpPage"}>
                <div className='OtherPage'></div>
                <div className='Binder'></div>
                {login_page_currently ? <Login_page clickhandler={changePage}/> : <Sign_up_page clickhandler={changePage}/>}
            </div>
            <div className='Eraser'>
                <div className='Tip'/>
                <div className='Base'/>
            </div>
        </div>
       

        
    );
}