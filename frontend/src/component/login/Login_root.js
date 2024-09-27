import * as React from 'react';
import { useState } from 'react';
import Textfield, {TextFieldPassword} from '../TextField.js';
import {Link, Outlet, useLocation} from "react-router-dom";

export default function Root(){
    const location = useLocation();

    return(
        <div>
             <div className='Table' id={location.pathname === "/" ? "LoginPage" : "SignUpPage"}>
                <div className='OtherPage'></div>
                <div className='Binder'></div>
                <Outlet />
            </div>
        </div>
    );
}