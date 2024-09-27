import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.js';
import {Link, redirect, useNavigate} from "react-router-dom";
import { colors } from '@mui/material';
import {Formik, Form} from "formik";
import {login} from '../../modelData/Login/loginModel.js'

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

            <Formik initialValues={{email:"", password:""}} onSubmit={login}
                >{({values, handleChange}) => (
                    <Form>
                        <div className='LoginFields'>
                            <Textfield 
                                name="email" 
                                type="email"
                                value={values.email} 
                                onChange={handleChange} 
                                label="email" 
                                id="email" 
                                variant="outlined" />

                            <Textfield
                                name = "password"
                                type = "password"
                                value = {values.password}
                                onChange={handleChange}
                                label="Password"
                                id = "password"
                                autoComplete="current-password"/>
                            
                            <Link to=''>Reset password </Link>
                        </div>
                        <div className='PageButtons'>
                            <button className='leftButton' onClick={changeToSignUpPage}>← Sign up</button>
                            <button className='rightButton' type="submit">Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>     
    )
}