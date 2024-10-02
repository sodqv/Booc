import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.js';
import {Link, redirect, useNavigate, useSubmit} from "react-router-dom";
//import QualityBtn from '../ButtonComponent.tsx'
import { Button } from '@mui/material';
import {signUp as signUpModel} from "../../modelData/user.js"
import {Formik, Form} from "formik";

export async function signUpAction({request}){
    const response  = await signUpModel(request);
    if(response === "invalid" || response === null){
        //Set MUI prop for error to true

        return null;
    }
    else{
        return redirect(response);
    }
}

export default function Sign_up_page(){
    let navigate = useNavigate();
    const changeToLoginPage = () => {
        let path = "/";
        navigate(path);
    }

    const submit = useSubmit();

    return(
        <div className='Page' id='SignUpPage'>
            <div className='SignUpText'>
                <h1>Sign up today!</h1>
                <p>A new chapter in your life</p>
            </div>
            
            <Formik initialValues={{email:"", username:"", password1:"", password2:""}} onSubmit={(values) => {submit(values, {method:"post"})} } //onSubmit={login}
                >{({values, handleChange}) => (
                    <Form method='post'>
                        <div className='SignUpFields'>
                            <Textfield 
                                name="email" 
                                type="email"
                                value={values.email} 
                                onChange={handleChange} 
                                label="email" 
                                id="email" 
                                //error={failedSignUp}
                                variant="outlined" 
                            />

                            <Textfield 
                                name="username" 
                                type="username"
                                value={values.username} 
                                onChange={handleChange} 
                                label="username" 
                                id="username" 
                                //error={failedSignUp}
                                variant="outlined" 
                            />

                            <Textfield
                                name = "password1"
                                type = "password"
                                value = {values.password1}
                                onChange={handleChange}
                                label="Password"
                                id = "password1"
                                //error={failedSignUp}
                            />

                            <Textfield
                                name = "password2"
                                type = "password"
                                value = {values.password2}
                                onChange={handleChange}
                                label="Confirm password"
                                id = "password2"
                                //error={failedSignUp}
                            />
                        </div>
                        <div className='PageButtons'>
                            <button className='leftButton' >Complete sign up</button>
                            <button className='rightButton' onClick={changeToLoginPage}>Login page →</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}