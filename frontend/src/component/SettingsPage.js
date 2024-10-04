import * as React from 'react';
import {getGroup, getAllGroups, createGroup, updateGroup, deleteGroup} from "../modelData/group";

export default function SettingsPage(){
    return(
        <div>



            <button onClick={getGroup}>Get group</button>
            <button onClick={getAllGroups}>Get groups</button>
            <button onClick={createGroup}>Create group</button>
            <button onClick={updateGroup}>Post group</button>
            <button onClick={deleteGroup}>Delete group</button>
        </div>
    )
}