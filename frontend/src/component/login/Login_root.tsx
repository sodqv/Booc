import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.tsx';
import {Link} from "react-router-dom";

export default function root(){
    return(
        <div className='Table'>
            <div className='OtherPage'></div>
            <div className='Binder'></div>
            <div className='Page'>
                <Textfield content={"Email/Username"}/>
                <TextFieldPassword />
                <Link to=''/>
                <button />
                <button />
            </div>
        </div>
    );
}