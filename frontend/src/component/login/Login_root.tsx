import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.tsx';
import {Link} from "react-router-dom";
import Login_page from './Login.tsx';
import Sign_up_page from './Sign_up.tsx';

export default function root(){
    let login_page_currently : boolean = true;

    return(
        <div className='Table'>
            <div className='OtherPage'>hello</div>
            <div className='Binder'></div>
            <Login_page />
        </div>
    );
}