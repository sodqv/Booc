import * as React from 'react';
import { useState } from 'react';
import Textfield, {TextFieldPassword} from '../TextField.tsx';
import {Link, Outlet, useLocation} from "react-router-dom";
import Login_page from './Login.tsx';
import Sign_up_page from './Sign_up.tsx';

export default function Root(){
    const location = useLocation();

    return(
        <div>
             <div className='Table' id={location.pathname === "/" ? "LoginPage" : "SignUpPage"}>
                <div className='OtherPage'></div>
                <div className='Binder'></div>
                <Outlet />
            </div>
            <div className='Eraser'>
                <div className='Tip'/>
                <div className='Base'/>
            </div>
        </div>
       

        
    );
}