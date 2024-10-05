import * as React from 'react';
import Textfield, {TextFieldPassword} from '../TextField.js';
import {Link, redirect, useNavigate, useSubmit} from "react-router-dom";
import {getGroup, getAllGroups, createGroup, updateGroup, deleteGroup} from "../../modelData/group.js";
import { changePassword } from '../../modelData/user.js';
import Navbar from '../feed/navbar.js';
import {Formik, Form} from "formik";
import AlertDialog from './DeleteAccountDialogue.js';
import RadioBtn from "./MUIRadiobtn.js"
import { changeStartPage } from '../../modelData/user.js';
import { deleteUser as deleteUserController} from '../../controllers/userController.js';
import {logOut as logOutAuth} from "../../modelData/auth.js"

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

    return(
        <div>
            <Navbar/>
            <div className='settingsPage'>
                <Formik initialValues={{password1:"", password2:""}} onSubmit={(values) => {submit(values, {method:"post"})} } //onSubmit={login}
                    >{({values, handleChange}) => (
                        <Form method='post' className='changePasswordForm'>
                            <div className='changePasswordFields'>
                                <Textfield
                                    name = "password1"
                                    type = "password"
                                    value = {values.password1}
                                    onChange={handleChange}
                                    label="new Password"
                                    id = "password1"
                                    //error={failedToChangePassword}
                                />

                                <Textfield
                                    name = "password2"
                                    type = "password"
                                    value = {values.password2}
                                    onChange={handleChange}
                                    label="Confirm new password"
                                    id = "password2"
                                    //error={failedToChangePassword}
                                />
                            </div>

                            <button className='ResetPasswordBtn' type='submit'>Reset password</button>
                        </Form>
                    )}
                </Formik>
                <RadioBtn startingValue={0} setValueCallback={RadioBtnCallback}/> 
                
                {//------------------------------------------------------ Get startinvValue from user (probably api.get("/api/user")), in format 0 or 1
                }

                <AlertDialog callback={deleteUser}/>

                {/* Buttons for all group functions
                    <button onClick={createGroup}>Create group</button>
                */}
                <button onClick={getGroup}>Get group</button>
                <button onClick={getAllGroups}>Get groups</button>
                
                <button onClick={updateGroup}>Post group</button>
                <button onClick={deleteGroup}>Delete group</button>

            </div>
        </div>
    )
}