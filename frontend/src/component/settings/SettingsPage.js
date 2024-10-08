import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.js';
import {Link, redirect, useNavigate, useSubmit} from "react-router-dom";
import {getGroup, getAllGroups, createGroup, updateGroup, deleteGroup, leaveGroup} from "../../modelData/group.js";
import { changePassword } from '../../modelData/user.js';
import Navbar from '../feed/navbar.js';
import {Formik, Form} from "formik";
import AlertDialog from './DeleteAccountDialogue.js';
import RadioBtn from "./MUIRadiobtn.js"
import { changeStartPage } from '../../modelData/user.js';
import { deleteUser as deleteUserController} from '../../controllers/userController.js';
import {logOut as logOutAuth} from "../../modelData/auth.js"
import {getCurrentUser} from "../../modelData/user"
import { useLoaderData } from 'react-router-dom';

export async function changePasswordAction({request}){
    const response  = await changePassword(request); //Changes password
    if(response === "Failed to change password" || response === null){
        //Set MUI prop for error to true
        console.log("Failed to change password");
        return null;
    }
    else{
        //Give feedback that password has changed (like a popup)
        console.log("Changed password");
        return null;
    }
}

export default function SettingsPage(){
    const submit = useSubmit();
    let navigate = useNavigate();

    const deleteUser = async () => {
        //Deletes account
        await deleteUserController();

        //Logs you out
        const sucess = await logOutAuth();
        if(sucess === 0){return;}

        //Moves you to start
        let path = "/";
        navigate(path);
    }

    const RadioBtnCallback = async (callValue) => {
        //Update user with new value
        await changeStartPage(callValue);
    }

    const getUserFunc = async () => {
        return getCurrentUser().startingPage;
    }

    return(
        <div style={{backgroundColor: '#f5ebe0', height: '100vh'}}>
            <Navbar/>
            <div className='settingsPage'>

                <div style={{
                    marginTop: '30px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    flex: 1, 
                    backgroundColor: '#d66536', 
                    padding: '10px', 
                    margin: '0 10 px', 
                    borderRadius: '10px',
                    width: '230px'
                }}>

                <h2 style={{ color: 'white' }} > Password Settings </h2>

                    <Formik initialValues={{password1:"", password2:""}} onSubmit={(values) => {submit(values, {method:"post"})} } //onSubmit={login}
                        >{({values, handleChange}) => (
                            <Form method='post' className='changePasswordForm'>
                                <div className='changePasswordFields'>
                                    <Textfield
                                        name = "password1"
                                        type = "password"
                                        value = {values.password1}
                                        onChange={handleChange}
                                        label="New password"
                                        id = "password1"
                                        inputProps={{ 
                                            style: { 
                                                backgroundColor: 'white', 
                                                color: 'gray', 
                                                borderRadius: '5px' 
                                            } 
                                        }}
                                        //error={failedToChangePassword}
                                    />

                                    <Textfield
                                        name = "password2"
                                        type = "password"
                                        value = {values.password2}
                                        onChange={handleChange}
                                        label="Confirm new password"
                                        id = "password2"
                                        inputProps={{ 
                                            style: { 
                                                backgroundColor: 'white', 
                                                color: 'gray', 
                                                borderRadius: '5px' 
                                            } 
                                        }}
                                        //error={failedToChangePassword}
                                    />
                                </div>

                                <button 
                                    className='ResetPasswordBtn' 
                                    type='submit'
                                    style={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        cursor: 'pointer',
                                        width: '470px'
                                    }}
                                >Reset password
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                
                <div style={{
                    marginTop: '10px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    flex: 1, 
                    backgroundColor: '#d66536', 
                    padding: '10px', 
                    margin: '0 10 px', 
                    borderRadius: '10px',
                    width: '230px'
                }}>
                    <RadioBtn 
                    startingValue={useLoaderData().startingPage} setValueCallback={RadioBtnCallback}/> 
                </div>

                {//------------------------------------------------------ Get startinvValue from user (probably api.get("/api/user")), in format 0 or 1
                }

                <div style = {{ backgroundColor: 'black', color: 'gray', borderRadius: '5px', width: '250px', marginTop: '10px' }}>
                    <AlertDialog callback={deleteUser}/>
                </div>


                {/* Buttons for all group functions
                <button onClick={getGroup}>Get group</button>
                <button onClick={getAllGroups}>Get groups</button>
                <button onClick={createGroup}>Create group</button>
                <button onClick={updateGroup}>Put group</button>
                <button onClick={leaveGroup}>Leave group</button>
                <button onClick={deleteGroup}>Delete group</button>
                */}

            </div>
        </div>
    )
}